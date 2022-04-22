const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter email'],
    unique: [true, 'Email already exists'],
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
  },
  role:{
          type:String,
         
  },
},{
    timestamps:true
});
userSchema.pre('save', async function (next) {
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
    next();
  });
  userSchema.methods.checkPassword = async function (password) {
    const isMatch = await bycrypt.compare(password, this.password);
    return isMatch;
  };
  userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
      { _id: this._id, role: 'patient', name: this.name },
      process.env.JWT_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return token;
  };
module.exports = mongoose.model('User', userSchema);
