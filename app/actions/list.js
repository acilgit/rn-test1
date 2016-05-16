import * as types from './ActionTypes';

export function getList() {
    return dispatch(fetchList);


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

function receiveList(rankList, category) {
    return {
        type: types.RECEIVE_LIST,
        isRefreshing: false
    }
}

function receiveArticleListMore(rankList, category, nowRead) {
    return {
        type: types.RECEIVE_ARTICLE_LIST_MORE,
        isRefreshing: false,
        category: category,
        nowRead: nowRead,
        rankList: rankList
    }
}
