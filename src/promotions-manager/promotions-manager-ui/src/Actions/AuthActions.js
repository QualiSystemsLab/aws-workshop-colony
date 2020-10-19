import * as types from '../Consts/ActionTypes'

export function userLogin(user) {
    return { type: types.USER_LOGIN, user: user}
}

export function userLogout() {
    return { type: types.USER_LOGOUT }
}

