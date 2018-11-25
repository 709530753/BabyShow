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


export default class Edit extends Component {

    render(){
        return(
            <View style={styles.container}>
                    <View style={styles.navStyle} >
                        <Text style={styles.navTitle}>编辑</Text>
                    </View>
                <Text>
                    Edit
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
        marginTop:12,
        fontSize:18,
        textAlign:'center',
        width:width,
    }
});