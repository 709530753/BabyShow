/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class XCTabbar extends Component {

    static propTypes = { //有点坑
        // goToPage : React.PropTypes.func, //要跳到哪里
        // activeTab: React.PropTypes.number,//选中的下标
        // tabs: React.PropTypes.array,//tabs的集合!像OC items的数组

        //接下来!我们扩展自定义的属性
        // tabNames:React.PropTypes.array,//文字的名字
        // tabIconNames:React.PropTypes.array,//Item图片的名称
    };

    render() {
        return (
            <View style={styles.tabsStyle}>
                {/*返回一个一个的Item*/}
                {this.props.tabs.map((tab,i)=>this.renderItem(tab,i))}
            </View>
        );
    }

    renderItem(tab,i){
        //判断i是否是当前选中的tab!!
        const color = this.props.activeTab == i? "orange":"black";
        return(
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>this.props.goToPage(i)}
                key={i}
                style={styles.tab}
            >
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]}
                        size={30}
                        color={color}
                    />
                    {/*文字*/}
                    <Text style={{color: color}}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tabsStyle:{
        flexDirection:'row',
        height:50,
    },
    tabItem:{

        alignItems:'center',
    },
    tab:{
        flex:1
    }
});

