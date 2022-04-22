const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const requestLimit = require("../middleware/requestLimit");
const uploader = require("../middleware/uploader");
const {BlogData} = require("../controller/blogController");
const {GetAllBlog} = require("../controller/blogController");
const {GetBlogByCategory} = require("../controller/blogController");
const {GetThreeBlog} = require("../controller/blogController");
const {GetBlogWithComment} = require("../controller/blogController");
const {CommentSpecificBlog} = require("../controller/commentController");
const {SearchBlog} = require("../controller/blogController");
const {GetCommentsById} = require("../controller/blogController");

//BLOGS
router.post(
  "/addblog",
  uploader.singleFileUpload.any({name: "image"}),
  BlogData
);
router.get("/allblogdata", GetAllBlog);
router.get("/onlythreeblog", GetThreeBlog);
router.get("/blogbycategory/:category", GetBlogByCategory);
router.get("/blogwithcomment/:id", GetBlogWithComment);
router.get("/searchblog/:title", SearchBlog);

//BLOGCOMMENTS
router.post(
  "/commentonspecificblog/:id",
  requestLimit,
  check("userName").notEmpty().withMessage("UserName cannot be empty"),
  check("comment").notEmpty().withMessage("Comment cannot be empty"),
  check("email").notEmpty().withMessage("Email cannot be empty"),
  CommentSpecificBlog
);
router.get("/getcommentsbyid/:id", GetCommentsById);

module.exports = router;
