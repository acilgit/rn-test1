"use strict";

import React, {Component} from 'react';

import {
    Alert,
    Image,
    InteractionManager,
    ListView,
    Navigator,
    Platform,
    ProgressBarAndroid,
    RefreshControl,
    Switch,
    Text,
    TouchableOpacity,
    ToolbarAndroid,
    ToastAndroid,
    View,
} from 'react-native';

import * as listActions from '../actions/list';
import RowItem from '../components/rowItem';

import styles from '../styles';
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

var img1 = {uri: 'http://www.th7.cn/d/file/p/2015/11/22/400694df58d16f6e071ca1b936ff57d4.jpg', type: 1};
var img2 = {uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465581541704.jpg', type: 2};
var LIST_IMG = [img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
];

var renderCount;

export default class ListPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._onRefresh = this._onRefresh.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
        this._actionSelected = this._actionSelected.bind(this);
        //this._renderRow = this._renderRow.bind(this);
        this._renderFooter = this._renderFooter.bind(this);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (rv, rc) => rv !== rc
        });
    }

    componentWillMount() {
        this.props.list.rows = LIST_IMG.slice(0, 10);
    }

    _actionSelected(index) {
        switch (index) {
            case 0:
                ToastAndroid.show('count ' + index + ' of ' + renderCount, ToastAndroid.SHORT);
                renderCount = 0;
                //this.props.navigator.pop();
                break
        }
    };

    _onEndReached() {
        const {dispatch, list}=this.props;
        InteractionManager.runAfterInteractions(() => {
            dispatch(listActions.loadMoreList(list, LIST_IMG));
        });
    }

    _onRefresh() {
        const {dispatch, list}=this.props;
        InteractionManager.runAfterInteractions(() => {
            dispatch(listActions.addRefreshList(list));
        });
    }

    render() {
        renderCount = 0;
        let {list, navigator} = this.props;
        return (
            <View style={[ss.flex,{backgroundColor: '#fff'}]}>
                <ToolbarAndroid style={[ss.toolbar]} title='超有营' actions={[{title:'资料', logo:img2, show: 'always'}]}
                                onActionSelected={this._actionSelected}
                                navigator={navigator}
                />
                <ListView
                    ref="lv"
                    renderRow={this._renderRow}
                    dataSource={this.dataSource.cloneWithRows(list.rows)}
                    initialListSize={20}
                    onEndReachedThreshold={10}
                    onEndReached={this._onEndReached}
                    refreshControl={
                        <RefreshControl
                           refreshing={list.isRefreshing}
                           onRefresh={this._onRefresh}
                           tintColor="#ccc"
                           title="Loading..."
                           colors={['#ff0000']}
                           progressBackgroundColor="#fff" /> }
                    renderFooter={this._renderFooter}
                />
            </View>
        )
    }

    _renderRow(rowData, sectionId, rowId) {
        var uri = rowData.uri;
        var text = rowId + '_' + rowData.type + ' ' + rowData.uri;
        var _onItemPress = ()=> {
            ToastAndroid.show(rowId + ' Item pressed of ' + renderCount, ToastAndroid.SHORT);
            //this.refs.lv.scrollTo(500);
        }
        renderCount++;

        return(
            <RowItem rowData={rowData} sectionId={sectionId} rowId={rowId} _onItemPress={_onItemPress} />
        )
    }

    _renderFooter() {
        const {list}=this.props;

        if (!list.isEndList) {
            if (Platform.OS === 'ios') {
                return (
                    <View style={ss.footer}></View>
                );
            } else {
                return (
                    <View style={[]}>
                        <ProgressBarAndroid style={[ss.footer]}/>
                    </View>
                );
            }
        } else {
            return (
                <View style={[ss.footer,{backgroundColor: '#eee'}]}>
                    <Text style={[{color: 'rgba(0, 0, 0, 0.3)', fontSize:16, justifyContent: 'center'}]}>
                        数据已结加载完了- -|||
                    </Text>
                </View>
            );
        }
    }

    _getComments(type) {
        //var max = Math.floor(Math.random() * 3);
        var max = type;
        var textList = [];
        for (var i = 0; i < max; i++) {
            textList.push('这就是一个测试行了!' + i);
        }
        return textList.map((text, index)=> {
            return (
                <View key={index}
                      style={[ss.flex, {backgroundColor: '#eee', padding:10}, type==1?{marginRight:80}:{marginLeft:80}]}>
                    <Text style={[{}]}>{text}</Text>
                </View>
            )
        })
    }

}

