const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  blogBannerPic: {
    type: String,
  },
  blogger: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "webdevelopment",
      "searchenginemarketing",
      "socialmarketing",
      "appdevelopment",
    ],
  },
  categoryName: {
    type: String,
    required: true,
    enum: [
      "Web development",
      "Search engine marketing",
      "Social marketing",
      "App development",
    ],
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  title: {
    type: String,
  },
  shortdescription: {
    type: String,
  },
  descriptionOne: {
    type: String,
  },
  descriptionTwo: {
    type: String,
  },
  descriptionThree: {
    type: String,
  },
  firstSectionTitle: {
    type: String,
  },
  firstSectionDescriptionOne: {
    type: String,
  },
  firstSectionDescriptionTwo: {
    type: String,
  },
  firstSectionDescriptionThree: {
    type: String,
  },
  firstSectionPic: {
    type: String,
  },
  secondSectionTitle: {
    type: String,
  },
  secondSectionDescriptionOne: {
    type: String,
  },
  secondSectionDescriptionTwo: {
    type: String,
  },
  secondSectionDescriptionThree: {
    type: String,
  },
  secondSectionPic: {
    type: String,
  },
  thirdSectionTitle: {
    type: String,
  },
  thirdSectionDescriptionOne: {
    type: String,
  },
  thirdSectionDescriptionTwo: {
    type: String,
  },
  thirdSectionDescriptionThree: {
    type: String,
  },
  thirdSectionPic: {
    type: String,
  },
  fourthSectionTitle: {
    type: String,
  },
  fourthSectionDescriptionOne: {
    type: String,
  },
  fourthSectionDescriptionTwo: {
    type: String,
  },
  fourthSectionDescriptionThree: {
    type: String,
  },
  fourthSectionPic: {
    type: String,
  },
  fifthSectionTitle: {
    type: String,
  },
  fifthSectionDescriptionOne: {
    type: String,
  },
  fifthSectionDescriptionTwo: {
    type: String,
  },
  fifthSectionDescriptionThree: {
    type: String,
  },
  fifthSectionPic: {
    type: String,
  },
  sixthSectionTitle: {
    type: String,
  },
  sixthSectionDescriptionOne: {
    type: String,
  },
  sixthSectionDescriptionTwo: {
    type: String,
  },
  sixthSectionDescriptionThree: {
    type: String,
  },
  sixthSectionPic: {
    type: String,
  },
  seventhSectionTitle: {
    type: String,
  },
  seventhSectionDescriptionOne: {
    type: String,
  },
  seventhSectionDescriptionTwo: {
    type: String,
  },
  seventhSectionDescriptionThree: {
    type: String,
  },
  date: {type: Number, default: new Date()},
});

module.exports = mongoose.model("blog", blogSchema);
