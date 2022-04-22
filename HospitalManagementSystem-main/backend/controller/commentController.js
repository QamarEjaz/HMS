const commentSchema = require("../model/commentSchema");
const blogSchema = require("../model/blogSchema");
const axios = require("axios");
const {validationResult} = require("express-validator");

const GetAllComments = async (req, res) => {
  try {
    let allComments = await commentSchema.find();
    if (allComments < 0) {
      return res.status(404).send({
        message: "No comments",
        data: [],
      });
    }
    return res.status(200).send({
      message: "All comments",
      data: allComments,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Server Error ${err.message}`,
    });
  }
};

const CommentSpecificBlog = async (req, res) => {
  const {id} = req.params;
  const {userName, email, comment, token} = req.body;
  const validateCaptcha = async (token) => {
    const secret = process.env.SECRET;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
    try {
      const response = await axios.post(url);
    } catch (err) {
      return res.send({err});
    }
  };
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("The errors in contactController array is", errors);
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  validateCaptcha(token);

  try {
    const blog = await blogSchema.findOne({_id: id});
    const commentdata = new commentSchema({
      userName,
      email,
      comment,
      id,
    });
    await commentdata.save();
    //Associate Post with comment
    blog.comments.push(commentdata._id);
    await blog.save();
    res.send({message: "Comment Done", data: commentdata});
  } catch (err) {
    console.log("error", err.message);
  }
};

module.exports = {
  CommentSpecificBlog,
};
