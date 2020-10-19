(function (repo) {
    
    var database = require('./database.js');
    
    repo.getNextPromoCode = function (promoId, userId, next) {
        database.getDb(function (err, db) {
            db.promotionCodes.findAndModify(
                { promoId: promoId, allocated: false }, // query
                [['_id', 'asc']],  // sort order
                { $set: { allocated: true, allocatedTo: userId } }, // replacement
                { "new": true }, // options - returns the updated document
                function (err, obj) {
                    if (err) {
                        next(null);
                    } else if (!obj.value) {
                        next(null);
                    } else {
                        next(obj.value);
                    }
                }
            );
        });
    };

    repo.getCodesForPromotion = function(promoId, next) {
        database.getDb(function (err, db) {
            db.promotionCodes.find({promoId: promoId}).toArray(function(err, docs) {
                if (err) {
                    next(null);
                } else {
                    next(docs);
                }
            });
        });
    }

})(module.exports);