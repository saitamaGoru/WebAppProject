let mongoose = require('mongoose');

let surveyModel = mongoose.Schema(
    {
        surveyID: String,
        username:String,
        title: String,
        startDate: String,
        endDate: String,
        active: Boolean,
        questions: [{
            title: String,
            questionType: String,
            answer: String,
            answers: [String]
        }],
        result: [{
            questionTitle: String,
            answerSelected: String
        }],
        createBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    {
        collection: "survey"
    });


module.exports = mongoose.model('Survey', surveyModel);