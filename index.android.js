/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    Alert,
    AppRegistry,
    Component,
    Image,
    ListView,
    Navigator,
    Switch,
    Text,
    RefreshControl,
    TouchableOpacity,
    ToolbarAndroid,
    ToastAndroid,
    View,
} from 'react-native';

var thisNavigator;

var ss = require('./index.styles').android;

class First extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sw: false,
        };
    }

    render() {
        return (
            <View style={[ss.flex]}>
                <Text
                    style={[{backgroundColor: '#ff6600', color: 'black', height: 300}, ss.font]}
                    onPress={()=>{this.props.navigator.push({id:'image'})}}>
                    ok! Welcome to X!!!!!!
                </Text>
                <Switch
                    onValueChange={(value)=>{
                        ToastAndroid.show("value:"+ value, ToastAndroid.SHORT);
                        this.setState({sw: value});
                    }}
                    value={this.state.sw}
                />
            </View>
        )
    }
}

class Second extends Component {
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
                uri = null;
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

    render() {
        return (
            <View style={[ss.flex]}>
                <Text
                    style={[ss.font, {backgroundColor: 'yellow', color: 'purple', height: 100}]}
                    onPress={()=>{this.props.navigator.pop()}}>
                    ok! back to X!!!!
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

class RowItem extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            headUri: props.item.headUri;
            text: props.item.headUri;
        };
      }

    _onItemPress

    render(){
        return (
            <View style={[ss.itemHor, {flexDirection: 'column'}]} >
                <TouchableOpacity onPress={}
                <Image style={[ss.head]} resizeMode="cover"/>
                <Text style={ss.font}>{this.state.text}</Text>
            </View>
        )
    }
}

class Third extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //let list = {['ookcode-word', 'ookcode-word', 'ookcode-word', 'ookcode-word', 'ookcode-word', 'ookcode-word', 'ookcode-word',].map((item, index)}
        let LIST_IMG = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
        this._onItemPress = this._onItemPress.bind(this);
        this.state = {
            ds: null,
            refreshing: false;
    }}

    _createRows(uri, i){
        return
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
                uri = null;
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

    render() {
        return (
            <View style={[ss.flex]}>
                <ToolbarAndroid
                />
                <Text
                    style={[ss.font, {backgroundColor: 'yellow', color: 'purple', height: 100}]}
                    onPress={()=>{this.props.navigator.pop()}}>
                    ok! back to X!!!!
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

class TestNew extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._renderNavigator = this._renderNavigator.bind(this);
        this.state = {
            imgUri: 'http://www.th7.cn/d/file/p/2015/11/22/400694df58d16f6e071ca1b936ff57d4.jpg',
        };
    }

    //componentDidMount() {
    //    this.state.setState({});
    //}


    _renderNavigator(route, navigator) {
        //thisNavigator = navigator;
        switch (route.id) {
            case 'text':
                return (
                    <First navigator={navigator}/>
                );
                break;
            case 'image':
                return (
                    <Second navigator={navigator} uri={this.state.imgUri}/>
                );
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <Navigator
                initialRoute={{id: 'text'}}
                renderScene={this._renderNavigator}
            />
            //configureScene={(rount)=>{
            //    return Navigator.SceneConfigs.VerticalUpSwipeJump;
            //}}
            /* renderScene={(route, navigator)=>{
             switch (route.id) {
             case 'text':
             return (
             <First navigator={navigator} />
             );
             break;
             case 'image':
             return (
             <Second navigator={navigator} uri={this.state.imgUri}/>
             );
             break;
             default:
             break;
             }
             }}*/


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

        );
    }


}

AppRegistry.registerComponent('TestNew', () => TestNew);
