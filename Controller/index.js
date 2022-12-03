let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let jwt = require('jsonwebtoken');
let db = require('../db');
let userModel = require('../models/user');
let User = userModel.User; 

module.exports.displayMainPage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}


module.exports.displayHomePage = (req, res, next) => {
    res.render('home', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About', displayName: req.user ? req.user.displayName : ''});
}
module.exports.displayContactPage = (req,res,next) =>
{
    res.render('contact',{ title: 'Contact',displayName: req.user ? req.user.displayName : '' })
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login', 
        {
           title: "Login",
           messages: req.flash('loginMessage'),
           displayName: req.user ? req.user.displayName : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err?
        if(err)
        {
            return next(err);
        }
        // is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if(err)
            {
                return next(err);
            }

         const payload =
         {
            id:user._id,
            displayname:user.displayName,
            username: user.username,
            email: user.email
         }
            const authToken = jwt.sign(payload,db.Secret,{
                expiresIn:604800
            });

            /*res.json({seccess: true, msg: 'User logged in successfully!', user: {
                id:user._id,
                displayname:user.displayName,
                username: user.username,
                email: user.email
               
            }, token: authToken});*/
            return res.redirect('/survey-list');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
          
          
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/survey-list')
            });
        }
    });
}

module.exports.performLogout = ((req,res)=> {
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/');
    });
   
});