import * as types from '../actions/ActionTypes';

const initialState = {
    text: '',
};

export default function web(state = initialState, action) {
    switch (action.type) {
        case types.SET_TEXT:
            state.text = action.text;
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}
