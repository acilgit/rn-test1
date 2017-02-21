"use strict";

import React, {Component} from 'react';
import {
    Alert,
    BackAndroid,
    Navigator,
    Platform,
} from 'react-native';
import codePush from 'react-native-code-push';

import Home from './containers/Home';

var thisNavigator, isRemoved = true;

export default class App extends Component {

    // 构造
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        codePush.checkForUpdate()
        .then(update -> {
            if(!update){
                ToastAndroid.show("app is up to date!");
            }else {
                ToastAndroid.show("update is available, download it?");
                codePush.sync({updateDialog:true, installMode:codePush.installMode.IMMEDIATE})
            }
        })
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

   /* _doUpdate(info) {
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
    };*/

    /*_checkUpdate() {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
                    {
                        text: '确定', onPress: ()=> {
                        info.downloadUrl && Linking.openURL(info.donloadUrl)
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
    };*/

    _goBack() {
        if (thisNavigator && thisNavigator.getCurrentRoutes().length > 1) {
            thisNavigator.pop();
        } else {
            return false;
        }
        return true;
    }

    _renderScene(route, navigator) {
        thisNavigator = navigator;
        let Container = route.container;
        if (route.name === 'WebViewPage') {
            BackAndroid.removeEventListener('hardwareBackPress', this._goBack);
            isRemoved = true;
        } else {
            if (isRemoved) {
                BackAndroid.addEventListener('hardwareBackPress', this._goBack);
            }
        }
        //const { dispatch } = this.props;
        //const action = bindActionCreators(actions, dispatch);
        //
        return <Container navigator={navigator} {...route.params}/>
    };

    render() {
        var sceneConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromRight, {gestures: {pop: null}});

        return (
            <Navigator
                initialRoute={{name: 'home', container: Home}}
                configureScene={(route)=>sceneConfig}
                //navigationBar={<Toolbar>}
                renderScene={this._renderScene.bind(this)}/>
        );
    }

}
