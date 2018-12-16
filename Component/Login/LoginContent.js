
import React , { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TextInput,
    Dimensions,
    Text,
    AlertIOS,
    TouchableOpacity

} from 'react-native';

let {height, width} = Dimensions.get('window');

import LoginTextInputView from './LoginTextInputView'

export default class LoginContent extends Component {

    constructor(props){
        super(props);
        this.state=({
            isAutoLogin:false
        })
    }

    render(){
        return(
            <View style={ styles.container }>

                <View style={ [styles.textInputContsiner] }>

                    <Image style={ styles.usernameIconStyle}
                           source={require('./../resources/login/username_icon.png')}/>

                    <TextInput style={ [styles.textInputStyle]}
                               placeholder="请输入用户名"
                               placeholderTextColor="#f5f5f5"
                               keyboardType="number-pad"
                    />
                    <View style={ styles.bottomLineStyle}/>
                </View>
                <LoginTextInputView/>

                <TouchableOpacity onPress={()=>this.props.forgetPassword()} activeOpacity={1.0}>
                    <Text style={ styles.forgetPasswordStyle}>忘记密码?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._loginAction()} activeOpacity={1.0}>
                    <View style={ styles.loginViewStyles}>
                        <Text style={ styles.loginStyle}>登录</Text>
                    </View>
                </TouchableOpacity>

                <View style={ styles.registContainerStyle}>

                    <TouchableOpacity onPress={()=>this._isAutoLogin(this.state.isAutoLogin)} activeOpacity={1.0}>
                        <View style={ styles.autoLoginStyle}>
                            {this._renderIsAutoLoginImage()}
                            <Text style={styles.autoLoginTextStyle}>下次自动登录</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ styles.registViewStyle }>
                        <TouchableOpacity onPress={()=>this.props.registActon()}>
                        <Text style={ styles.registTestStyle }>注册</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }

    _renderIsAutoLoginImage =()=> {

        let isAuto = this.state.isAutoLogin;

        if (isAuto == false) {
            return(
                <Image style={ [styles.autoLoginIconStyle]} source={require('./../resources/login/check_box_nomal.png')}/>
            )
        } else  {
             return(
                 <Image style={ [styles.autoLoginIconStyle]} source={require('./../resources/login/check_box_selected.png')}/>
             )
        }

    }

    _loginAction = ()=> {
        AlertIOS.alert("登录");

    }

    _isAutoLogin = (isAuto)=> {

        this.setState({
            isAutoLogin:!isAuto
        })

    }

    // _registAction = ()=> {
    //     AlertIOS.alert("注册");
    // }

}

const styles = StyleSheet.create({

    container: {
        marginTop: 220,
        height: 260,
        width: width,
        flexDirection: 'column',
        // backgroundColor: '#f5f5f5',
    },
    textInputContsiner: {
        marginLeft: 20,
        marginRight: 20,
        height: 60,
        marginTop: 0,
        flexDirection: 'column',

    },

    passwordTextInputContsiner: {
        marginLeft: 20,
        marginRight: 20,
        height: 60,
        marginTop: 0,
        flexDirection: 'column',

    },

    usernameIconStyle: {
        marginLeft: 5,
        marginTop: 10,
        width: 40,
        height: 40,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
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
        marginTop: 10,
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
    forgetPasswordStyle: {
        marginTop: 10,
        fontSize:16,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
        color: '#fff'
    },

    loginViewStyles: {
        marginLeft: 40,
        marginRight: 40,
        height: 50,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    loginStyle: {
        fontSize: 28,
        color: '#333',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    registContainerStyle: {
        marginLeft: 40,
        marginRight: 40,
        height: 50,
        marginTop: 20,
        // backgroundColor: '#fff',
        flexDirection: 'row',
    },
    autoLoginStyle: {
        flex: 1,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        // backgroundColor: '#ff0',
        flexDirection: 'row',
    },
    autoLoginIconStyle: {
        width: 15,
        height: 15,
        marginLeft: 0,
        backgroundColor: '#fff',
        marginTop: 17.5,
    },
    autoLoginTextStyle: {
        paddingLeft: 5,
        marginTop: 17,
        fontSize: 16,
        color: '#fff',
    },

    registViewStyle: {
        flex: 1,
        marginLeft: 50,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: '#000',
        borderRadius: 25,
        opacity:0.5,
    },
    registTestStyle: {
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        textAlign: 'center',
        fontSize: 24,
        color: '#ff0',
        marginTop: 13,
        // backgroundColor: '#fff'
    },
    passwordDisplay: {
        alignSelf: 'flex-end',
        width: 30,
        height: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    }


});