"use strict";

import React from 'react';
import {PixelRatio,
    StyleSheet,
} from 'react-native';
exports.android = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#FF0067',
        //backgroundColor: '#F5FCFF',
        marginTop: 100,
        marginLeft: 5,
        marginRight: 5,
        height: 80,
        padding: 0,
    },
    toolbar: {
        height: 56,
        backgroundColor: '#FF6600'
    },
    itemHor: {
        flex: 1,
        height: 80,
    },
    head: {
        width: 60,
        height: 40,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex: {
        flex: 1,
    },
    lineBottom: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: 'white',
    },
    lineLeftRight: {
        borderColor: 'white',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
    },
    font: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        flex:1,
        margin: 8,
        height: 28,
        justifyContent: 'center',
    },
});

exports.ios = StyleSheet.create({
    containerIos: {
        borderRadius: 5,
        flexDirection: 'row',
        //backgroundColor: '#F5FCFF',
        marginTop: 100,
        marginLeft: 5,
        marginRight: 5,
        height: 80,
        padding: 0,
    },

});

