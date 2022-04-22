const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Superadmin", "Businessdeveloper"],
    default: "Businessdeveloper",
  },
  status: {
    type: String,
    default: "De Active",
  },
});

module.exports = mongoose.model("Portaluser", userSchema);
