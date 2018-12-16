
import React, { Component } from 'react'

import {

    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    AlertIOS,

} from 'react-native'

let timeNum = 60;

export default class FindPasswordSecurityCodeView extends Component {

    constructor(props){
        super(props);

        this.state=({
            secondNum: timeNum,
            btnText: '获取验证码'
        })

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
        return(
            <View style={styles.container}>

                <View style={styles.TextInputViewStyle}>
                    <TextInput style={styles.textInputStyle}
                               placeholder={'验证码'}
                               placeholderTextColor={'#f5f5f5'}
                               keyboardType={'number-pad'}
                               autoCapitalize={'none'}
                    />
                    <View style={styles.textInputLineStyle}/>
                </View>

                <TouchableOpacity onPress={()=>this._getSecurityCode()} activeOpacity={0.7}>
                    <View style={styles.textViewStyle}>
                        <Text style={styles.textStyle}>{this.state.btnText}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

    _getSecurityCode =()=> {

        AlertIOS.alert("aaa");
        var secondNum = timeNum;

        this.timer = setInterval(()=>{

            if (secondNum == 0) {
                secondNum == timeNum;

                this.setState({
                    secondNum: secondNum,
                    btnText: "获取验证码"
                });
                this.timer&&clearInterval(this.timer);

            } else  {
                var codeTextValue = secondNum + "s";
                secondNum-=1;
                this.setState({
                    secondNum: secondNum,
                    btnText: codeTextValue
                });
            }

        }, 1000);

    }

}

const styles = StyleSheet.create({

    container: {

        marginTop: 5,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    TextInputViewStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    textInputStyle: {
        marginLeft: 20,
        flex: 1,
        fontSize: 16,
        color: '#fff',
    },
    textInputLineStyle: {
      height: 1,
        backgroundColor: '#fff',
        marginRight: -5,
    },
    textViewStyle: {
        flex: 1,
        width: 120,
        marginLeft: 5,
        marginRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC3561',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
    },


})