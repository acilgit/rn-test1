import * as types from './ActionTypes';

export function moreList(rows,list) {
    return dispatch =>{
        dispatch(loadMoreList(rows, list))
    }
}

export function addRefreshList(list) {
    return dispatch =>{
        if (!list.isLoading) {
            dispatch(fetchList());
            setTimeout(() => {
                // prepend 10 items
                const rowData = Array.from(new Array(3))
                    .map((val, i) => ({
                        uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465642826192.jpg',
                        type: 3,
                    }))
                    .concat(list.rows);
                dispatch(receiveList(rowData));
            }, 1500);
        }
    }
}

function fetchList() {
    return {
        type: types.FETCH_LIST,
        isRefreshing: true
    }
}

function receiveList(rows) {
    return {
        type: types.RECEIVE_LIST,
        isRefreshing: false,
        rows: rows,
    }
}

function loadMoreList(rows, list) {
    return {
        type: types.MORE_LIST,
        rows: rows,
        list: list,
    }
}
