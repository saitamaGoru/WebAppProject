
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let passport = require('passport');
let accountController = require('../controllers/account.controller');

// router.get('/',accountController.displaySurveyList);
/* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', accountController.displayAddPage);
/* POST Route for processing the Add page - CREATE Operation */
// router.post('/add', accountController.processAddPage);
// router.get('/edit/:id', accountController.displayEditPage);
// router.post('/edit/:id', accountController.processEditPage);
/* GET to perform  Deletion - DELETE Operation */
// router.get('/delete/:id', accountController.performDelete);


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



router.get('/', requireAuth, accountController.displaySurveyListPage);
router.get('/addSurvey', requireAuth, accountController.displayAddSurveyPage);
router.post('/addSurvey', requireAuth, accountController.processAddSurvey);

router.get('/editSurvey/:id', requireAuth, accountController.displayEditSurveyPage);
router.post('/editSurvey/:id', requireAuth, accountController.processEditSurvey);

router.get('/deleteSurvey/:id', requireAuth, accountController.processDeleteSurvey);

router.get('/viewSurvey/:id', requireAuth, accountController.displayResultSurveyListPage);
router.get('/viewSurveyDetail/:id', requireAuth, accountController.displayResultSurveyDetailPage);

// router.get('/mcQuestion', requireAuth, accountController.displayAddMcQuestion);
// router.post('/mcQuestion', requireAuth, accountController.processAddMcQuestion);

// router.get('/mcQuestion/:id', requireAuth, accountController.displayEditMcQuestion);
// router.post('/mcQuestion/:id', requireAuth, accountController.processEditMcQuestion);

// router.get('/singleTextQuestion', requireAuth, accountController.displayAddSingleTextQuestion);
// router.post('/singleTextQuestion', requireAuth, accountController.processAddSingleTextQuestion);

// router.get('/singleTextQuestion/:id', requireAuth, accountController.displayEditSingleTextQuestion);
// router.post('/singleTextQuestion/:id', requireAuth, accountController.processEditSingleTextQuestion);

module.exports = router;

