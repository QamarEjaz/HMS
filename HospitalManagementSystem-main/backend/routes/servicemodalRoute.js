const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const {ServiceModalSubmitter} = require("../controller/serviceModalController");

//SERVICESMODAL
router.post(
  "/servicemodal",
  requestLimit,
  check("userName").notEmpty().withMessage("Username cannot be empty"),
  check("email")
    .notEmpty()
    .withMessage("Email should not be empty")
    .isEmail()
    .withMessage("Email is invalid"),
  check("websiteUrl").notEmpty().withMessage("Website url cannot be empty"),
  check("phone").notEmpty().withMessage("Phone cannot be empty"),
  check("message").notEmpty().withMessage("Message cannot be empty"),
  ServiceModalSubmitter
);

module.exports = router;
