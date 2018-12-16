
import React, { Component } from 'react'

import {

    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    UIManager,
    findNodeHandle,
    AlertIOS,

} from 'react-native'

export default class RegistTextInputView extends Component {

    constructor(props){
        super(props);

        this.state={
            secureTextEntry: this.props.secureTextEntry,
        };

    }

    render(){

        var placeholderText = this.props.placeholder;
        var iconType = this.props.iconType;
        var secureTextEntry = this.state.secureTextEntry;

        if (placeholderText == null) {
            placeholderText = "请输入文本"
        }

        if (secureTextEntry == undefined || secureTextEntry == null) {
            secureTextEntry == false;
        }

        return(
            <View
                ref="container_view"
                style={styles.container}
                  opacity={1}>
                <View style={styles.textInputContainer} >
                    {this._renderIcon(iconType)}
                    <View style={styles.centerLineStyle}/>
                    <TextInput style={styles.textInputStyle}
                               placeholderTextColor={'#f5f5f5'}
                               placeholder={placeholderText}
                               autoCapitalize={'none'}//关闭首字母自动大写
                               secureTextEntry={secureTextEntry}

                    />
                    <TouchableOpacity onPress={()=>this._secureTextEntry()} activeOpacity={1.0}>
                        {this._passwordDisplayIcon()}
                    </TouchableOpacity>
                    <Image/>
                </View>
                <View style={styles.bottomLineStyle}></View>

            </View>
        )
    }


    _secureTextEntry =()=> {

        let secureTextEntry = this.state.secureTextEntry;
        this.setState({
            secureTextEntry:!secureTextEntry
        });

    }

    _passwordDisplayIcon(){
        let secureTextEntry = this.state.secureTextEntry;
        let secureDisplay = this.props.secureDisplay;
        if (secureDisplay == true) {
            if (secureTextEntry == true) {
                return(
                    <Image style={styles.passwordDisplay} source={require('./../../resources/login/password_hide.png')}/>
                )
            } else  {
                return(
                    <Image style={styles.passwordDisplay} source={require('./../../resources/login/password_show.png')}/>
                )
            }
        } else {
            return null;
        }
    }

    _renderIcon =(iconType)=> {

        if (iconType == null || iconType == 1) {
            return(
                <Image style={styles.iconStyle} source={require('../../resources/regist/user.png')}/>
            )
        } else if (iconType == 2) {
            return(
                <Image style={styles.iconStyle} source={require('../../resources/regist/password.png')}/>
            )
        }

    }

}

const styles = StyleSheet.create({

    container: {

        height: 60,
        // backgroundColor: '#f00',
        flexDirection: 'column',

    },
    textInputContainer: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        height: 58,
        // backgroundColor: '#ff0',
        flexDirection: 'row',
        alignItems: 'center',

    },
    bottomLineStyle: {
        height: 2,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: '#fff',
    },
    iconStyle: {
        marginLeft: 10,
        width: 30,
        height: 30,

    },
    centerLineStyle: {
        width: 2,
        marginLeft: 10,
        height: 40,
        backgroundColor: '#fff'
    },
    textInputStyle: {
        height: 40,
        marginLeft: 10,
        // backgroundColor: '#fff',
        // width: 250,
        flex: 1,
        fontSize: 18,
        color: '#fff',
    },
    passwordDisplay: {
        marginRight: 15,
        marginLeft: 10,
        width: 30,
        height: 30,
    }

});