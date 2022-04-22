const contactSchema = require("../model/contactSchema");
const axios = require("axios");
const {validationResult} = require("express-validator");

const ContactForm = async (req, res) => {
  const {userName, email, phone, subject, message, token} = req.body;
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
    const contactdata = await new contactSchema({
      userName,
      email,
      phone,
      subject,
      message,
    });
    await contactdata.save();
    return res.status(200).send({
      message: "The data of contact us form stored in database ",
      data: contactdata,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Server Error ${err.message}`,
    });
  }
};

const GetAllContactUs = async (req, res) => {
  try {
    let allContactUs = await contactSchema.find();

    if (allContactUs.length < 0) {
      return res.status.send({
        message: "No Contact Us data Found",
        data: [],
      });
    }
    return res.status(200).send({
      message: "Contact Us data found successfully",
      data: allContactUs,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

const SearchContactus = async (req, res) => {
  try {
    let searchedContactus = await contactSchema.find({
      $or: [{userName: {$regex: req.params.name, $options: "i"}}],
    });
    return res.status(200).send({
      data: searchedContactus,
      message: "The contactus searched",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  ContactForm,
  GetAllContactUs,
  SearchContactus,
};
