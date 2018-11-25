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
} from 'react-native';

import {
    Navigator,
}from 'react-native-deprecated-custom-components';


import XCTabbar from './Component/Tabbar/XCTabbar'
import List from './Component/List/List'
import Edit from './Component/Edit/Edit'
import Picture from  './Component/Picture/Picture'
import Account from './Component/Account/Account'

import ScrollabelTabView ,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'

export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            tabNames:['视频','录制','图片','账户'],
            tabIconNames:['ios-videocam-outline','ios-recording',
                'ios-reverse-camera','ios-contact']
        }
    }

    hiddenTabbar = (hidden)=> {
        this.setState({
            hiddenTab:hidden
        })
}

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollabelTabView
                renderTabBar={() => <XCTabbar ref="tabbar"
                    tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition="bottom"
                scrollWithoutAnimation={true}
                locked={true}
                >
              <Navigator
                  tabLabel="list"
                  initialRoute={{
                      name:'list',
                      component:List,
                      params:{
                          title:'视频列表'
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
                          title:'编辑'
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
                            title:'我的'
                        }
                    }}
                    renderScene={(route,navigator) =>
                        <route.component {...route.params} navigator={navigator} />}
                />


            </ScrollabelTabView>
        );
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
