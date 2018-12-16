
import React, { Component } from 'react'

import {

    StyleSheet,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    AlertIOS

} from 'react-native'

let timeNum = 60;

export default class GetSecurityCodeView extends Component {

    constructor(props){
        super(props);
        this.state={
            secondNum: timeNum,
            codeTextValue: "获取验证码"
        };
    }


    componentDidMount() {
        this.timer = setTimeout(
            () => { console.log('把一个定时器的引用挂在this上'); },
            500
        );
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render(){

        let codeTextValue = this.state.codeTextValue;

        return(
            <View style={styles.container}>
            <Image style={styles.iconStyle} source={require('./../../resources/regist/password.png')}/>
                <View style={styles.centerLineStyle}/>
                <TextInput style={styles.textInputStyle}
                    placeholder={"验证码"}
                           placeholderTextColor={'#fff'}
                           autoCapitalize={'none'}
                           keyboardType='number-pad'
                />
                <TouchableOpacity onPress={()=>this._getSecurityCodeView()} activeOpacity={0.3}>
                    <View style={styles.getSecurityCodeBtn}>
                        <Text style={styles.getSecurityCodeText}>{codeTextValue}</Text>
                    </View>

                </TouchableOpacity>

            </View>
        )
    }

    _getSecurityCodeView =()=> {

        var secondNum = timeNum;
        // console.log("secondNum " + secondNum);

        this.timer = setInterval(()=>{

            if (secondNum == 0) {
                secondNum == timeNum;

                this.setState({
                    secondNum: secondNum,
                    codeTextValue: "获取验证码"
                });
                this.timer&&clearInterval(this.timer);

            } else  {
                var codeTextValue = secondNum + "s";
                // console.log(codeTextValue);
                secondNum-=1;
                this.setState({
                    secondNum: secondNum,
                    codeTextValue: codeTextValue
                });
            }

        }, 1000);


    }
}

const styles = StyleSheet.create({

    container: {
        height: 60,
        // backgroundColor: '#f00',
        flexDirection: 'row',
        alignItems: 'center',
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
        flex: 1,
        fontSize: 18,
        color: '#fff',
    },
    getSecurityCodeBtn: {
        flex: 1,
        marginRight: 0,
        marginLeft: 0,
        width: 150,
        justifyContent:'center',
        backgroundColor: '#FC3561',
    },
    getSecurityCodeText: {
        textAlign:'center',
        fontSize: 20,
        color: '#fff',

    }


})