const nodemailer = require("nodemailer");
const subscribeSchema = require("../model/subscribeSchema");
const axios = require("axios");
const {validationResult} = require("express-validator");

const MailSender = async (req, res) => {
  const {email, token} = req.body;
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
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    var mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Stay in touch with Webevis",
      text: "Thankyou for signing up for our newsletter covering updates, tips and tricks to  make the most of our site.",
    };
    const emailExist = await subscribeSchema.findOne({
      email: email,
    });
    if (emailExist) {
      return res.send({
        message: "Email already exist",
        status: 409,
      });
    } else {
      transporter.sendMail(mailOptions, async function (error, info) {
        if (info) {
          const subscriber = await new subscribeSchema({
            email,
          });
          await subscriber.save();
          return res.status(200).send({
            message: "Done email sending to" + info.response,
          });
        } else if (error) {
          console.log("Error while sending");
        }
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Out of try",
    });
  }
};

const GetAllSubscriber = async (req, res) => {
  try {
    let allSubscriber = await subscribeSchema.find();

    if (allSubscriber.length < 0) {
      return res.status.send({
        message: "No Subscriber Found",
        data: [],
      });
    }
    return res.status(200).send({
      message: "Subscriber found successfully",
      data: allSubscriber,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

const SearchedSubscribers = async (req, res) => {
  try {
    let searchedSubscribers = await subscribeSchema.find({
      $or: [{email: {$regex: req.params.email, $options: "i"}}],
    });
    return res.status(200).send({
      data: searchedSubscribers,
      message: "The searcher searched",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  MailSender,
  GetAllSubscriber,
  SearchedSubscribers,
};
