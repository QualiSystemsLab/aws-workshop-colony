(function (database) {

    const MongoClient = require("mongodb").MongoClient;

    var databaseHost = process.env.DATABASE_HOST || 'localhost'
    var mongoUrl = databaseHost.startsWith("mongodb:") ? databaseHost : "mongodb://" + databaseHost + ":27017";  // example: 'mongodb://adminuser:Welcome1234567+@localhost:27017'
    console.log(mongoUrl);
    var theDb = null;

    database.getDb = function (next) {
        if (!theDb) {
            // Create a new MongoClient
            var client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
            // connect to the database
            client.connect(function (err, client) {
                    if (err) {
                        next(err, null);
                    } else {
                        db = client.db("promo-manager");
                        theDb = {
                            db: db,
                            promotionCodes: db.collection("promotionCodes"),
                            promotions: db.collection("promotions"),
                            users: db.collection("users")
                        };                    
                        next(null, theDb);
                    }
            });
        } else {
            next(null, theDb);
        }
    }

    database.close = function() {
        if(theDb) {
            theDb.db.close()
            theDb = null;
        }
    }

})(module.exports);