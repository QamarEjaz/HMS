const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const {checkToken} = require("../middleware/tokenAuth");
const {
  UserRegistration,
  UserLogin,
  AdminLogin,
  GetAllUsers,
  GetUserById,
  RemoveUserById,
  UpdateUserById,
  ChangeStatus,
  ApproveUser,
  UnApproveUser,
  SearchUser,
} = require("../controller/userController");

//UserRegistration
router.post(
  "/register",
  check("name", "Name cannot be empty").notEmpty(),
  check("email", "Email cannot be empty").notEmpty(),
  check("password", "Password cannot be empty").notEmpty(),
  check("confirmPassword", "Confirm password cannot be empty").notEmpty(),
  check("role", "User roles cannot be empty").notEmpty(),
  UserRegistration
);

//UserLogin
router.post(
  "/userlogin",
  check("email", "Email cannot be empty").notEmpty(),
  check("password", "Password cannot be empty").notEmpty(),
  UserLogin
);

//AdminLogin
router.post(
  "/adminlogin",
  check("email", "Email cannot be empty").notEmpty(),
  check("password", "Password cannot be empty").notEmpty(),
  AdminLogin
);

//GetAllUser
router.get("/allUsers", checkToken, GetAllUsers);

//GetUserById
router.get("/getUserById/:id", GetUserById);

//RemoveUserById
router.delete("/removeUserById/:id", RemoveUserById);

//UpdateUserById
router.put("/updateUserById/:id", UpdateUserById);

//SearchByName
router.get("/searchUser/:name", SearchUser);

//ApproveUser
router.put("/approveUser/:id", ApproveUser);

//UnApproveUser
router.put("/unApproveUser/:id", UnApproveUser);

//ChangeUserStatus
router.put("/changeUserStatus/:id", ChangeStatus);

module.exports = router;
