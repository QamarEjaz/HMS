const mongoose = require("mongoose");
const modalSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  idea: {
    type: String,
    required: true,
  },
  weAreSelect: {
    type: String,
    required: true,
    enum: ["a Company", "a Non Profit", "a Startup", "a Venture"],
  },
  searchOfSelect: {
    type: String,
    required: true,
    enum: ["DevelopmentandDesign", "DigitalMarketing", "CustomerServices"],
  },
  date: {type: Date, default: Date.now},
});
module.exports = mongoose.model("modal", modalSchema);
