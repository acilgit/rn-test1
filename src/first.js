/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component} from 'react';

import {
    AppRegistry,
    Image,
    View,
    Text,
    TouchableOpacity,
    Navigator,
} from 'react-native';

var thisNavigator;

var ss = require('./first.styles').android;

class First extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        this.state.setState({});
    }

    render() {
        let urlImage = 'http://www.th7.cn/d/file/p/2015/11/22/400694df58d16f6e071ca1b936ff57d4.jpg';

        return (
            <Navigator
                initialRoute={{id: 'text'}}
                configureScene={(rount)=>{
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={this._rendNavigator}
            />

            /*  <View style={[styles.flex]}>
             <View style={styles.container}>
             <View style={[ styles.itemHor, styles.center]}>
             <Text style={[styles.font]}>酒店</Text>
             </View>
             <View style={[styles.itemHor,  styles.lineLeftRight]}>
             <View style={[styles.flex,styles.lineBottom, styles.center]}>
             <Text style={[styles.font]}>海外酒店</Text>
             </View>
             <View style={[styles.flex, styles.center]}>
             <Text style={[styles.font]}>特惠酒店</Text>
             </View>
             </View>
             <View style={[styles.itemHor]}>
             <View style={[styles.flex, styles.lineBottom, styles.center]}>
             <Text style={[styles.font]}>团购</Text>
             </View>
             <View style={[styles.flex, styles.center]}>
             <Text style={[styles.font]}>客栈，公寓</Text>
             </View>
             </View>
             </View>
             <Image
             style={[{height: 200, margin: 10, resizeMode: 'contain'}, styles.flex, styles.center]}
             source={{uri: urlImage}} />

             </View>*/

        );
    }

    _rendNavigator(route, navigator) {
        thisNavigator = navigator;
        switch (route.id) {
            case 'text':
                return (
                    <View style={[ss.container]}>
                        <Text
                            style={ss.font}
                            onPress={navigator.push({id:'image'})}>ok! Welcome to X</Text>
                    </View>);
                break;
            case 'image':
                return (
                    <View style={[ss.container]}>
                        <Image
                            style={[{height: 200, margin: 10, resizeMode: 'cover'}, ss.flex]}
                            onPress={navigator.pop()}
                            source={{uri: urlImage}}/>
                    </View>);
                break;
            default:
                break;
        }
    }

}

AppRegistry.registerComponent('TestNew', () => TestNew);
