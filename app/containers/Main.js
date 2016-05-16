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

import WebViewBridge from 'react-native-webview-bridge';

import * as listActions from '../actions/list';

import styles from '../styles';
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export class Second extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._onItemPress = this._onItemPress.bind(this);
        this.state = {
            imgUri: this.props.uri,
        };
    }

    componentDidMount() {

    }

    /**
     * bind this
     * @private
     */
    _onItemPress() {
        ToastAndroid.show('Image pressed!', ToastAndroid.SHORT);
        Alert.alert('标题', 'messages', '.......'.split('').map((dot, index)=>({
            text: '按键' + index,
            onPress: ()=> {
                let uri = null;
                switch (index) {
                    case 0:
                        uri = 'http://lookcode-wordpress.stor.sinaapp.com/uploads/2016/02/one5.gif';
                        break;
                    case 1:
                        uri = 'http://cc.cocimg.com/api/uploads/20150408/1428465581541704.jpg';
                        break;
                    case 2:
                        uri = 'http://cc.cocimg.com/api/uploads/20150408/1428465642826192.jpg';
                        break;
                }
                this.setState({imgUri: uri})
            }
        })))
    }

    _makeAction(type, ...args) {
        return (...argList) => {
            let action = {type};
            args.forEach((arg, index)=> {
                action[arg] = argList[index]
            });
            return action;
        }
    }

    render() {

        var arr = [];
        let a = 'aaa'
        let b = 'bbb'
        let c = 'ccc';
        arr[a] = 'abcdefg';
        arr[b] = 'bbbbbbb';
        arr[c] = 'ccccccc';

        let bb = arr[1];
        let cc = arr[c];

        var ac = {};
        const {
            types,
            callAPI,
            shouldCallAPI = () => true,
            payload = {}
            } = ac;

        let type1 = 'typeName1';

        let aAction = this._makeAction(type1, 'id', 'name', 'age', 'pw');

        let aa = aAction(1234, 'aName', 99, 'kwgkwg');
        let ad = {
            [a](b, aa){
                let text = b;
                return [...aa, text];
            }
        };

        return (
            <View style={[ss.flex]}>
                <Text
                    style={[ss.font, {backgroundColor: 'yellow', color: 'purple', height: 100}]}
                    onPress={()=>{this.props.navigator.pop()}}>
                    ok! back to X!!!!{arr[c]}
                </Text>

                <TouchableOpacity style={[ss.flex]} onPress={this._onItemPress}>
                    <Image
                        style={[{margin: 10, resizeMode: Image.resizeMode.cover}, ss.flex]}
                        source={{uri: this.state.imgUri}}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export class Web extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._onBridgeMessage = this._onBridgeMessage.bind(this);
        this.state = {
            message: '......',
        };
    }

    componentDidMount() {

    }

    /**
     * bind this
     * @private
     */
    _onBridgeMessage(message) {

        ToastAndroid.show(message, ToastAndroid.SHORT);
        let msg = JSON.parse(message);
        this.setState({message: msg.name});
        const { webviewbridge } = this.refs;
        switch (message) {
            case "hello from webview":
                webviewbridge.sendToBridge("hello from react-native");
                break;
            case "got the message inside webview":
                ToastAndroid.show(message, ToastAndroid.SHORT);
                console.log("we have got a message from webview! yeah");
                break;
            default:
                break;
        }
    }

    //WebViewBridge.send(getShareJson());
    render() {
        const injectScript = `
        function share(){
            if (WebViewBridge) {
                WebViewBridge.send(getShareJson());
            }
        }
        var btn = document.getElementById("btn");
        btn.onclick=share;
        btn.value="sssssss";
        `;
        //      const injectScript = `
        //(function () {
        //  if (WebViewBridge) {
        //    WebViewBridge.onMessage = function (message) {
        //      if (message === "hello from react-native") {
        //        WebViewBridge.send("got the message inside webview");
        //      }
        //    };
        //    WebViewBridge.send("hello from webview");
        //  }
        //}());
        //      `;
        //<WebView
        //automaticallyAdjustContentInsets={false}
        //style={{height: 400}}
        //source={require('./main2.html')}
        //onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        //startInLoadingState={false}
        //    />

        //injectedJavaScript={injectScript}
        return (
            <View style={[ss.flex]}>
                <Text style={{}}>Native View</Text>
                <Text style={{}}>{this.state.message}</Text>
                <Text style={{}}>Webb View</Text>
                <WebViewBridge
                    ref="webviewbridge"
                    onBridgeMessage={this._onBridgeMessage}
                    source={require('../src/main.html')}
                    javaScriptEnabled={true}
                    injectedJavaScript={injectScript}
                />
            </View>
        )
    }
}

/*class RowItem extends Component {
 // 构造
 constructor(props) {
 super(props);
 // 初始状态
 this.state = {
 headUri: props.item.headUri,
 text: props.item.headUri,
 };
 }

 _onItemPress() {

 }

 render() {
 return (
 <View style={[ss.itemHor, {flexDirection: 'column'}]}>
 <TouchableOpacity onPress=this.props.onPress>
 <Image style={[ss.head, {margin: 15}]} resizeMode="cover"/>
 <Text style={ss.font}>{this.state.text}</Text>
 </TouchableOpacity>
 </View>
 )
 }
 }*/
var img1 = {uri: 'http://www.th7.cn/d/file/p/2015/11/22/400694df58d16f6e071ca1b936ff57d4.jpg', type: 1};
var img2 = {uri: 'http://cc.cocimg.com/api/uploads/20150408/1428465581541704.jpg', type: 2};
var LIST_IMG = [img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2, img1, img2,
];
var dispatch;
export class List extends Component {

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
        this.props.dataSource.cloneWithRows(this.state.list.concat(LIST_IMG.slice(0, 10)));
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
        this.setState({isLoading: false, ds: this.state.ds.cloneWithRows(this.state.list)});
    }

    _onEndReached() {
        if (!this.save.endList) {
            this.save.isLoading = true;
            setTimeout(() => {
                //this.setState({isLoading: true});
                let count = this.state.ds.getRowCount();
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
        let {list, dataSource, navigator} = this.props;
        return (
            <View style={[ss.flex,{backgroundColor: '#fff'}]}>
                <ToolbarAndroid style={[ss.toolbar]} title='超有营' actions={[{title:'资料', logo:img2, show: 'always'}]}
                                onActionSelected={this._actionSelected}
                                navigator={navigator}
                />
                <ListView
                    ref="lv"
                    renderRow={this._renderRow}
                    dataSource={dataSource.cloneWithRows(list.rows)}
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

