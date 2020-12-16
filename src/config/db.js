const mongoose = require("mongoose");

const fs = require("fs");

module.exports = class DBManager {
  async connectToDatabase() {
    //const uri = `mongodb://localhost:27017/mongo`;
    const testUri =
      "mongodb+srv://admin:admin@billing.11cpq.mongodb.net/Billing?retryWrites=true&w=majority";

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    mongoose
      .connect(testUri, options)
      .then((client) => {
        console.log("Connection Established !!", testUri);
      })
      .catch((error) => {
        console.log("Database connection failed !!", error.message);
      });
  }
};
