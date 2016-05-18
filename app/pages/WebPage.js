"use strict";

import React from 'react';

import {
    Alert,
    Image,
    Platform,
    ProgressBarAndroid,
    Text,
    TouchableOpacity,
    ToastAndroid,
    View,
} from 'react-native';

import WebViewBridge from 'react-native-webview-bridge';

import * as webActions from '../actions/web';

import styles from '../styles';
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class WebPage extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._onBridgeMessage = this._onBridgeMessage.bind(this);
        const {web}=this.props;
        web.text = 'abcd---e';
    }

    componentWillMount() {
        WebViewBridge.getSettings()
    }

    /**
     * bind this
     * @private
     */
    _onBridgeMessage(message) {
        const {dispatch} = this.props;
        ToastAndroid.show(message, ToastAndroid.SHORT);
        let msg = JSON.parse(message);
        dispatch(webActions.setText(msg.name));
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

        const {web}=this.props;

        return (
            <View style={[ss.flex]}>
                <Text style={{}}>Native View</Text>
                <Text style={{}}>{web.text}</Text>
                <Text style={{}}>Webb View</Text>
                <WebViewBridge
                ref="webviewbridge"
                onBridgeMessage={this._onBridgeMessage}
                javaScriptEnabled={true}
                scalesPageToFit={true}
                domStorageEnabled ={true}
                automaticallyAdjustContentInsets  ={true}
                source={{uri:'http://www.jcczgb.com/wap_new/tmpl/member/userinfo.html'}}
                injectedJavaScript={injectScript}
                    />
            </View>
        )
                //source={require('../src/main.html')}
        //source={{uri:'http://www.jcczgb.com/wap_new/tmpl/member/userinfo.html'}}
    }
}


