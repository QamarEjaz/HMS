const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const {CheckoutService} = require("../controller/checkoutController");

//CHECKOUTMODAL
router.post(
  "/checkOut",
  requestLimit,
  check("userName").notEmpty().withMessage("Username cannot be empty"),
  check("emailAddress").notEmpty().withMessage("Email Address cannot be empty"),
  check("companyName").notEmpty().withMessage("Company Name cannot be empty"),
  check("phoneNumber").notEmpty().withMessage("Phone Number cannot be empty"),
  check("orderNote").notEmpty().withMessage("OrderNote cannot be empty"),
  check("service").notEmpty().withMessage("Service cannot be empty"),
  check("plan").notEmpty().withMessage("Plan cannot be empty"),
  CheckoutService
);

module.exports = router;
