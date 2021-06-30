const express = require('express');
const router = express.Router();
const controller = require('../controllers/xRayFiles.controller');
const file = require('../controllers/xRayFiles.controller');

let routes = (app) =>{
    router.post('/upload', controller.upload);
    router.get('/files', controller.getFileList);
    router.get('files/:name', controller.download);
    router.delete('/files', controller.deleteImages);

    app.use(router);
};
module.exports = routes;