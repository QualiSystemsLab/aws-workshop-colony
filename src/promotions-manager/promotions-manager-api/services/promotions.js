(function (promotions) {

    const promotionCodesRepo = require("../repo/promotionCodesRepo.js");
    const promotionsRepo = require("../repo/promotionsRepo.js");

    promotions.init = function () {

    };
    
    const convertPromotionDocToDto = function (doc) {
        let dto = Object.assign({}, doc, {"numberOfCodes": 0, "allocatedCodes": 0});
        delete dto.users;
        return dto;
    };

    promotions.getNextPromoCode = function (promoId, email, next) {
        promotionCodesRepo.getNextPromoCode(promoId, email, next);
    };

    promotions.getPromotionInfo = function (promoId, next) {
        promotionsRepo.getPromotion(promoId, function(doc) {
            next(convertPromotionDocToDto(doc));
        });
    };

    promotions.getAllUserPromotions = function (userEmail, next) {
        promotionsRepo.getAllPromotionsByUser(userEmail, function (docs) {

            let promotionDtos = [];

            let promises = docs.map(doc => {
                return new Promise((resolve, reject) => {
                    let promotionDto = convertPromotionDocToDto(doc);

                    promotionCodesRepo.getCodesForPromotion(doc._id, codeDocs => {
                        if(codeDocs && codeDocs.length > 0) {
                            promotionDto.numberOfCodes = codeDocs.length;
                            promotionDto.allocatedCodes = codeDocs.filter(x => x.allocated).length;
                        }
                        promotionDtos.push(promotionDto);
                        resolve();
                   });
                });
            });

            Promise.all(promises).then(() => {
                next(promotionDtos)
            });
        });
    };
    
    promotions.saveOrUpdatePromotion = function (userEmail, promotion, next) {
        promotionsRepo.getPromotion(promotion._id, doc => {
            if(doc === null) {
                // add new promotion
                promotion["users"] = [userEmail];
                promotionsRepo.addPromotion(promotion, (err, res) => {
                    promotion["isNew"] = true;
                    next(err, err ? null : promotion);
                });
            } else {
                // check permissions
                if(doc.users.indexOf(userEmail) === -1) {
                    next("No permissions to update promotion", null);
                }
                else {
                    // update promotion
                    promotion["users"] = doc.users;
                    promotionsRepo.updatePromotion(promotion, (isOk) => {
                        promotion["isNew"] = false;
                        next(!isOk, isOk ? promotion : null);
                    });
                }
            }
        });
    }

})(module.exports);