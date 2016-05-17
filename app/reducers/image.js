import * as types from '../actions/ActionTypes';

const initialState = {
    uri: '',
};

export default function image(state = initialState, action) {
    switch (action.type) {
        case types.SET_IMAGE:
            state.uri = action.uri;
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}

