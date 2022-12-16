let express = require('express');
let mongoose = require('mongoose');
const SurveyInfo = require("../models/survey");
const User = require("../models/user");

function displayName(req) {
    return req.user ? req.user.displayName : ''
}

module.exports.displaySurveyListPage = (req, res, next) => {
    SurveyInfo.find().populate('createBy', 'displayName').exec((err, surveyList) => {
        if (err) {
            return console.error(err);
        } else {
            // surveyList.populate('createBys', 'displayName');
            res.render('survey/surveyList',
                {
                    title: 'Public Survey',
                    surveyList: surveyList,
                    displayName: displayName(req)
                });
        }
    });
}

module.exports.displaySurveyFormPage = (req, res, next) => {
    let id = req.params.id;
    SurveyInfo.findById({_id: id}, (err, surveyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/surveyForm', {
                title: 'Complete Survey',
                surveyInfo: surveyToEdit,
                displayName: displayName(req)
            });
        }
    });
}

module.exports.processSubmitSurvey = (req, res, next) => {
    let id = req.params.id;

      SurveyInfo.findOneAndUpdate({_id: id}, {answers: req.body.answer}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/survey');
        }
      })
}