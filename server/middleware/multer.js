const multer = require("multer");
const path = require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // store the file
    cb(null, path.join(__dirname, '/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  //only pdf 
  if (
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

module.exports = upload;
