
import React , { Component } from 'react'

import {
    StyleSheet,
    View,
    Modal,
    AlertIOS

} from 'react-native'

import {
    Navigator,
}from 'react-native-deprecated-custom-components';

import Login from './../Login/Login'
import Regist from './../Login/Regist/Regist'
import FindPassword from '../Login/FindPassword/FindPassword'
import TabBar  from './../../App'

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state=({
            isLogin: true
        })
    }

    componentDidMount() {

        this.setState({
            isLogin: false
        })

    }

    render(){

        return(
            <TabBar/>
        )
    }

    _renderView =()=> {
        let isLogin = this.state.isLogin;
        AlertIOS.alert("" + isLogin);
        if (isLogin == false) {
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

}