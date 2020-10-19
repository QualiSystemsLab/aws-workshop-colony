import * as types from '../Consts/ActionTypes'
import initialState from './initialState'

export default function promotionReducer(state=initialState.promotions, action) {
    switch(action.type) {
        case types.LOAD_PROMOTIONS_SUCCESS:
            return action.promotions;

        case types.CREATE_PROMOTION_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.promotion)
            ];

        case types.UPDATE_PROMOTION_SUCCESS:
            return [
                ...state.filter(promo => promo._id !== action.promotion._id),
                Object.assign({}, action.promotion)
            ];

        default:
            return state;
    }
}