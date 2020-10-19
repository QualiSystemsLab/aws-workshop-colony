import {combineReducers} from 'redux';
import auth from './AuthReducers';
import promotions from './PromotionReducers';
import publicInfo from './PublicInfoReducer';

const rootReducer = combineReducers({
    auth,
    promotions,
    publicInfo
});

export default rootReducer;