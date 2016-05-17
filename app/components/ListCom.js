"use strict";

import React, {Component} from 'react';

import {
    Alert,
    AppRegistry,
    BackAndroid,
    Image,
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

import styles from '../styles';
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

var img1 = {uri: 'http://www.th7.cn/d/file/p/2015/11/22/400694df58d16f6e071ca1b936ff57d4.jpg', type: 1};
var img2 = {uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465581541704.jpg', type: 2};
var LIST_IMG = [img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
];
var dispatch;
export class ListCom extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._onRefresh = this._onRefresh.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
        this._actionSelected = this._actionSelected.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this._renderFooter = this._renderFooter.bind(this);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (rv, rc) => rv !== rc
        });
        dispatch = this.props.dispatch;
        this.save = {
            endList: false,
            isLoading: false,
            renderFooterTimes: 0,
        };
    }

    componentWillMount() {
        //this.dataSource.cloneWithRows(LIST_IMG.slice(0, 10));
    }

    _actionSelected(index) {
        switch (index) {
            case 0:
                ToastAndroid.show('action ' + index + 'pressed', ToastAndroid.SHORT);
                this.props.navigator.pop();
                break
        }
    };

    _addNewRows(datas) {
        const {dispatch, list}=this.props;
        dispatch(listActions.moreList(list));
        this.state.list = this.state.list.concat(datas);
        //this.setState({isLoading: false, ds: this.state.ds.cloneWithRows(this.state.list)});
    }

    _onEndReached() {
        if (!this.save.endList) {
            this.save.isLoading = true;
            setTimeout(() => {
                //this.setState({isLoading: true});
                let count = this.dataSource.getRowCount();
                if (count < LIST_IMG.length) {
                    this._addNewRows(LIST_IMG.slice(count, count + 20));
                    this.save.renderFooterTimes++;
                }
                this.save.endList = LIST_IMG.length == this.state.list.length;
                this.save.isLoading = false;
            }, 1500);
        }
    }

    _onRefresh() {
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(2))
                .map((val, i) => ({
                    uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465642826192.jpg',
                    type: 3,
                }))
                .concat(this.state.list);
            this.setState({
                isRefreshing: false,
                list: rowData,
                ds: this.state.ds.cloneWithRows(rowData),
            });
        }, 1200);
    }

    render() {
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
            ToastAndroid.show(rowId + ' Item pressed!', ToastAndroid.SHORT);
            //this.refs.lv.scrollTo(500);
        }

        switch (rowData.type) {
            case 1:
                return (
                    <View style={[{padding: 5}]}>
                        <TouchableOpacity onPress={_onItemPress}>
                            <View style={[{flexDirection: 'row'}]}>
                                <Image
                                    style={[ss.head, {margin: 5, borderRadius: 10, borderWidth:1, borderColor:'#CCC'}]}
                                    resizeMode="cover"
                                    source={{uri:uri}}/>
                                <Text style={[{marginRight:10}, ss.flex]}>{text}</Text>
                            </View>
                        </TouchableOpacity>
                        {this._getComments(rowData.type)}
                    </View>
                )
                break;
            default:
                return (
                    <View style={[{padding: 5}]}>
                        <TouchableOpacity onPress={_onItemPress}>
                            <View style={[{flexDirection: 'row'}]}>
                                <Text style={[{marginLeft:10, justifyContent:'flex-end'}, ss.flex]}>{text}</Text>
                                <Image style={[ss.head, {margin: 5, borderRadius: 10, borderWidth:1,
                                    borderColor:'#CCC', justifyContent:'flex-end'}]}
                                       resizeMode="cover"
                                       source={{uri:uri}}/>
                            </View>
                        </TouchableOpacity>
                        {this._getComments(rowData.type)}
                    </View>
                )
                break;
        }
    }

    _renderFooter() {
        let {isLoading, endList, renderFooterTimes } = this.save;

        if (!endList) {
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
                    <Text style={[{color: 'rgba(0, 0, 0, 0.3)', fontSize:16, justifyContent: 'center'}]}>数据已结加载完了-
                        -|||</Text>
                </View>
            );
        }
    }

    _getComments(type) {
        var max = Math.floor(Math.random() * 3);
        var textList = [];
        for (var i = 0; i < max; i++) {
            textList.push('这就是评论了这就是评论了这就是评论了!' + i);
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

    addSomething(text) {
        return {
            name: 'myName',
            text
        }
    }
}
