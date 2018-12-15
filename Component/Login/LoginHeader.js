
import React, { Component } from 'react'
import {Dimensions} from 'react-native';

import {
    StyleSheet,
    View,
    Image

} from 'react-native'

var {height, width} = Dimensions.get('window');

export default class LoginHeader extends Component {

    render(){
        return(
            <View style={ styles.container }>
                <Image style={ styles.headerImgStyle} source={ require('./../resources/login/header_icon.jpeg')}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({

   container: {
       height: 240,
       width: width,
       position:'absolute',
       alignItems:'center',
       justifyContent:'center',
   } ,
    headerImgStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

});