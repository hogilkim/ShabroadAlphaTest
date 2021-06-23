const express = require('express');
const multer = require('multer');

const UserController = require('./controllers/UserController')
const AcademyController = require('./controllers/AcademyController')
const uploadConfig = require('./config/uploads')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    res.send('Hello from Node.js app \n');
})

routes.post('/register', UserController.store);

routes.post('/createAcademy', upload.array("files", 11), AcademyController.createAcademy) //
module.exports = routes;
