import * as types from './ActionTypes';

export function setImage(uri) {
    return (dispatch) =>{
        dispatch(settingImage(uri))
    }
}

export function setImageText( text) {
    return (dispatch) =>{
        dispatch(settingImageText( text))
    }
}

export function setPassword( pwd) {
    return (dispatch) =>{
        dispatch(settingPassword( pwd))
    }
}

function settingImage(uri) {
    return {
        type: types.SET_IMAGE,
        uri,
    }
}

function settingImageText(text) {
    return {
        type: types.SET_IMAGE_TEXT,
        text
    }
}

function settingPassword(pwd) {
    return {
        type: types.SET_PASSWORD,
        pwd
    }
}
