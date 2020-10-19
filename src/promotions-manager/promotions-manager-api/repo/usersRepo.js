(function (repo) {

    var database = require('./database.js');

    repo.getUser = function (email, next) {
        database.getDb(function (err, db) { 
            db.users.findOne(
                { email: email },
                function (err, doc) {
                    if (err) {
                        next(null);
                    } else {
                        next(doc);
                    }
                }
            );
        });
    };

})(module.exports);