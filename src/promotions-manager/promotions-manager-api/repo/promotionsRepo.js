(function (repo) {

    var database = require('./database.js');

    repo.getPromotion = function (promoId, next) {
        database.getDb(function (err, db) {
            db.promotions.findOne(
                { _id: promoId },
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

    repo.getAllPromotionsByUser = function (userEmail, next) {
        database.getDb(function(err, db) {
            db.promotions.find({"users": userEmail}).toArray(function(err, docs) {
                if (err) {
                    next(null);
                } else {
                    next(docs);
                }
            });
        })};

    repo.addPromotion = function(doc, next) {
        database.getDb((err, db)=>{
            db.promotions.insertOne(doc).then((err, res) => {
                if (err) {
                    next(null);
                }
                else {
                    next(res.insertedId);
                }
            });
        });
    }

    repo.updatePromotion = function (doc, next) {
        database.getDb((err, db)=>{
            db.promotions.updateOne({ _id: doc._id}, doc)
                .then((res) => {
                if (res) {
                    next(true);
                }
                else {
                    next(false);
                }
            });
        });
    }

})(module.exports);