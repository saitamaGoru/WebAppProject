var express = require('express');
var router = express.Router();

/* GET home page. */
let indexController = require('../Controller/index');
router.get('/', indexController.displayMainPage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);
router.get('/login' , indexController.displayLoginPage);

router.post('/login', indexController.processLoginPage);

router.get('/register' , indexController.displayRegisterPage);

 router.post('/register', indexController.processRegisterPage);

 router.get('/logout', indexController.performLogout);


module.exports = router;
