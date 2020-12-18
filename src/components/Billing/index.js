import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Axios } from "../../utils/axios";
import BillingDetails from "./details";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Billing = (props) => {
  const classes = useStyles();
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [searchData, setSearch] = useState([]);
  const handleSubmit = () => {
    if (!pid && !pname) alert("please enter one field");
    else{
      let data = "";
      if (pid) {
        data = pid;
      } else {
        data = pname;
      }
      Axios.get("/list/search", { params: { product: data } }).then((res) => {
        if (res.data.status) {
          console.log("hell", res.data.data);
  
          setSearch(res.data.data);
        }
      });
    };
    if (searchData.length > 0) {
      return <BillingDetails show={searchData} />;
    }
    }
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1>Billing Counter App</h1>
        <Typography component="h4" variant="h5">
          Search Product
        </Typography>
        <form className={classes.form}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="product ID"
            value={pid}
            onChange={(e) => setPid(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            name="pname"
            label="Product Name"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Search
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default Billing;
