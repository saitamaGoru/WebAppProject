let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let SurveyInfo = require('../models/survey');

function displayName(req) {
    return req.user ? req.user.displayName : ''
}

// My Survey
module.exports.displaySurveyListPage = (req, res, next) => {
    SurveyInfo.find({createBy: req.user.id}, (err, surveyList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('account/listSurvey', {
                title: 'My Survey',
                surveyList: surveyList,
                displayName: displayName(req),
            });
        }
    });
}
module.exports.displayAddSurveyPage = (req, res, next) => {
    res.render('account/addSurvey', {
        title: 'Create Survey',
        displayName: displayName(req),
    });
}
module.exports.processAddSurvey = (req, res, next) => {
    let newSurvey = SurveyInfo({
        "title": req.body.title,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "status": req.body.status,
        "createBy": req.user.id,
        "questions": req.body.questions
    });
    SurveyInfo.create(newSurvey, (err, SurveyInfo) => {
        if (err) {
            res.end(err);
        } else {
            res.redirect('/account');
        }
    });
}

module.exports.displayEditSurveyPage = (req, res, next) => {
    let id = req.params.id;
    SurveyInfo.findById(id, (err, surveyToEdit) => {
        console.log("Edit survey" + surveyToEdit);
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('account/editSurvey', {
                title: 'Edit Survey',
                surveyInfo: surveyToEdit,
                displayName: displayName(req)
            });
        }
    });    
}
module.exports.processEditSurvey = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = SurveyInfo({
        "_id": id,
        "title": req.body.title,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "status": req.body.status,
        "createBy": req.user.id,
        "questions": req.body.questions
    });

    SurveyInfo.updateOne({_id: id}, updatedSurvey, (err) => {
        if (err) {
            res.end(err);
        } else {
            res.redirect('/account');
        }
    });
}
module.exports.processDeleteSurvey = (req, res, next) => {
    let id = req.params.id;

    SurveyInfo.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/account');
        }
    });
}

// View result
module.exports.displayResultSurveyListPage = (req, res, next) => {
    let resultList = ['a', 'b', 'c', 'd'];

    res.render('account/resultList', {
        title: 'Display Surveys',
        resultList: resultList,
        displayName: displayName(req)
    });
}
module.exports.displayResultSurveyDetailPage = (req, res, next) => {
    let survey = {
        "title": String,
        "dateStart": req.body.dateStart,
        "username":req.body.username,
        "dateEnd": req.body.dateEnd,
        "isActive": req.body.isActive,
        "questions": []
    };

    res.render('account/resultDetail', {
        title: 'Submited Survey\'s Result',
        surveyInfo: survey,
        displayName: displayName(req)
    });

    // let id = req.params.id;
    // SurveyInfo.findById({_id: id}, (err, surveyToEdit) => {
    //     if(err)
    //     {
    //         console.log(err);
    //         res.end(err);
    //     }
    //     else
    //     {
    //         //show the edit view
    //         res.render('survey/surveyForm', {
    //             title: 'Complete Survey',
    //             surveyInfo: surveyToEdit,
    //             displayName: displayName(req)
    //         });
    //     }
    // });
}