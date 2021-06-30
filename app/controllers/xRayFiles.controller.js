const uploadFile = require("../../middleware/upload");
const fs = require("fs");
const path = require("path");
const ImagePath = require("../models/dataSchema");
const p = require("python-shell");

urlPath = "";

const upload = async function (req, res) {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file" });
    }
    const url = req.protocol + "://" + req.get("host");
    this.urlPath =
      url + "/public/" + req.file.originalname.split(" ").join("-");
    res
      .status(200)
      .send({ message: `${req.file.originalname} uploaded successfully` });
    console.log(this.urlPath);

    const imagePath = new ImagePath({ path: this.urlPath });
    imagePath
      .save()
      .then(() => console.log("New data successfully saved in the database"))
      .catch(() => console.log("ERROR!! unable to save data in the database"));
  } catch (error) {
    if (error.code == "LIMIT_FILE_SIZE") {
      return res
        .status(500)
        .send({ message: "File size cannot be more than 2MB!" });
    }
    res.status(500).send({
      message: `Could not upload file: ${req.file.originalname} ${error}`,
    });
  }
};

const getFileList = (req, res) => {
  const directoryPath = __basedir + "/public/";
  //fs.readdir is used for reading the files in a directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send({ message: "Unable to find file!" });
    }

    let fileInfo = [];

    for (let file of files) {
      fileInfo.push({
        name: file,
        url: baseUrl + file,
      });
    }
    res.status(200).send(fileInfo);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/public/";
  res.download(directoryPath + fileName, fileName, (error) => {
    if (error) {
      res.status(500).send({ message: "File cannot be downloaded " + error });
    }
  });
};

// Deleting images in the file storage
const deleteImages = () => {
  const directory = __basedir + "/public/";
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (let file of files) {
      //unlink is used to delete files from a file storage
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
};

module.exports = { upload, getFileList, download, deleteImages };
