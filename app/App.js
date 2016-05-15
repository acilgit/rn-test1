"use strict";

import React, {Component} from 'react';

import {
    BackAndroid,
    Navigator,
    Platform,
} from 'react-native';

import Home from './containers/Home';

var thisNavigator;

export default class App extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        var sceneConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromRight, {gestures: {pop: null}});

        return (
            <Navigator
                initialRoute={{name: 'text', container: Home}}
                configureScene={(route)=>sceneConfig}
                renderScene={(route, navigator)=>{
                    let Container = route.container;
                    return <Container {...route.params} navigator={navigator} />
                }}/>
        );
    }
}

BackAndroid.addEventListener('hardwareBackPress', ()=> {
    if (thisNavigator && thisNavigator.getCurrentRoutes().length > 1) {
        thisNavigator.pop();
    } else {
        return false;
    }
    return true;
})
