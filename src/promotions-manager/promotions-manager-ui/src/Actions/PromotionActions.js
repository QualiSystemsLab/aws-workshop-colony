import * as types from '../Consts/ActionTypes'
import * as routesConsts from '../Consts/Routes'
import axios from 'axios';

export function loadPromotionsSuccess(promotions) {
    return { type: types.LOAD_PROMOTIONS_SUCCESS, promotions}
}

export function createPromotionSuccess(promotion) {
    return { type: types.CREATE_PROMOTION_SUCCESS, promotion}
}

export function updatePromotionSuccess(promotion) {
    return { type: types.UPDATE_PROMOTION_SUCCESS, promotion}
}


export function loadPromotions() {
    return function (dispatch) {
        return axios.get(routesConsts.API_BASE + 'promotion').then(promotions => {
            dispatch(loadPromotionsSuccess(promotions.data))
        }).catch(err => {
            throw (err);
        })
    }
}

export function savePromotion(promotion) {
    return function (dispatch, getState) {
        return axios.post(routesConsts.API_BASE + 'promotion', promotion).then(result => {
            let savedPromotion = result.data;
            savedPromotion.isNew ?
                dispatch(createPromotionSuccess(savedPromotion)):
                dispatch(updatePromotionSuccess(savedPromotion));
        }).catch(err => {
            throw (err);
        })
    }
}

