import * as types from '../actions/ActionTypes';

const initialState = {
    isRefreshing: false,
    isLoadingMore: false,
    isEndList: false,
    isFirstLoaded: false,
    rows: [],
};

export default function list(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REFRESH_LIST:
            state.isRefreshing = action.isRefreshing;
            return Object.assign({}, state);
            break;
        case types.RECEIVE_REFRESH_LIST:
            state.isRefreshing = action.isRefreshing;
            state.rows = action.rows.concat(state.rows);
            return Object.assign({}, state);
            break;
        case types.LOAD_MORE_LIST:
            state.isLoadingMore = action.isLoadingMore;
            return Object.assign({}, state);
            break;
        case types.GET_MORE_LIST:
            state.isLoadingMore = action.isLoadingMore;
            state.isEndList = action.isEndList;
            state.rows = state.rows.concat(action.rows);
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}

/*function combine(state, action) {
    state.rows = action.rows
    return state.articleList;
}

function loadMore(state, action) {
    state.rows = state.rows.concat(action.rows);
    return state.rows;
}*/
