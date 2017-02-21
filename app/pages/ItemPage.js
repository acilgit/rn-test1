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
    ViewPagerAndroid,
} from 'react-native';

//import * as imageActions from '../actions/image';

import styles from '../styles';
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class ItemPage extends React.Component {

    constructor(props) {
        super(props);
        //this._onItemPress = this._onItemPress.bind(this);
        //this._onPress = this._onPress.bind(this);
    }

    componentDidMount() {
        //const {dispatch, image, navigator, uri}=this.props;

    }

    _onChangeText(text){
        const {dispatch}=this.props;
        dispatch(imageActions.setPassword(text));
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
        //const {dispatch, navigator}=this.props;

        return (
          <ViewPagerAndroid style={[ss.flex]}
              initialPage={0}>
             <View style={[ss.center, {backgroundColor:'blue'}]}><Text style={[{fontSize:12, color:'red'}]}>one</Text></View>
             <View style={ss.center}><Text style={[{fontSize:18,  color:'yellow'}]}>Two</Text></View>
             <View style={ss.center}><Text style={[{fontSize:12, color:'green'}]}>Three</Text></View>
          </ViewPagerAndroid>
        );
        /*  <TouchableOpacity activeOpacity={0.8}>
         <View style={[styles.container]}>
         <View style={styles.header}>
         <View style={styles.idView}>
         <Text style={styles.nameText} numberOfLines={1}>
         shortName
         <Text style={styles.baseText}>
         {'（ ' + 'subjectType' + ' ）'}
         </Text>
         </Text>
         </View>
         <View style={styles.headerCenter}>
         ? <Image source={require('../image*, ss.center//>
         </View>
         <View style={styles.headerLocation}>
         <View style={styles.locationInfo}>
         <Image source={require('../images/location.png')} />
         <Text style={styles.labelText} numberOfLines={1}>{this.props.location}</Text>
         </View>
         </View>
         </View>

         <View style={styles.body}>
         {content}
         <View style={styles.infoPart}>
         <View style={styles.topPartValue}>
         <Text style={styles.highlightText}>
         {income}
         <Text style={styles.smallText}>{' %'}</Text>
         </Text>
         {
         this.props.icomeAdvance
         ? (
         <Image source={require('../images/advance.png')}
         style={styles.advanceIcon}/>
         )
         : null
         }
         </View>
         <Text style={styles.baseText}>
         年化收益
         </Text>
         </View>
         <View style={styles.line}/>
         <View style={styles.infoPart}>
         <View style={styles.topPartValue}>
         <Text style={[styles.highlightText]}>
         {amount}
         <Text style={styles.smallText}>
         {amountUnit}
         </Text>
         </Text>
         {
         this.props.maxAdvance
         ? (
         <Image source={require('../images/advance.png')}
         style={styles.advanceIcon}/>
         )
         : null
         }
         </View>
         <Text style={styles.baseText}>
         转让金额
         </Text>
         </View>
         <View style={styles.line}/>
         <View style={styles.infoPart}>
         <View style={styles.topPartValue}>
         <Text style={styles.baseText}>
         <Text style={styles.valueText}>
         {time}
         </Text>
         {timeUnit}
         </Text>
         {
         this.props.cycleTimeAdvance
         ? (
         <Image source={require('../images/advance.png')}
         style={styles.advanceIcon}/>
         )
         : null
         }
         </View>
         <Text style={styles.baseText}>
         投资周期
         </Text>
         </View>

         <Button style={styles.button}
         disableStyle={styles.buttonGray}
         enable={this.props.isAllowed && btnCanPress}
         onPress={()=>this.onInvestPress()}
         >
         <Text style={GlobalStyles.buttonText}>{typeCardButtonText}</Text>
         </Button>
         </View>

         {
         source ? (
         <View style={styles.footer}>
         <Text style={styles.footerText} numberOfLines={2}>
         来源 : {source}
         </Text>
         </View>) : null
         }
         </View>
         </TouchableOpacity>*/
    }
}