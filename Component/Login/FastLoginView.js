
import React, { Component } from 'react'

import ShareUtil from './../UMModules/js/ShareUtil'

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

     componentDidMount() {
         ShareUtil.auth(0,(code,result,message) =>{
             console.log("code : " + code + " message : " + message );

         });

     }

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


        // ShareUtil.shareboard('sssss','http://dev.umeng.com/images/tab2_1.png','http://www.umeng.com/','title',[0,1,2,3,4,5,6,7,8,9],(code,message) =>{
        //     console.log("code : " + code + " message : " + message );
        // });

        switch(loginType) {
            case 1:

                ShareUtil.share('sssss','http://dev.umeng.com/images/tab2_1.png','http://www.umeng.com/','title',0,(code,message) =>{
                    // this.setState({result:message});
                    console.log("code : " + code + " message : " + message );
                });
                // AlertIOS.alert("QQ登录");
                break;
            case 2:
                ShareUtil.share('sssss','http://dev.umeng.com/images/tab2_1.png','http://www.umeng.com/','title',2,(code,message) =>{
                    console.log("code : " + code + " message : " + message );

                });
                // AlertIOS.alert("wechat登录");
                break;
            case 3:
                ShareUtil.share('sssss','http://dev.umeng.com/images/tab2_1.png','http://www.umeng.com/','title',1,(code,message) =>{
                    console.log("code : " + code + " message : " + message );
                });

                // AlertIOS.alert("weibo登录");
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