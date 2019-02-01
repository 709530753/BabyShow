
import React , { Component } from 'react'

import {
    StyleSheet,
    View,
    Modal,
    AlertIOS

} from 'react-native'

import {
    Navigator
} from 'react-native-deprecated-custom-components';

import Login from './../Login/Login'
import TabBar  from './../../App'

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state=({
            isLogin: true
        })
    }

    componentDidMount() {

    }

    configureScene = route => {
        if (route.sceneConfig) return route.sceneConfig

        return {
            ...Navigator.SceneConfigs.PushFromRight,
            // gestures: {}    // 禁用左滑返回手势
        }
    }

    render(){

        return(
            <View style={styles.container}>
                {this._renderView()}
            </View>
        )
    }

    _renderView =()=> {
        let isLogin = this.state.isLogin;
        // AlertIOS.alert("" + isLogin);
        if (isLogin) {
            return(
            <Navigator
                initialRoute={{
                    component: TabBar
                }}
                renderScene={(route,navigator) =>
                    <route.component {...route.params} navigator={navigator} />}
                configureScene={this.configureScene}

            />
            )
        } else {
            return(
                <Navigator
                    initialRoute={{
                        component: Login,
                        params:{
                            name:"登录",
                            title:"登录",
                            login: (isLogin)=>this.setState({
                                isLogin: isLogin
                            })
                        }
                    }}
                    renderScene={(route,navigator) =>
                        <route.component {...route.params} navigator={navigator} />}

                    configureScene={() =>
                        Navigator.SceneConfigs.FloatFromBottom
                    }

                />

            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})