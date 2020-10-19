var express = require('express');
var publicInfoRouter = express.Router();

var router = function () {
    
    var publicInfoController = require('../controllers/publicInfoController.js');

    publicInfoRouter.route('/version').get(publicInfoController.getVersion);
    
    publicInfoRouter.route('/healthcheck').get(publicInfoController.healthCheck);

    return publicInfoRouter;
};

module.exports = router;