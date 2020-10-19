(function (services) {
    
    services.promotions = require('./promotions.js');
    services.publicInfo = require('./publicInfo.js')

    services.init = function (app) {
        services.promotions.init();
        services.publicInfo.init();
    };

})(module.exports);