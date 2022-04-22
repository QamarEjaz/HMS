const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
  },
  date: {type: Number, default: new Date()},
});
module.exports = mongoose.model("comment", commentSchema);
