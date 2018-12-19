/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules,
    DeviceEventEmitter,
    Modal,
    AlertIOS
} from 'react-native';

import {
    Navigator,
}from 'react-native-deprecated-custom-components';


import XCTabbar from './Component/Tabbar/XCTabbar'
import List from './Component/List/List'
import Edit from './Component/Edit/Edit'
import Picture from  './Component/Picture/Picture'
import Account from './Component/Account/Account'

import Login from './Component/Login/Login'

import ScrollabelTabView ,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'

var notification = NativeModules.notification;

export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            tabNames:['视频','录制','图片','账户'],
            tabIconNames:['ios-videocam-outline','ios-recording',
                'ios-reverse-camera','ios-contact'],
            hiddenTab:false,
            isLogin: false,
        }
    }


    componentDidMount() {
        console.log("componentDidMount App");

    }

    componentWillMount(){
        console.log("componentWillMount App");

    }

    componentDidUpdate(){
        console.log("componentDidUpdate1111---组件更新完毕");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount App");

    };

    _isHideTabbar = (isHide)=> {

        console.log("_isHideTabbar :" + isHide);
        this.setState({
            hiddenTab:isHide
        })

    }

    render() {
        let isLogin = this.state.isLogin;
        // AlertIOS.alert("" + isLogin);

        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        var hiddenTab = this.state.hiddenTab;
        console.log("hiddenTab :" + hiddenTab);
        return (
            <ScrollabelTabView
                renderTabBar={() => <XCTabbar
                    visibility={false}
                    hiddenTab={hiddenTab}
                    tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition={"bottom"}
                scrollWithoutAnimation={true}
                locked={true}
            >
                {/*{this._renderView()}*/}
                <Navigator
                    tabLabel="list"
                    initialRoute={{
                        name:'list',
                        component:List,
                        params:{
                            title:'视频列表',
                            isHideTabbar:(isHide)=>this._isHideTabbar(isHide)
                        }
                    }}
                    renderScene={(route,navigator) =>
                        <route.component {...route.params} navigator={navigator}/>}

                />

                {/*<List tabLabel="list"/>*/}

                <Navigator
                    tabLabel="edit"
                    initialRoute={{
                        name:'edit',
                        component:Edit,
                        params:{
                            title:'编辑',
                            isHideTabbar:(isHide)=>this._isHideTabbar(isHide)
                        }
                    }}
                    renderScene={(route,navigator) =>
                        <route.component {...route.params} navigator={navigator} />}
                />

                {/*<Edit tabLabel="edit"/>*/}
                <Picture tabLabel="picture"/>

                <Navigator
                    tabLabel="account"
                    initialRoute={{
                        name:'account',
                        component:Account,
                        params:{
                            title:'我的',
                            isHideTabbar:(isHide)=>this._isHideTabbar(isHide)
                        }
                    }}
                    renderScene={(route,navigator) =>
                        <route.component {...route.params} navigator={navigator} />}
                />

            </ScrollabelTabView>

        );
    }

    _loginCallBack =(isLogin)=> {

        AlertIOS.alert("isLogin : " + isLogin)

        this.setState({
            isLogin: isLogin
        })

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
