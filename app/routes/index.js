var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')
let accountController = require('../controllers/account.controller')
let authController = require('../controllers/auth.server.controller')

router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

//displaying login Page
router.get('/login', authController.displayLoginPage);

//processing login Page
router.post('/login', authController.processLoginPage);

//displaying register Page
router.get('/register', authController.displayRegisterPage);

//processing register Page
router.post('/register', authController.processRegisterPage);

//performing the logout button
router.get('/logout', authController.performLogout);

module.exports = router;
