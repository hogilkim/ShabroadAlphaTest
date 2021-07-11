const express = require('express');

const UserController = require('../controllers/UserController');
const validator = require('../helper/validator');

const router = express.Router();

router.post('/signup', validator.validSignUp, UserController.signup);
router.post('/activation', UserController.activate);

router.post('/login', UserController.login);

module.exports = router;