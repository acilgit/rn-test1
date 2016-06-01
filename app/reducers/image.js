import * as types from '../actions/ActionTypes';

const initialState = {
    uri: '',
    text: '',
    pwd:'',
};

export default function image(state = initialState, action) {
    switch (action.type) {
        case types.SET_IMAGE:
            state.uri = action.uri;
            return Object.assign({}, state);
            break;
        case types.SET_IMAGE_TEXT:
            state.text = action.text;
            return Object.assign({}, state);
            break;
        case types.SET_PASSWORD:
            state.pwd = action.pwd;
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}
