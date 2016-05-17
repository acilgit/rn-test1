import * as types from './ActionTypes';

export function setImage(uri) {
    return (dispatch) =>{
        dispatch(settingImage(uri))
    }
}

function settingImage(uri) {
    return {
        type: types.SET_IMAGE,
        uri
    }
}
