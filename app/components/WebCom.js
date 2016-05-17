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

export class WebCom extends Component {
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


