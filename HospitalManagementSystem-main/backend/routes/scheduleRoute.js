const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const {checkToken} = require("../middleware/tokenAuth");

const {
  Scheduler,
  GetAllSchedulers,
  SearchScheduler,
} = require("../controller/scheduleController");

//SCHEDULE
router.post(
  "/schedule",
  requestLimit,
  check("userName").notEmpty().withMessage("Username cannot be empty"),
  check("phone")
    .notEmpty()
    .withMessage("Phone should not be empty")
    .isLength({min: 10, max: 15})
    .withMessage("Phone number should be between 10 and 15"),
  Scheduler
);
router.get("/getAllScheduler", checkToken, GetAllSchedulers);

router.get("/searchSchedulers/:userName", checkToken, SearchScheduler);

module.exports = router;
