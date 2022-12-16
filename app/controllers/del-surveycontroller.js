let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let SurveyInfo = require('../models/survey');

function displayName(req) {
    return req.user ? req.user.displayName : ''
}

module.exports.displaySurveyList = (req, res, next) => {
    SurveyInfo.find((err, surveyList) => {
        if (err) {
            return console.error(err);
        } else {

            res.render('survey/listSurvey',
                {
                    title: 'Survey Overview',
                    surveyList: surveyList,
                    displayName: displayName(req)
                });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/addSurvey', {title: 'Add Survey', displayName: displayName(req)})
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = SurveyInfo({
        "surveyID": req.body.id,
        "title": req.body.title,
    });

    SurveyInfo.create(newSurvey, (err, SurveyInfo) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/survey');
        }
    });

}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    SurveyInfo.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/survey');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    SurveyInfo.findById(id, (err, surveyToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit, displayName: displayName(req)})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = SurveyInfo({
        "_id": req.params.id,
        "title": req.body.title,
    });

    SurveyInfo.updateOne({_id: id}, updatedSurvey, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/survey');
        }
    });
}

/* Stanley Update begin */
/* Stanley Update begin */
/* Stanley Update begin */
module.exports.displayAddMcQuestion = (req, res, next) => {
    // new empty data
    let question = {
        title: '',
        answer: []
    };

    res.render('survey/mcQuestion', {
        title: 'Create MC Question',
        question: question,
        displayName: displayName(req)
    })
}

module.exports.displayEditMcQuestion = (req, res, next) => {
    let id = req.params.id;

    // SurveyInfo.findById(id, (err, surveyToEdit) => {
    let question = { // should get data from db by id
        title: 'demo',
        answer: ['ans1', 'ans2']
    };

    res.render('survey/mcQuestion', {
        title: 'Edit MC Question',
        question: question,
        displayName: displayName(req)
    })
}

module.exports.processAddMcQuestion = (req, res, next) => {

    console.log(req.body);

    // let newSurvey = SurveyInfo({
    //     "surveyID": req.body.id,
    //     "question": req.body.question,
    // });

    // SurveyInfo.create(newSurvey, (err, SurveyInfo) => {
    //     if (err) {
    //         console.log(err);
    //         res.end(err);
    //     } else {
    res.redirect('/survey');
    //     }
    // });

}

module.exports.processEditMcQuestion = (req, res, next) => {

    console.log(req.body);

    // let id = req.params.id

    // let updatedSurvey = SurveyInfo({
    //     "_id": req.params.id,
    //     "question": req.body.question,
    // });

    // SurveyInfo.updateOne({_id: id}, updatedSurvey, (err) => {
    //     if (err) {
    //         console.log(err);
    //         res.end(err);
    //     } else {
    res.redirect('/survey');
    //     }
    // });
}

module.exports.displayAddSingleTextQuestion = (req, res, next) => {
    // new empty data
    let question = {
        title: '',
    };

    res.render('survey/singleTextQuestion', {
        title: 'Create Single Text Question',
        question: question,
        displayName: displayName(req)
    })
}

module.exports.displayEditSingleTextQuestion = (req, res, next) => {
    let id = req.params.id;

    // SurveyInfo.findById(id, (err, surveyToEdit) => {
    let question = { // should get data from db by id
        title: 'demo',
    };

    res.render('survey/singleTextQuestion', {
        title: 'Edit Single Text Question',
        question: question,
        displayName: displayName(req)
    })
}

module.exports.processAddSingleTextQuestion = (req, res, next) => {

    console.log(req.body);

    // let newSurvey = SurveyInfo({
    //     "surveyID": req.body.id,
    //     "question": req.body.question,
    // });

    // SurveyInfo.create(newSurvey, (err, SurveyInfo) => {
    //     if (err) {
    //         console.log(err);
    //         res.end(err);
    //     } else {
    res.redirect('/survey');
    //     }
    // });

}

module.exports.processEditSingleTextQuestion = (req, res, next) => {

    console.log(req.body);

    // let id = req.params.id

    // let updatedSurvey = SurveyInfo({
    //     "_id": req.params.id,
    //     "question": req.body.question,
    // });

    // SurveyInfo.updateOne({_id: id}, updatedSurvey, (err) => {
    //     if (err) {
    //         console.log(err);
    //         res.end(err);
    //     } else {
    res.redirect('/survey');
    //     }
    // });
}







