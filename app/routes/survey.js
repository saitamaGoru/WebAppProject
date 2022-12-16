var express = require('express');
var router = express.Router();

let surveyController = require('../controllers/publicSurvey')

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/login');
    }
    next();
}

router.get('/', surveyController.displaySurveyListPage);
router.get('/:id', surveyController.displaySurveyFormPage);
router.post('/:id', surveyController.processSubmitSurvey);

module.exports = router;
