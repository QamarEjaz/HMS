// const multerS3 = require("multer-s3");
// const multer = require("multer");
// const path = require("path");
// const aws = require("aws-sdk");
// const awsConfig = require("../config/aws.json")[process.env.NODE_ENV];

// console.log("NODE_ENV: ", process.env.NODE_ENV);
// console.log("awsConfig: ", awsConfig);

// const s3 = new aws.S3({
//   accessKeyId: awsConfig.accessKeyID,
//   secretAccessKey: awsConfig.secretAccessKey,
//   Bucket: awsConfig.bucketName,
// });

// const multipleImageUpload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: awsConfig.bucketName,
//     acl: "public-read",
//     contentType: multerS3.AUTO_CONTENT_TYPE, // very important

//     key: function (req, file, cb) {
//       console.log("file in multipleImageUpload: ", file);
//       cb(
//         null,
//         path.basename(file.originalname, path.extname(file.originalname)) +
//           "-" +
//           Date.now() +
//           path.extname(file.originalname)
//       );
//     },
//   }),
//   limits: { fileSize: 30000000 }, // In bytes: 2000000 bytes = 2 MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });

// function checkFileType(file, cb) {
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif|bmp/;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);
//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Images Only!");
//   }
// }

// const singleFileUpload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: awsConfig.bucketName,
//     acl: "public-read",
//     contentType: multerS3.AUTO_CONTENT_TYPE, // very important
//     key: function (req, file, cb) {
//       cb(
//         null,
//         path.basename(file.originalname, path.extname(file.originalname)) +
//           "-" +
//           Date.now() +
//           path.extname(file.originalname)
//       );
//     },
//   }),
//   limits: { fileSize: 90000000 }, // In bytes: 9000000 bytes = 9 MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });

// module.exports = { singleFileUpload, multipleImageUpload };
