import React, { Component } from 'react'
import {Dimensions} from 'react-native';

import {
    AppRegistry,
    View,
    Text,
    NativeModules,
    NativeEventEmitter,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

var CallRNTest = NativeModules.RNIOSLog;
const myNativeEvt = new NativeEventEmitter(CallRNTest);


export default class RNLogCp extends Component {
    render() {
        return (
            <View style={{flex:1 , flexDirection:'row' , justifyContent: 'center', alignItems: 'center'}}>

                <TouchableHighlight onPress={()=>CallRNTest.callMe()}>
                    <Text>ready to be called!</Text>
                </TouchableHighlight>
            </View>
        );
    }

    componentWillMount() {
        this.listener = myNativeEvt.addListener('callRn', this.callRn.bind(this));  //对应了原生端的名字
    }

    componentWillUnmount() {
        this.listener && this.listener.remove();  //记得remove哦
        this.listener = null;
    }

    callRn(data) {//接受原生传过来的数据 data={code:,result:}
        console.warn(data.code, data.result);
       if (data.code == '200') {
           //
           console.log(data.result);
       }
       else {//..真的是未知的错误
           console.warn('err',data.result);
       }
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    btn:{
        backgroundColor:'#f00',
        width:100,
        height:100,
    }

});