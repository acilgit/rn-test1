import * as types from './ActionTypes';

export function setText(text) {
    return dispatch =>{
        dispatch(settingText(text))
    }
}

function settingText(text) {
    return {
        type: types.SET_TEXT,
        text
    }
}
