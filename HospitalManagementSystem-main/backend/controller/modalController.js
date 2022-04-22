const modalSchema = require("../model/modalSchema");
const {validationResult} = require("express-validator");
const ModalSubmitter = async (req, res) => {
  const {firstName, lastName, phone, email, idea, weAreSelect, searchOfSelect} =
    req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const modalData = await new modalSchema({
      firstName,
      lastName,
      phone,
      email,
      idea,
      weAreSelect,
      searchOfSelect,
    });
    await modalData.save();
    return res.status(200).send({
      message: "The data of service modal stored in database ",
      data: modalData,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Server Error ${err.message}`,
    });
  }
};

const GetAllLeads = async (req, res) => {
  try {
    let allLeads = await modalSchema.find();
    if (allLeads.length < 0) {
      return res.status.send({
        message: "No Leads data Found",
        data: [],
      });
    }
    return res.status(200).send({
      message: "Leads data found successfully",
      data: allLeads,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

const SearchLeads = async (req, res) => {
  try {
    let searchedLeads = await modalSchema.find({
      $or: [{firstName: {$regex: req.params.name, $options: "i"}}],
    });
    return res.status(200).send({
      data: searchedLeads,
      message: "The leads searched",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  ModalSubmitter,
  GetAllLeads,
  SearchLeads,
};
