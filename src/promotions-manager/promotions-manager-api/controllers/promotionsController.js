(function (promotionsController) {

    var _promotionsService;

    promotionsController.init = function (promotionsService) {
        _promotionsService = promotionsService;
    };

    promotionsController.middleware = function(req, res, next) {
        //TODO refactor this to an authentication service
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };

    promotionsController.getAllPromotions = function(req, res) {
        _promotionsService.getAllUserPromotions(req.user.email, function(docs) {
            res.json(docs);
        });
    };

    promotionsController.saveOrUpdatePromotion = function (req, res) {
        _promotionsService.saveOrUpdatePromotion(req.user.email, req.body, (err, doc) => {
            if (err) {
                res.status(400);
                res.send(err);
            } else {
                res.json(doc);
            }
        });
    }

})(module.exports);