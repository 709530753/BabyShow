
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
                             source={require('./../../resources/regist/regist_bg.jpg')}>
                <NavTitleView
                    backTitle={"登录"}
                    navTitle={"注册"}
                    colorIndex={"1"}
                    back={()=> this._back()}
                />
                <RegistContent/>

            </ImageBackground>
        )
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
        backgroundColor: '#f5f5f5'
    }

});