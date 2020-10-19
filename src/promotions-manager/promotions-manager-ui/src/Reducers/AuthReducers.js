import * as types from '../Consts/ActionTypes'
import initialState from './initialState'

export default function authReducer(state=initialState.auth, action) {
    switch(action.type) {
        case types.USER_LOGIN:
            return Object.assign({}, state, {user: action.user}, {isLoggedIn: true});

        case types.USER_LOGOUT:
            return Object.assign({}, state, {user: null}, {isLoggedIn: false});

        default:
            return state;
    }
}