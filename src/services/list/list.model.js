var mongoose = require("mongoose");

var listSchema = mongoose.Schema({
  product_id: {
    type: String,
  },
  quantity: {
    type: String,
  },
  rate: {
    type: Number,
  },
  product_name: {
    type: String,
  },
});
module.exports = mongoose.model("Lists", listSchema);
