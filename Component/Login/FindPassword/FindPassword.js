
import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    AlertIOS,
    TouchableOpacity,
    ImageBackground

} from 'react-native'

import NavTitleView from './../../List/NavTitleView'
import FindPasswordContent from './FindPasswordContent'

export default class FindPassword extends Component {

    render(){
        return(
            <ImageBackground style={styles.container} source={require('./../../resources/regist/regist_bg.jpeg')}>
                <NavTitleView
                    iconType={1}
                    backTitle={"登录"}
                    navTitle={"找回密码"}
                    navTitleColor={"#fff"}
                    backTitleColor={'#fff'}
                    back={()=> this._back()}
                />

                <FindPasswordContent/>

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
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',

    }

})