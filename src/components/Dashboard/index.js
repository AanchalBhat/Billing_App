import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Axios } from "../../utils/axios";
import CustomTable from "../table";
import Navbar from "./navbar";

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
    { title: "ID", field: "product_id" },
    { title: "Name", field: "product_name" },
    { title: "Quantity", field: "quantity" },
    { title: "Amount", field: "rate" },
  ];
  useEffect(() => {
    handleLists();
  }, []);
  const [listNames, setLists] = useState([]);

  const handleLists = () => {
    Axios.get("/list/allList").then((res) => {
      if (res.data.status) {
        console.log("hell", res.data.data);
        setLists(res.data.data);
      }
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h1>Billing Counter App</h1>
        </div>
      </Container>
      <br />
      <CustomTable
        title="LISTS OF ALL PRODUCTS"
        columns={columns}
        data={listNames}
      />
    </>
  );
};
export default Dashboard;
