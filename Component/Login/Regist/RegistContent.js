
import React, { Component } from 'react'

import {

    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native'


export default class RegistContent extends Component {

    render(){
        return(
            <View style={ styles.container } opacity={0.6}>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        marginTop: 130,
        height: 270,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5'

    }

});