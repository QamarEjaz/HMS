const blogSchema = require("../model/blogSchema");
const {validationResult} = require("express-validator");

const BlogData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const blogdata = await new blogSchema({
      ...req.body,
      blogBannerPic: req.files[0].location,
      firstSectionPic: req.files[1].location,
      secondSectionPic: req.files[2].location,
      thirdSectionPic: req.files[3].location,
      fourthSectionPic: req.files[4].location,
      fifthSectionPic: req.files[5].location,
      sixthSectionPic: req.files[6].location,
    });
    await blogdata.save();
    return res.status(200).send({
      message: "The data of blogdata stored in database",
      data: blogdata,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Server Error ${err.message}`,
    });
  }
};

const GetAllBlog = async (req, res) => {
  try {
    let query = blogSchema.find().sort({_id: -1});
    const page = parseInt(req.query.page) || 1;
    // const pageSize = 10;
    const pageSize = 16;
    const skip = (page - 1) * pageSize;
    const total = await blogSchema.countDocuments();
    const pages = Math.ceil(total / pageSize);
    query = query.skip(skip).limit(pageSize);
    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }
    const result = await query;
    res.status(200).send({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

const GetThreeBlog = async (req, res) => {
  try {
    const limit = 3;
    let allBlog = await blogSchema.find().sort({_id: -1}).limit(limit);
    if (allBlog.length < 0) {
      return res.status(404).send({
        message: "No Blog found",
        data: [],
      });
    }
    return res.status(200).send({
      message: "Blog found successfully",
      data: allBlog,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

const GetBlogByCategory = async (req, res) => {
  const {category} = req.params;
  try {
    let query = blogSchema.find({category: category}).sort({_id: -1});
    const page = parseInt(req.query.page) || 1;
    const pageSize = 16;
    const skip = (page - 1) * pageSize;
    const total = await blogSchema.countDocuments();
    const pages = Math.ceil(total / pageSize);
    query = query.skip(skip).limit(pageSize);
    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }
    const result = await query;
    res.status(200).send({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

const GetBlogWithComment = async (req, res) => {
  const {id} = req.params;
  try {
    const specificBlog = await blogSchema.findOne({_id: id});
    if (specificBlog.length < 0) {
      return res.status(404).send({
        message: "No specific blog found",
      });
    } else if (specificBlog) {
      return res.status(200).send({
        message: "Blog found ",
        data: specificBlog,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

const GetCommentsById = async (req, res) => {
  const {id} = req.params;
  try {
    const specificBlogComment = await blogSchema
      .findOne({_id: id})
      .populate("comments")
      .select("comments");
    if (specificBlogComment.length < 0) {
      return res.status(404).send({
        message: "No specific blog found",
      });
    } else if (specificBlogComment) {
      return res.status(200).send({
        message: "Blog found ",
        data: specificBlogComment,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

const SearchBlog = async (req, res) => {
  try {
    let result = await blogSchema.find({
      $or: [{title: {$regex: req.params.title, $options: "i"}}],
    });
    return res.status(200).send({
      data: result,
      message: "The blog searched",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  BlogData,
  GetAllBlog,
  GetThreeBlog,
  GetBlogByCategory,
  GetBlogWithComment,
  GetCommentsById,
  SearchBlog,
};
