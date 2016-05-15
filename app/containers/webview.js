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
    WebView,
} from 'react-native';

import WebViewBridge from 'react-native-webview-bridge';

var thisNavigator;

var styles = require('../styles');
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class Web extends Component {
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

        return (
            <View style={[ss.flex]}>
                <Text style={{}}>Native View</Text>
                <Text style={{}}>{this.state.message}</Text>
                <Text style={{}}>Web View</Text>
                <WebViewBridge
                    ref="webviewbridge"
                    onBridgeMessage={this._onBridgeMessage}
                    source={require('./src/main.html')}
                    javaScriptEnabled={true}
                    injectedJavaScript={injectScript}
                />

            </View>
        )
    }
}

