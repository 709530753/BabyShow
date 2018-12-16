/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import NavTitleView from './../List/NavTitleView'
import storage from './../Storage/Storage'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AlertIOS,
    Image,
    ImageBackground
} from 'react-native';

import LoginHeader from './LoginHeader'
import LoginContent from './LoginContent'
import FastLoginView from './FastLoginView'

import Regist from './Regist/Regist'
import FindPassword from './FindPassword/FindPassword'

var {height, width} = Dimensions.get('window');


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            password:this.props.password,
        }

    }

    render(){
        return(
                <ImageBackground style={styles.container}
                       source={require('./../resources/login/login_bg.jpeg')}>
                    {/* loginHeader */}
                    <LoginHeader
                    />
                    <LoginContent
                        registActon={()=>this._registActon()}
                        forgetPassword={()=>this._forgetPassword()}
                    />
                    <FastLoginView/>


                </ImageBackground>
        )
    }

    _forgetPassword =()=> {

        // AlertIOS.alert("忘记密码");

        let {navigator} = this.props;
        console.log("navigator : " + navigator);

        if (navigator) {
            navigator.push({
                component: FindPassword,
                params:{

                }
            })
        }

    }

    _registActon =()=> {
        let {navigator} = this.props;
        console.log("navigator : " + navigator);

        if (navigator) {
            navigator.push({
                component:Regist
            })
        }
    }


/*
<View style={styles.container}>
<NavTitleView
navTitle={"登录"}
backTitle={"返回"}
back={()=>this._back()}
rightBarBtnItemIcon={""}
/>

<View style={styles.usernameViewStyle}>
<Text style={styles.usernameTextStyle}>
用户名:
</Text>
<TextInput style={styles.usernameStyle}
placeholder={"请输入用户名"}
autoCapitalize={'none'}
autoCorrect={false}
keyboardType={'phone-pad'}
underlineColorAndroid="transparent"
onChangeText={(text)=>
    this.setState({
        username:text
    })}
/>

</View>

<View style={styles.passwordViewStyle}>
<Text style={styles.passwordTextStyle}>
密码:
</Text>
<TextInput style={styles.passwordStyle}
placeholder={"请输入密码"}
autoCapitalize={'none'}
autoCorrect={false}
keyboardType={'phone-pad'}
underlineColorAndroid="transparent"

onChangeText={(text)=>

    this.setState({
        password:text
    })}
/>
</View>

<TouchableOpacity onPress={()=>this._login()}>
<Text style={styles.loginBtnStyle}>
登录
</Text>
</TouchableOpacity>

</View>
    */

    _login(){

        let username = this.state.username;
        let password = this.state.password;

        if (username == "") {
            AlertIOS.alert("请输入用户名!")
            return
        }

        if (password == "") {
            AlertIOS.alert("请输入密码!")
            return
        }

        if (username=="123456" && password == "123456"){
            // AlertIOS.alert(username,password);
            AlertIOS.alert("登录成功!")

            storage.save({
                key:"userToken",
                data:username,
                expires:null,
            })

             this._back();
        } else  {
            AlertIOS.alert("登录失败!")
        }

    }

    _back(){

        let token= global.storage.load({
            key:'userToken'
        })

        AlertIOS.alert(token);

        this.props.navigator.pop();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#F5FCFF'
    },
    usernameViewStyle:{
        marginLeft:20,
        marginRight:20,
        marginTop:30,
        height:60,
        flexDirection:'row',
    },
    usernameTextStyle:{
        marginLeft:0,
        marginTop:20,
        marginRight:0,
        height:20,
        fontSize:18,
    },
    usernameStyle:{
        marginLeft:10,
        marginRight:20,
        marginTop:10,
        height:40,
        width:200,
        color:'#666',
        borderWidth:1,
        borderRadius:4,
    },
    passwordViewStyle:{
        marginLeft:20,
        marginRight:20,
        marginTop:30,
        height:60,
        flexDirection:'row',
    },
    passwordTextStyle:{
        marginLeft:0,
        marginTop:20,
        marginRight:0,
        height:20,
        fontSize:18,
    },
    passwordStyle:{
        marginLeft:10,
        marginRight:20,
        marginTop:10,
        height:40,
        width:200,
        color:'#666',
        borderWidth:1,
        borderRadius:4,
    },
    navTitle:{
        fontSize:18,
        textAlign:'center',
        width:width,
    },
    loginBtnStyle:{
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        height:44,
        backgroundColor:'#00f',
        fontSize:20,
        textAlign:'center',
        paddingTop:10,
        color:'#fff',
        borderWidth:1,
        borderRadius:5,
    },
    loginheder: {
        height: 300,
        width:width,
    }
});