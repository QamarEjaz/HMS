const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");
const aws = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();
// Multiple File Uploads ( max 4 )
const s3 = new aws.S3({
  Bucket: process.env.BUCKET,
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  // secretAccessKey: awsConfig.s3.secretAccessKey,
});
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|pdf|bmp/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}
const singleFileUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    acl: "public-read",
    key: function (req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    },
  }),
  limits: {fileSize: 90000000}, // In bytes: 9000000 bytes = 9 MB
  // fileFilter: function (req, file, cb) {
  //   checkFileType(file, cb);
  // },
});
module.exports = {singleFileUpload};
