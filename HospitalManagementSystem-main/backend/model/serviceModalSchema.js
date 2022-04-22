const mongoose = require("mongoose");
const serviceModalSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {type: Date, default: Date.now},
});
module.exports = mongoose.model("serviceModal", serviceModalSchema);
