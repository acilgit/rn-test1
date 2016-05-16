import * as types from '../actions/ActionTypes';

const initialState = {
    isRefreshing: false,
    rows: [],
};

export default function list(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LIST:
            state.isRefreshing = action.isRefreshing;
            return Object.assign({}, state);
            break;
        case types.RECEIVE_LIST:
            state.isRefreshing = action.isRefreshing;
            state.rows = action.rows;
            return Object.assign({}, state);
            break;
        case types.MORE_LIST:
            state.isRefreshing = action.isRefreshing;
            state.rows = state.rows.concat(action.rows);
            state.index = state.index + 1;
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}

function combine(state, action) {
    state.rows = action.rows
    return state.articleList;
}

function loadMore(state, action) {
    state.rows = state.rows.concat(action.rows);
    return state.rows;
}
