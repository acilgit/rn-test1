"use strict";

import React from 'react';

import {
    Alert,
    Image,
    Navigator,
    Platform,
    ProgressBarAndroid,
    Text,
    TouchableOpacity,
    ToastAndroid,
    View,
} from 'react-native';

import * as imageActions from '../actions/image';

import styles from '../styles';
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class ImagePage extends React.Component {

    constructor(props) {
        super(props);
        this._onItemPress = this._onItemPress.bind(this);
        const {image, uri}=this.props;
        image.uri = uri;

    }

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
                this.props.dispatch(imageActions.setImage(uri))
            }
        })))
    }

    render() {
        const {image, navigator, uri}=this.props;
        return (
            <View style={[ss.flex]}>
                <Text
                    style={[ss.font, {backgroundColor: 'yellow', color: 'purple', height: 100}]}
                    onPress={()=>{navigator.pop()}}>
                    ok! back to X!!!!!
                </Text>

                <TouchableOpacity style={[ss.flex]} onPress={this._onItemPress}>
                    <Image
                        style={[{margin: 10, resizeMode: Image.resizeMode.cover}, ss.flex]}
                        source={{uri: image.uri}}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
