/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';
import {Dimensions} from 'react-native';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Picture extends Component {

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navStyle} >
                    <Text style={styles.navTitle}>图片</Text>
                </View>
                <Text>
                    Picture
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navStyle:{
        marginTop:0,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#dddddd',
        height:64,
        width:width,
        justifyContent:'center'
    },
    navTitle:{
        fontSize:18,
        textAlign:'center',
        width:width,
    }
});