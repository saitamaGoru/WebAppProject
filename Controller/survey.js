let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Survey = require('../models/survey.js');
let jwt = require('jsonwebtoken');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if (err) {
            return console.error(err);
        }
        else {
          
            res.render('survey/index', {
                title: 'Surveys',
                surveyList: surveyList,
                displayName:req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.displayAddPage = (req,res,next) => { 

    res.render('survey/add' ,  {
        title:'Add new survey'

    });
}

module.exports.processAddPage = (req,res,next) =>{
    console.log(req.body);
 let newSurvey = Survey({
        "survey":req.body.survey,
        "fname":req.body.fname,
        "lname":req.body.lname,
        "Ratetheproduct":req.body.Ratetheproduct,
        "feedback":req.body.feedback
    });
    Survey.create(newSurvey,(err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //refresh contact list
            res.redirect('/survey-list');
        }
    });
}


module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;

   Survey.findById(id,(err,surveyToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.render('survey/edit', {title:'Edit Survey', survey:surveyToEdit,
            displayName:req.user ? req.user.displayName : ''})
        }
    });

}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id

   let updateSurvey = Survey({
    "_id":id,
    "survey":req.body.survey,
    "fname":req.body.fname,
    "lname":req.body.lname,
    "Ratetheproduct":req.body.Ratetheproduct,
    "feedback":req.body.feedback
   });

   Survey.updateOne({_id: id}, updateSurvey, (err)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/survey-list');
    }
   });

}

module.exports.processDeletePage = (req,res,next)=>{
    let id= req.params.id
    Survey.remove({_id: id}, (err)=>{
        if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/survey-list');
    }
    });

}

