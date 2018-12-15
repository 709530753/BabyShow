
import React , { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AlertIOS

} from 'react-native'


export default class LoginTextInputView extends Component {

    constructor(props) {
        super(props);

        this.state={
            secureTextEntry:true
        }

    }

    render(){
        return(

            <View style={ styles.container}>
                <View style={styles.passwordTextInputContsiner}>
                    <Image style={ styles.passwordIconStyle}
                           source={require('./../resources/login/password_icon.png')}/>

                    <TextInput style={ [styles.textInputStyle]}
                               placeholder="请输入密码"
                               placeholderTextColor="#f5f5f5"
                               autoCapitalize={'none'}
                               secureTextEntry={this.state.secureTextEntry}
                               password={true}/>
                    <TouchableOpacity onPress={()=>this._secureTextEntry()} activeOpacity={1.0}>
                        {this._renderImage()}
                    </TouchableOpacity>

                </View>
                <View style={ styles.bottomLineStyle}/>
            </View>
        )
    }

    _renderImage(){
        let secureTextEntry = this.state.secureTextEntry;
        if (secureTextEntry == true) {
            return(
                <Image style={styles.passwordDisplay} source={require('./../resources/login/password_hide.png')}/>
            )
        } else  {
            return(
                <Image style={styles.passwordDisplay} source={require('./../resources/login/password_show.png')}/>
            )
        }
    }

    _secureTextEntry =()=> {

        // AlertIOS.alert(" secureTextEntry : " + this.state.secureTextEntry);

        let secureTextEntry = this.state.secureTextEntry;
            this.setState({
                secureTextEntry:!secureTextEntry
                })

    }

}

const styles = StyleSheet.create({

    container: {
        marginLeft: 20,
        marginRight: 20,
        height: 60,
        marginTop: 0,
        flexDirection: 'column',
    },
    passwordTextInputContsiner: {
        flex: 1,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
    },
    passwordIconStyle: {
        marginLeft: 12,
        marginTop: 20.5,
        width: 25,
        height: 25,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',

    },
    textInputStyle: {
        height: 40,
        justifyContent: 'center',
        width: 260,
        position: 'absolute',
        marginLeft: 50,
        marginTop: 18,
        marginRight:10,
        color: '#fff',
        fontSize: 17,
        // backgroundColor: '#fff',
    },

    bottomLineStyle: {
        height: 1,
        width: 300,
        backgroundColor: '#fff',
        marginTop: 50,
        marginLeft: 50,

    },
    passwordDisplay: {
        position: 'absolute',
        marginLeft: 320,
        marginTop: 25,
        width: 30,
        height: 30,
        // backgroundColor: '#fff',
    }


});