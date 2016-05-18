import * as types from './ActionTypes';

import {ToastAndroid} from 'react-native';

export function addRefreshList(list) {
    return dispatch => {
        if (!list.isRefreshing) {
            //ToastAndroid.show('fetch List ', 200);
            dispatch(fetchList());
            setTimeout(() => {
                // prepend 10 items
                const rowData = Array.from(new Array(2))
                    .map((val, i) => ({
                        uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465642826192.jpg',
                        type: 3,
                    }));
                //ToastAndroid.show('received List ', 500);
                dispatch(receiveList(rowData));
            }, 800);
        }
    }
}

export function loadMoreList(list, databaseList) {
    return dispatch => {
        if (!list.isEndList) {
            if (!list.isLoadingMore) {
                dispatch(loadingMoreList());
                setTimeout(() => {
                    let newRows = [];
                    let count = list.rows.length;
                    if (count < databaseList.length) {
                        newRows = databaseList.slice(count, count + 20);
                    }
                    let isEndList = databaseList.length <= list.rows.length;
                    let isFirstLoaded = list.rows.length > 0;
                    dispatch(getMoreList(newRows, isEndList, isFirstLoaded))
                }, 800);
            }
        }
    }
}

function fetchList() {
    return {
        type: types.FETCH_REFRESH_LIST,
        isRefreshing: true,
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
