
import React, { Component } from 'react'

import {

    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native'

import RegistTextInputView from './RegistTextInputView'
import GetSecurityCodeView from './GetSecurityCodeView'

export default class RegistContent extends Component {

    render(){
        return(
            <View style={ styles.container }>
                <RegistTextInputView
                    placeholder={"请输入手机号"}
                />
                <RegistTextInputView
                    iconType={2}
                    placeholder={"请输入密码"}
                    secureDisplay={true}
                    secureTextEntry={true}
                />
                <GetSecurityCodeView/>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        marginTop: 130,
        height: 180,
        flexDirection: 'column',
        backgroundColor: '#f5f5f533',
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,

    }

});