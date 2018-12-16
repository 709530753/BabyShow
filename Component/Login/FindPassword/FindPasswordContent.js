
import React, { Component } from 'react'

import {

    StyleSheet,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,


} from 'react-native'

import FindPasswordTextInput from './FindPasswordTextInput'
import FindPasswordSecurityCodeView from './FindPasswordSecurityCodeView'
export default class FindPasswordContent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <FindPasswordTextInput
                    placeholder={'手机号'}
                    keyboardType={'number-pad'}
                />
                <FindPasswordTextInput
                    iconType={1}
                    placeholder={'输入新密码'}
                    secureTextEntry={true}
                />
                <FindPasswordTextInput
                    iconType={1}
                    placeholder={'确认新密码'}
                    secureTextEntry={true}
                />
                <FindPasswordSecurityCodeView/>

                <View style={styles.findPasswordBtn}>
                    <Text style={styles.findPasswordText}>找回密码</Text>
              </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 10,
        marginTop: 140,
        height: 300,
        flexDirection: 'column',
        backgroundColor: '#f5f5f533',
    },
    findPasswordBtn: {

        marginLeft: 25,
        marginRight: 25,
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    findPasswordText: {

        textAlign: 'center',
        fontSize: 18,
        color: '#333'

    }

})