/**
 * Created by 18953 on 2016/6/10.
 */
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
import { Toolbar as MaterialToolbar } from 'react-native-material-design';

export default class Toolbar extends React.Component{

    static contextTypes = {
        navigator: PropTypes.object
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };

    // 构造
      constructor(props) {
        super(props);
      }

    constructor(props) {
        super(props);
        this.state = {
            title: AppStore.getState().routeName,
            theme: AppStore.getState().theme,
            counter: 0
        };
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    componentDidMount = () => {
        AppStore.listen(this.handleAppStore);
    };

    componentWillUnmount() {
        AppStore.unlisten(this.handleAppStore);
    }

    handleAppStore = (store) => {
        this.setState({
            title: store.routeName,
            theme: store.theme
        });
    };

    render() {
        const { navigator } = this.context;
        const { theme, counter } = this.state;
        const { onIconPress } = this.props;

        return (
            <MaterialToolbar
                title={navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Welcome'}
                primary={theme}
                icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
                actions={[{
                    icon: 'warning',
                    badge: { value: counter, animate: true },
                    onPress: this.increment
                }]}
                rightIconStyle={{
                    margin: 10
                }}
            />
        );
    }
}