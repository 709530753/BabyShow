
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    AlertIOS,
    TouchableOpacity,

} from 'react-native'

let {height, width } = Dimensions.get('window');

export default class FastLoginView extends Component {

    render(){
        return(
            <View style={ styles.container }>

                <Text style={styles.testStyle}>-------  其他账号快速登录  -------</Text>
                <View style={ styles.iconsStyle}>
                    <TouchableOpacity onPress={()=>this._fastLoginAction(1)}>
                        <Image style={ styles.iconStyle }
                               source={ require('./../resources/login/QQ.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._fastLoginAction(2)}>
                        <Image style={ styles.iconStyle }
                               source={ require('./../resources/login/wechat.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._fastLoginAction(3)}>
                        <Image style={ styles.iconStyle }
                               source={ require('./../resources/login/weibo.png')}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    _fastLoginAction =(loginType)=> {

        switch(loginType) {
            case 1:
                AlertIOS.alert("QQ登录");
                break;
            case 2:
                AlertIOS.alert("wechat登录");
                break;
            case 3:
                AlertIOS.alert("weibo登录");
                break;
            default: return null;
        }
    }

}

const styles = StyleSheet.create({

    container: {
        marginTop: 70,
        height: 120,
        width: width,
        // backgroundColor: '#fff',
        flexDirection: 'column',
    },
    testStyle: {
        // backgroundColor: '#f00',
        textAlign: 'center',
        fontSize:18,
        color: '#fff'
    },
    iconsStyle: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 40,
        marginRight: 40,
    },
    iconStyle: {
        width: 40,
        height: 40,
    }


});