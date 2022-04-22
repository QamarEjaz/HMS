const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const {checkToken} = require("../middleware/tokenAuth");

const {
  ModalSubmitter,
  GetAllLeads,
  SearchLeads,
} = require("../controller/modalController");

//KICKOFFMODAL
router.post(
  "/modal",
  requestLimit,
  check("firstName").notEmpty().withMessage("Firstname cannot be empty"),
  check("lastName").notEmpty().withMessage("Lastname cannot be empty"),
  check("phone").notEmpty().withMessage("Phonenumber cannot be empty"),
  check("email")
    .notEmpty()
    .withMessage("Email should not be empty")
    .isEmail()
    .withMessage("Email is invalid"),
  check("weAreSelect")
    .notEmpty()
    .withMessage("weAreSelect should not be empty"),
  check("searchOfSelect")
    .notEmpty()
    .withMessage("searchOfSelect should not be empty"),
  ModalSubmitter
);

router.get("/getAllLeads", checkToken, GetAllLeads);

router.get("/searchLeads/:name", checkToken, SearchLeads);

module.exports = router;
