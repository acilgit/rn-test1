"use strict";

import React from 'react';

import {
    Alert,
    Image,
    Navigator,
    Platform,
    ProgressBarAndroid,
    Text,
    TextInput,
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
        this._onPress = this._onPress.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
        const {image, uri}=this.props;
        image.uri = uri;
    }

    componentDidMount() {
        const {dispatch, image, navigator, uri}=this.props;
        //setTimeout(() => {
        //    var a = [];
        //    for (var x = 1; x < 99999; x++) {
        //        if (x % 2 == 1 && x % 3 == 0 && x % 4 == 1 && x % 5 == 1 && x % 6 == 3 && x % 7 == 0 && x % 8 == 1 && x % 9 == 0) {
        //            a.push(x / 63);
        //        }
        //    }
        //    ToastAndroid.show('x = ' + a, ToastAndroid.LONG);
        //    dispatch(imageActions.setImageText('x='+a));
        //}, 1000);
    }

    _onChangeText(text){
        const {dispatch}=this.props;
        dispatch(imageActions.setPassword(text));
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
                const {dispatch, image}=this.props;
                dispatch(imageActions.setImage(uri));
            }
        })))
    }
    _onPress() {
        const {dispatch, image}=this.props;
        ToastAndroid.show('Image pressed!', ToastAndroid.SHORT);
        Alert.alert('标题', 'pw: '+ image.pwd , [{
            text: '按键' ,
            onPress: ()=> {
                //let uri = null;
                //const {dispatch, image}=this.props;
                //dispatch(imageActions.setImage(uri));
            }
        }])
    }
s
    render() {
        const {dispatch, image, navigator, uri}=this.props;

        return (
            <View style={[ss.flex]}>
                <TouchableOpacity style={[ss.flex]} onPress={this._onPress}>
                <Text
                    style={[ss.font, {backgroundColor: 'yellow', color: 'purple', height: 30}]}>
                    {image.text}
                </Text>
                </TouchableOpacity>
                <TextInput
                    ref='pw'
                    onChangeText={this._onChangeText}
                    value={image.pwd}
                />
                <TouchableOpacity style={[ss.flex]} onPress={this._onItemPress}>
                    <Image
                        style={[{margin: 10, resizeMode: Image.resizeMode.cover}, ss.flex]}
                        source={{uri: image.uri}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
