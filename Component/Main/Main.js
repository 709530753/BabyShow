
import React , { Component } from 'react'

import {
    StyleSheet,
    View

} from 'react-native'

import {
    Navigator,
}from 'react-native-deprecated-custom-components';

import Login from './../Login/Login'
import Regist from './../Login/Regist/Regist'
import FindPassword from '../Login/FindPassword/FindPassword'

export default class Main extends Component {

    render(){
        return(
            <Navigator
                tabLabel="Login"
                initialRoute={{
                    name:'Login',
                    component:Login,
                    params:{
                        title:'登录'
                    }
                }}
                renderScene={(route,navigator) =>
                    <route.component {...route.params} navigator={navigator}/>}

            />
        )
    }

}