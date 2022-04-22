const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const {checkToken} = require("../middleware/tokenAuth");

const {
  ContactForm,
  GetAllContactUs,
  SearchContactus,
} = require("../controller/contactController");

//CONTACTUS
router.post(
  "/contact",
  requestLimit,
  check("userName").notEmpty().withMessage("Username cannot be empty"),
  check("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Email is invalid"),
  check("phone")
    .isLength({min: 10, max: 15})
    .withMessage("Phone number should be between 10 and 15"),
  check("subject").notEmpty().withMessage("Subject should not be empty"),
  check("message")
    .notEmpty()
    .withMessage("Message should not be empty")
    .isLength({max: 500})
    .withMessage("Message should be of maximum 500 length"),
  ContactForm
);
router.get("/getAllContactus", checkToken, GetAllContactUs);

router.get("/searchContactus/:name", checkToken, SearchContactus);
module.exports = router;
