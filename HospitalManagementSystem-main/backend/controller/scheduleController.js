const scheduleSchema = require("../model/scheduleSchema");
const axios = require("axios");
const {validationResult} = require("express-validator");

const Scheduler = async (req, res) => {
  const {userName, phone, token} = req.body;
  const validateCaptcha = async (token) => {
    const secret = process.env.SECRET;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
    try {
      const response = await axios.post(url);
    } catch (err) {
      return res.send({err});
    }
  };
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  validateCaptcha(token);
  try {
    const schedulerData = await new scheduleSchema({
      userName,
      phone,
    });
    await schedulerData.save();
    return res.status(200).send({
      message: "The name and phone added to the database",
      data: schedulerData,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({
      message: `Server Error ${err.message}`,
    });
  }
};

const GetAllSchedulers = async (req, res) => {
  try {
    let allSchedulers = await scheduleSchema.find();

    if (allSchedulers.length < 0) {
      return res.status.send({
        message: "No Scheduler Found",
        data: [],
      });
    }
    return res.status(200).send({
      message: "Scheduler found successfully",
      data: allSchedulers,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

const SearchScheduler = async (req, res) => {
  try {
    let schedulerSearched = await scheduleSchema.find({
      $or: [{userName: {$regex: req.params.userName, $options: "i"}}],
    });
    return res.status(200).send({
      data: schedulerSearched,
      message: "The searcher searched",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  Scheduler,
  GetAllSchedulers,
  SearchScheduler,
};
