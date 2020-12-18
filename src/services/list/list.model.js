var mongoose = require("mongoose");

var listSchema = mongoose.Schema({
  product_id: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  rate: {
    type: String,
  },
  product_name: {
    type: String,
  },
});
module.exports = mongoose.model("Lists", listSchema);
