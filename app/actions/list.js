import * as types from './ActionTypes';

export function moreList(rows,list) {
    return dispatch =>{
        dispatch(loadMoreList(rows, list))
    }
}

export function getList(list) {
    return dispatch =>{
        if (!list.isLoading) {
            dispatch(fetchList())
        }
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(3))
                .map((val, i) => ({
                    uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465642826192.jpg',
                    type: 3,
                }))
                .concat(list.rows);
            dispatch(receiveList(rowData));
        }, 2200);
    }

    //return dispatch => {
    //    if (!isLoadMore) {
    //        dispatch(fetchArticleList(category));
    //    }
    //    let URL = `http://gank.io/api/data/${category}/10/${index}`;
    //    console.log(URL);
    //    fetch(URL).then(response => response.json())
    //        .then(responseData => {
    //            console.log(responseData);
    //            if (!isLoadMore) {
    //                dispatch(receiveArticleList(responseData, category));
    //            } else {
    //                dispatch(receiveArticleListMore(responseData, category, nowRead));
    //            }
    //        }).catch((error) => {
    //        console.log('error');
    //    }).done();
    //}
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
