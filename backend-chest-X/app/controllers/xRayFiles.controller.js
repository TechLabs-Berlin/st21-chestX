const uploadFile = require('../../middleware/upload');
const fs = require('fs');
const path = require('path');


const upload = async (req, res)=>{
    try{
        await uploadFile(req, res);

        if (req.file == undefined){
            return res.status(400).send({message: 'Please upload a file'});
        }
    
            res.status(200).send({message: `${req.file.originalname} uploaded successfully` });
            
    
    }
    catch(error) {
        if(error.code == "LIMIT_FILE_SIZE"){
            return res.status(500).send({message: 'File size cannot be more than 2MB!'});
        };
        res.status(500).send({message: `Could not upload file: ${req.file.originalname} ${error}`});
    }
};

const getFileList = (req, res)=>{
    const directoryPath = __basedir + '/images/uploads/';
    fs.readdir(directoryPath, (err, files)=>{
        if (err) {
            res.status(500).send({message: 'Unable to find file!'});
        }

        let fileInfo = [];

        for (let file of files){
        fileInfo.push({
        name: file,
        url: baseUrl + file,

        });
        };
        res.status(200).send(fileInfo);
        console.log(fileInfo)

    });
};

const download = (req, res)=>{
    const fileName = req.params.name;
    const directoryPath = __basedir + '/images/uploads/'; 
    res.download(directoryPath + fileName, fileName, (error)=>{
        if (error){
            res.status(500).send({message: 'File cannot be downloaded '  + error})
        };
    });
};

const deleteImages = ()=>{
    const directory = __basedir + '/images/uploads/';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (let file of files){
            fs.unlink(path.join(directory, file), err =>{
                if (err) throw err;
            });
        }
    }) ;
};

module.exports = { upload, getFileList, download, deleteImages };
