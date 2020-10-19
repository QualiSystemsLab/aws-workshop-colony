import * as types from '../Consts/ActionTypes'
import initialState from './initialState'

export default function publicInfoReducer(state=initialState.publicInfo, action) {
    switch(action.type) {
        case types.UPDATE_SERVER_VERSION:
            return Object.assign({}, state, {version: action.version});
        default:
            return state;
    }
}