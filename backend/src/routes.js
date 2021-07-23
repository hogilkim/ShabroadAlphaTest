const express = require('express');
const multer = require('multer');


const AcademyController = require('./controllers/AcademyController')
const uploadConfig = require('./config/uploads')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    res.send('Hello from Node.js app \n');
})



// routes.post('/createAcademy', upload.array("files", 11), AcademyController.createAcademy) //! this is the OG
routes.post('/createAcademy', AcademyController.createAcademy);
routes.post('/createProgram', AcademyController.createProgram);
module.exports = routes;
