import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Axios } from "../../utils/axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { invoice_data } from "../../redux/actions/auth";

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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const BillingDetails = (props) => {
  const { show } = props;
  const classes = useStyles();
  const [quant, setQuantity] = useState("");
  const history = useHistory();
  const handleSubmit = () => {
    let data = {
      product_id: show[0].product_id,
      quantity: quant,
    };

    Axios.patch("/list/update", data).then((res) => {
      if (res.data.status) {
        console.log("res", show[0].rate.replace("$", "") * 2);

        const data = {
          product_id: show[0].product_id,
          quantity: quant,
          product_name: show[0].product_name,
          amount: "$" + show[0].rate.replace("$", "") * quant,
        };
        props.invoice_data(data);
        history.push("/invoice");
      }
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      {show
        ? show.map((d) => (
            <form key={d._id} className={classes.form}>
              <TextField
                margin="normal"
                fullWidth
                label="Product ID"
                value={d.product_id}
                disabled={true}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Product Name"
                value={d.product_name}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Product Rate"
                value={d.rate}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Quantity"
                value={d.quantity}
              />
              <TextField
                variant="outlined"
                margin="normal"
                label="Enter the item Quantity"
                value={quant}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Add to invoice
              </Button>
            </form>
          ))
        : null}
    </Container>
  );
};
BillingDetails.propTypes = {
  invoice_data: PropTypes.func.isRequired,
};
export default connect(null, { invoice_data })(BillingDetails);
