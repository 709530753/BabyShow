/**
 * Created by myxc on 2018/9/16.
 */

import React, { Component } from 'react';

import {Dimensions} from 'react-native';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class AccountHeaderView extends Component {

    render(){
        return(
        <TouchableOpacity onPress={this.props.headerClick}>
            <View style={styles.container}>
                <Image source={require('../resources/aaa.jpg')} style={styles.headerImgStyle}/>
                <View style={styles.accountStyleView}>
                    <Text style={styles.usernameStyle}>
                        M·Y·X·C
                    </Text>
                    <Text style={styles.userAccountStyle}>
                        微信号:yxc709530753
                    </Text>
                </View>

                <Image source={require('../resources/aaa.jpg')} style={styles.qrStyle}/>

            </View>
        </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d00',
        height:100,
        flexDirection:'row',

    },
    headerImgStyle:{
        width:50,
        height:50,
        left:20,
        top:20,
    },
    accountStyleView:{
        top:20,
        flexDirection:'column',
        height:50,
        width:width - 70,
    },
    usernameStyle:{
        top:5,
        left:30,
        height:20,
        fontSize:20,
    },
    userAccountStyle:{
        top:15,
        left:30,
        height:20,
        fontSize:15,
        color:'#dddddd'
    },
    qrStyle:{
        width:40,
        height:40,
        right:30,
        top:30,

    }

});