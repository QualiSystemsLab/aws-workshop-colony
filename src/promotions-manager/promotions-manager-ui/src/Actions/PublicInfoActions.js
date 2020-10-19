import * as types from '../Consts/ActionTypes'
import * as routesConsts from '../Consts/Routes'
import axios from 'axios';

export function updateServerVersion(version) {
    return { type: types.UPDATE_SERVER_VERSION, version}
}

export function fetchVersion() {
    return function (dispatch) {
        return axios.get(routesConsts.API_BASE + 'public/version').then(version => {
            console.log(version.data);
            dispatch(updateServerVersion(version.data))
        }).catch(err => {
            console.log(err.response)
        })
    }
}