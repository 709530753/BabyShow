
import React, { Component } from 'react';

import {Dimensions} from 'react-native';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';



var { heigh, width } = Dimensions.get('window');
let headerheigh = 45;

export default class PictureHeader extends Component {

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.content}>

                    <Text style={styles.testStyle}>照片</Text>
                    <Text style={styles.testStyle}>相簿</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
        width:width,
        height:headerheigh,
        backgroundColor:'#dddddd',
        flexDirection:'column',
    },
    content:{
        backgroundColor:'#fff',
        flexDirection:'row',
        width:width,
        height:headerheigh - 1,
    },
    testStyle:{
        top:0,
        bottom:0,
        width:width/2,
        height:20,
        top:(headerheigh - 20 - 1)/2,
        textAlign:'center',
        fontSize:16,
    }

});


