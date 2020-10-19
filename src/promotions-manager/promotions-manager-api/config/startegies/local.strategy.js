var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    usersRepo = require('../../repo/usersRepo');

module.exports = function () { 

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (email, password, done) {
            // todo refactor to use server for login
            usersRepo.getUser(email, function (user) {
                if (user && user.password === password) {
                    done(null, user);
                } else {
                    done(null, false, { message: "Bad user or password" });
                }
            });
    }));

};