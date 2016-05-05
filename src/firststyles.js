import React, {
    PixelRatio,
    Platform,
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
    itemHor: {
        flex: 1,
        height: 80,
    },
    head: {
        width: 80,
        height: 80,
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
        color: '#ff0060',
        fontSize: 36,
        fontWeight: 'bold',
    }
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

/*if (Platform.OS == 'android') {
    module.exports = android;
} else {
    module.exports = ios;
}*/

