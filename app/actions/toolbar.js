import * as types from './ActionTypes';

export function setToolbarTitle(title) {
    return (dispatch) =>{
        dispatch(settingToolbarTitle(title))
    }
}

export function setToolbar( text) {
    return (dispatch) =>{
        dispatch(settingToolbarText( text))
    }
}

export function settingToolbarTitle( pwd) {
    return (dispatch) =>{
        dispatch(settingPassword( pwd))
    }
}

function settingToolbar(uri) {
    return {
        type: types.SET_IOOLBAR,
        uri,
    }
}
