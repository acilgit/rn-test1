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

export class ImageCom extends Component {
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
