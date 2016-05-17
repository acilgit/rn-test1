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
import {connect} from 'react-redux'

import ImageContainer from './ImageContainer';
import ListContainer from './ListContainer';
import WebContainer from './WebContainer'

var styles = require('../styles');
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class Home extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    //componentDidMount() {
    //    this.state.setState({});
    //}

    render() {
        const {navigator} = this.props;
        return (
            <View style={[ss.flex]}>
                <Text
                    style={[{backgroundColor: '#ff6600', color: 'black', height: 100}, ss.font]}
                    onPress={()=>{navigator.push({name:'image', container: ImageContainer, params:{uri:'http://i1.letvimg.com/lc05_iscms/201604/18/21/14/86c81daff3a040de8494a0d4dfcf2d9d.jpg'}})}}>
                    ok! Welcome to Images!
                </Text>
                <Text
                    style={[{backgroundColor: '#66ff66', color: 'black', height: 100}, ss.center, ss.font]}
                    onPress={()=>{navigator.push({name:'list', container:ListContainer})}}>
                    ok! Welcome to List!
                </Text>
                <Text
                    style={[{backgroundColor: '#669922', color: 'black', height: 100}, ss.center, ss.font]}
                    onPress={()=>{navigator.push({name:'webview', container: WebContainer})}}>
                    ok! Welcome to Web!
                </Text>
                <Switch
                    onValueChange={(value)=>{
                        ToastAndroid.show("value:"+ value, ToastAndroid.SHORT);
                    }}
                    value={false}
                />
            </View>
        );
    }
        /* <View style={[ss.flex]}>
         <View style={ss.container}>
         <View style={[ ss.itemHor, ss.center]}>
         <Text style={[ss.font]}>酒店</Text>
         </View>
         <View style={[ss.itemHor,  ss.lineLeftRight]}>
         <View style={[ss.flex,ss.lineBottom, ss.center]}>
         <Text style={[ss.font]}>海外酒店</Text>
         </View>
         <View style={[ss.flex, ss.center]}>
         <Text style={[ss.font]}>特惠酒店</Text>
         </View>
         </View>
         <View style={[ss.itemHor]}>
         <View style={[ss.flex, ss.lineBottom, ss.center]}>
         <Text style={[ss.font]}>团购</Text>
         </View>
         <View style={[ss.flex, ss.center]}>
         <Text style={[ss.font]}>客栈，公寓</Text>
         </View>
         </View>
         </View>
         <Image
         style={[{height: 200, margin: 10, resizeMode: 'cover'}, ss.flex, ss.center]}
         source={{uri: urlImage}} />
         </View>*/
}

