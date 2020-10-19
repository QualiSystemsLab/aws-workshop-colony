(function (publicInfo) {

    var database = require('../repo/database.js');
    
    publicInfo.init = function() {
        
    }

    publicInfo.getVersion = function(next) {
        releaseNum = process.env.RELEASE_NUMBER || '';
        if(releaseNum.toLowerCase() === 'none')
            releaseNum = '';

        apiBuildNum = process.env.API_BUILD_NUMBER || '';
        if(apiBuildNum.toLowerCase() === 'none')
            apiBuildNum = '';

        next({
            apiBuildNumber: apiBuildNum,
            releaseNumber: releaseNum
        });
    }

    publicInfo.healthCheck = function(next) {
        database.getDb((err, db) => {            
            if(err) {
                database.close();
                next(false, 'Failed to connect to DB');
            }
            else
                db.users.findOne({}, function (err, doc) {
                    if(err) {
                        database.close();
                        next(false, 'Failed to connect to DB');
                    }
                    else {
                        next(true, 'good');
                    }
                });
        });
    }

})(module.exports);