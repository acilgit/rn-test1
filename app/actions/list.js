import * as types from './ActionTypes';

export function addRefreshList(list) {
    return dispatch => {
        if (!list.isRefreshing) {
            dispatch(fetchList());
                // prepend 10 items
                const rowData = Array.from(new Array(2))
                    .map((val, i) => ({
                        uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465642826192.jpg',
                        type: 3,
                    }));
                dispatch(receiveList(rowData));
        }
    }
}

export function loadMoreList(list, databaseList) {
    return dispatch => {
        if (!list.isEndList) {
            if (!list.isLoadingMore) {
                dispatch(loadingMoreList());
                    let newRows = [];
                    let count = list.rows.length;
                    if (count < databaseList.length) {
                        newRows = databaseList.slice(count, count + 20);
                    }
                    let isEndList = databaseList.length === list.rows.length;
                    let isFirstLoaded = list.rows.length > 0;
                    dispatch(getMoreList(newRows, isEndList, isFirstLoaded))
            }
        }
    }
}

function fetchList() {
    return {
        type: types.FETCH_REFRESH_LIST,
        isRefreshing: true
    }
}

function receiveList(rows) {
    return {
        type: types.RECEIVE_REFRESH_LIST,
        isRefreshing: false,
        rows,
    }
}

function loadingMoreList() {
    return {
        type: types.LOAD_MORE_LIST,
        isLoadingMore: true,
    }
}

function getMoreList(rows, isEndList, isFirstLoaded) {
    return {
        type: types.GET_MORE_LIST,
        isLoadingMore: false,
        isEndList,
        isFirstLoaded,
        rows,
    }
}
