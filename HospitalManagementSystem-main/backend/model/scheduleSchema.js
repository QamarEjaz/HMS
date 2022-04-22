const mongoose = require("mongoose");
const scheduleSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {type: Date, default: Date.now},
});
module.exports = mongoose.model("schedule", scheduleSchema);
