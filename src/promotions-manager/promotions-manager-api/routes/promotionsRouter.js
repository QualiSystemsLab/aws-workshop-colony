var express = require('express');
var promotiomsRouter = express.Router();
var passport = require('passport');

var router = function () {
    
    var promotionsController = require('../controllers/promotionsController.js');

    promotiomsRouter.use(promotionsController.middleware);

    promotiomsRouter.route('/').get(promotionsController.getAllPromotions);

    promotiomsRouter.route('/').post(promotionsController.saveOrUpdatePromotion);

    return promotiomsRouter;
};

module.exports = router;