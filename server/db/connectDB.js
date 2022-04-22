const mongoose = require('mongoose');

const connectDB = async (url) => {
  return await mongoose.connect(url).then(()=>console.log("db is connected"));
  
};

module.exports = connectDB;
