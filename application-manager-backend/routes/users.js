var express = require('express');
var router = express.Router();
let loginUsers = require('../controllers/login.js');
let registerUser = require('../controllers/register.js');

router.post('/login',loginUsers);

router.post('/register',registerUser);

module.exports = router;
