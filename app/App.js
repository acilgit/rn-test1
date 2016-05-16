"use strict";

import React, {Component} from 'react';
import {
    Alert,
    BackAndroid,
    Navigator,
    Platform,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import updateConfig  from '../update.json';
import {
    isFirstTime,
    isRolledBack,
    packageVersion,
    currentVersion,
    checkUpdate,
    downloadUpdate,
    switchVersion,
    switchVersionLater,
    markSuccess,
} from 'react-native-update';
const {appKey} = updateConfig[Platform.OS];

import Home from './containers/Home';

var thisNavigator;

export default class App extends Component {

    // 构造
    constructor(props) {
        super(props);
        this.initialRoute = {
            name: 'home',
            container: Home
        }
    }

    componentWillMount() {
        //if (isFirstTime) {
        //    Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
        //        {text: '是', onPress: ()=>{throw new Error('模拟启动失败,请重启应用')}},
        //        {text: '否', onPress: ()=>{markSuccess()}},
        //    ]);
        //} else if (isRolledBack) {
        //    Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        //}

        //this._checkUpdate()
    }

    _doUpdate(info) {
        downloadUpdate(info).then(hash => {
            Alert.alert('提示', '下载完毕,是否重启应用?', [
                {
                    text: '是', onPress: ()=> {
                    switchVersion(hash);
                }
                },
                {text: '否',},
                {
                    text: '下次启动时', onPress: ()=> {
                    switchVersionLater(hash);
                }
                },
            ]);
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };

    _checkUpdate() {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
                    {
                        text: '确定', onPress: ()=> {
                        info.downloadUrl && Linking.openURL(info.downloadUrl)
                    }
                    },
                ]);
            } else if (info.upToDate) {
                Alert.alert('提示', '您的应用版本已是最新.');
            } else {
                Alert.alert('提示', '检查到新的版本' + info.name + ',是否下载?\n' + info.description, [
                    {
                        text: '是', onPress: ()=> {
                        this._doUpdate.bind(this, info)
                    }
                    },
                    {text: '否',},
                ]);
            }
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };

    _renderScene(route, navigator) {
        thisNavigator = navigator;
        let Container = route.container;
        //const { dispatch } = this.props;
        //const action = bindActionCreators(actions, dispatch);
        return <Container
            {...route.params}
            navigator={navigator}
        />
    };

    render() {
        var sceneConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromRight, {gestures: {pop: null}});

        return (
            <Navigator
                initialRoute={this.initialRoute}
                configureScene={(route)=>sceneConfig}
                renderScene={this._renderScene.bind(this)}/>
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
});

function mapStateToProps(state) {
    return {
        state: state
    }
}
export default connect(mapStateToProps)(App);