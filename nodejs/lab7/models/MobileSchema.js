const mongoose = require("mongoose");

var MobileSchema = mongoose.Schema({
  _id: String,
  name: String,
  brand: String,
});

var MobileModel = mongoose.model("mobile", MobileSchema, "mobile");

module.exports = MobileModel;
