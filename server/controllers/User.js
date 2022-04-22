const Admin = require("../models/Admin");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
// login controller
const Login = async (req, res) => {
  var { email, password, role } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please enter email and password" });
  }
  
  if (role === "admin") {
    const user = User.create({
      email,
      password,
      role,
    });
    res.status(200).json({ user:user });
  } else if (role === "doctor") {
    const user = User.create({
      email,
      password,
      role,
    });
    res.status(200).json({ user:user });
  } else {
    const user = User.create({
      email,
      password,
      role,
    });
    res.status(200).json({ user:user });
  }
  
  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "User not found" });
  }
  console.log("hello")
  const isCorrect = await User.checkPassword(password);
  console.log("checkpassword");

  if (isCorrect) {
    const token = User.generateAuthToken();
    return res.status(StatusCodes.OK).json({ token });
  } else {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Incorrect password" });
  }
};

// signup endpoint
const SignUp = async (req, res) => {
  const { role, user } = req.body;
  console.log("role" + role);
  let currModel;
  if (role === "admin") {
    currModel = Admin;
  } else if (role === "doctor") {
    currModel = Doctor;
  } else {
    currModel = Patient;
  }
  const savedUser = await currModel.create({ ...user });

  if (savedUser) {
    const token = savedUser.generateAuthToken();
    return res.status(StatusCodes.OK).json({ token });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "User not saved" });
  }
};

module.exports = { Login, SignUp };
