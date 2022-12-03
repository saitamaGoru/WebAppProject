let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');
let jwt = require('jsonwebtoken');

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
let surveyController = require('../Controller/survey')

router.get('/', surveyController.displaySurveyList);


router.get('/add' , requireAuth, surveyController.displayAddPage);

 
router.post('/add', requireAuth, surveyController.processAddPage);


router.get('/edit/:id',requireAuth, surveyController.displayEditPage);
  
router.post('/edit/:id',requireAuth, surveyController.processEditPage);
   
 
router.get('/delete/:id', requireAuth, surveyController.processDeletePage);

module.exports = router;