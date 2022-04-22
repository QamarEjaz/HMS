const mongoose = require("mongoose");
const checkoutSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  orderNote: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  date: {type: Date, default: Date.now},
});

module.exports = mongoose.model("checkout", checkoutSchema);
