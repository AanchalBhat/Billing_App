import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Axios } from '../../utils/axios';
import CustomTable from '../table';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const columns = [
    { title: 'ID', field: 'product_id' },
    { title: 'Name', field: 'product_name' },
    { title: 'Quantity', field: 'quantity' },
    { title: 'Amount', field: 'rate' }

  
    
    
  ];
  useEffect(()=>{
    handleLists()
  }, [])
  const [listNames,setLists] = useState([])
  
  

  const handleLists = () =>{
    Axios.get('/list/allList')
    .then((res) => {
      if (res.data.status) {
          console.log('hell',res.data.data)
          setLists(res.data.data)
      }
     })
}


  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h4" variant="h5">
          All lists
        </Typography>
      </div>
    </Container>
     <CustomTable
     title="LISTS OF ALL PRODUCTS"
     columns={columns}
     data={listNames}
    
    />
    </>
  );


};
export default Dashboard;



 
  
    
  
