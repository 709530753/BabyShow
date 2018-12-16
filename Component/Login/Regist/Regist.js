
import React, { Component } from 'react';

import {

    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    AlertIOS,
    ImageBackground,

} from 'react-native'

import NavTitleView from './../../List/NavTitleView'
import RegistContent from './RegistContent'

export default class Regist extends Component {

    render(){
        return(
            <ImageBackground style={styles.container}
                             source={require('./../../resources/regist/regist_bg.jpeg')}>
                <NavTitleView
                    iconType={1}
                    backTitle={"登录"}
                    navTitle={"注册"}
                    navTitleColor={"#fff"}
                    backTitleColor={'#fff'}
                    back={()=> this._back()}
                />
                <RegistContent/>

                <TouchableOpacity onPress={()=>this._registAction()} activeOpacity={1.0}>
                    <View style={styles.registBtnView}>
                        <Text style={styles.registTextStyle}>注册</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.bottomViewStyle}>
                    <Text style={styles.bottomTextStyle}>With Bast Wishs!</Text>
                </View>
            </ImageBackground>
        )
    }

    _registAction =()=> {
        AlertIOS.alert("regist");
    }

    _back =()=> {

        let { navigator } = this.props;

        if (navigator) {
            navigator.pop();
        }

    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    registBtnView: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 6,
        backgroundColor: '#3976B1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    registTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    },
    bottomViewStyle: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    bottomTextStyle: {
        marginBottom: 15,
        fontSize: 18,
        color: '#fff',
        // backgroundColor: '#f00',
    }

});