/**
 * Created by XY on 2016/5/18.
 */
"use strict";

import React from 'react';

import {
    Alert,
    BackAndroid,
    Image,
    InteractionManager,
    ListView,
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
var shallowCompare = require('react-addons-shallow-compare');
import styles from '../styles';
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class RowItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const {rowData, sectionId, rowId, _onItemPress} = this.props;
        var uri = rowData.uri;
        var text = rowId + '_' + rowData.type + ' ' + rowData.uri;

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

    _getComments(type) {
        //var max = Math.floor(Math.random() * 3);
        var max = type;
        var textList = [];
        for (var i = 0; i < max; i++) {
            textList.push('这就是一个测试行了!!!!' + i);
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

