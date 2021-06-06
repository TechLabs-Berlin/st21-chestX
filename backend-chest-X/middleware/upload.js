const util = require('util');
const multer = require('multer');
const maxSize = 2*1024*1024;

//storage configuration
let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, __basedir + '/images/uploads/');
        console.log(`${__basedir}/images/uploads/${file.originalname}`)
        // cb(null, __basedir + '/resources/static/assets/uploads/');
    },
    //setting the names of the files inside the destination folder
    filename: (req, file, cb) =>{
        // console.log(file.originalname);
        cb(null, file.originalname);
    },
})

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single('file');

//turning the exported middleware into a promise. Now it can be used with async-await
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;