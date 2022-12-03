let mongoose = require('mongoose');

//model class
let surveyModel = mongoose.Schema({

    survey: String,
     creationDate: String,
     fname:String,
     lname:String,
     Ratetheproduct: String,
     FeedBack: String,
     surveyCreator: String
},
{
    collection:"surveys"
});

module.exports = mongoose.model('Survey',surveyModel);
