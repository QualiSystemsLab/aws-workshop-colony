var express = require('express');
var authRouter = express.Router();
var passport = require('passport');

var router = function () { 
    
    authRouter.route('/signIn')
        .post(passport.authenticate('local', {
                failureRedirect: '/'
            }),
            function (req, res) { 
                //res.redirect('/promotion');
                res.json({success: true});
            });

    authRouter.route('/signOut')
        .post(function(req, res, next) {
            req.logout();
            res.json({success: true});
        });
    
    
    authRouter.route('/profile')
        .all(function(req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) { 
            res.json(req.user);
        });

    return authRouter;

};

module.exports = router;