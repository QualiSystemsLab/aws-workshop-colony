(function (controllers) {

    var promotionsController = require('./promotionsController');
    var publicInfoController = require('./publicInfoController');
    
    controllers.init = function (services) {
        promotionsController.init(services.promotions);
        publicInfoController.init(services.publicInfo);
    };

})(module.exports);