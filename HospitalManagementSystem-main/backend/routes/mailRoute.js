const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const {checkToken} = require("../middleware/tokenAuth");

const {
  MailSender,
  GetAllSubscriber,
  SearchedSubscribers,
} = require("../controller/mailController");

//MAIL
router.post(
  "/sendmail",
  requestLimit,
  check("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email"),
  MailSender
);
router.get("/getAllSubscribers", checkToken, GetAllSubscriber);

router.get("/searchSubscribers/:email", checkToken, SearchedSubscribers);
module.exports = router;
