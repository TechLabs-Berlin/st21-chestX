const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

//storage configuration
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/public/");
  },
  //setting the names of the files inside the destination folder
  filename: (req, file, cb) => {
    // split the name of the file if it contains a space and join it together with a dash.
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

//turning the exported middleware into a promise. Now it can be used with async-await
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
