import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper'; 
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { invoice_data } from "../../redux/actions/auth";
import CustomTable from "../table";
import jsPDF from 'jspdf'; 
import html2canvas from 'html2canvas'; 

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  papers: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
 
}));

const Invoice = (props) => {
  const classes = useStyles();
  const columns = [
    { title: "ID", field: "product_id" },
    { title: "Name", field: "product_name" },
    { title: "Quantity", field: "quantity" },
    { title: "Amount", field: "amount" },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const dat = props.inv.map((d) => {
      return d.userInfo;
    });
    setData(dat, ...data);
  }, [props.inv]);

  console.log("d", data);
  const printDocument =() =>{  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf"); 
      });  

  } 
  return (
    <>
      <br></br>
      <Button type="button" onClick={printDocument} variant="contained" color="secondary">
        Print
      </Button>
      <Paper className={classes.papers}  id="pdfdiv">
      <CustomTable title="Invoices" columns={columns} data={data} />;
      </Paper>
    </>
  );
};
function mapStateToProps(state) {
  console.log("j", state.auth);
  return {
    inv: state.auth,
  };
}

export default connect(mapStateToProps)(Invoice);
