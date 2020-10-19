(function (publicInfoController) {

    var _publicInfoService;

    publicInfoController.init = function (publicInfoService) {
        _publicInfoService = publicInfoService;
    };

    publicInfoController.getVersion = function(req, res) {
        _publicInfoService.getVersion((result)=>{ 
            res.json(result);
        });
    }

    publicInfoController.healthCheck = function(req, res) {    
        _publicInfoService.healthCheck((status, message) => {
            if (status)
                res.json({
                    health: status,
                    message: message
                });
            else 
                res.status(500).json({
                    health: status,
                    message: message
                });
        });
    }

    
})(module.exports);