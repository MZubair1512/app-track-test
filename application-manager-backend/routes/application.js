var express = require('express');
var router = express.Router();
var application = require('../controllers/application');


router.post('/post',application.post);
router.get('/get',application.get); 
router.delete('/delete',application.delete); 
router.get('/getOne',application.getOne); 
router.post('/update',application.update); 

module.exports = router;