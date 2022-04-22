const serviceModalSchema = require("../model/serviceModalSchema");
const {validationResult} = require("express-validator");
const ServiceModalSubmitter = async (req, res) => {
  const {userName, email, websiteUrl, phone, message} = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const serviceModalData = await new serviceModalSchema({
      userName,
      email,
      websiteUrl,
      phone,
      message,
    });
    await serviceModalData.save();
    return res.status(200).send({
      message: "The data of service modal stored in database ",
      data: serviceModalData,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Server Error ${err.message}`,
    });
  }
};

module.exports = {
  ServiceModalSubmitter,
};
