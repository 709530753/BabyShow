/**
 * Created by myxc on 2018/9/14.
 */

import React, { Component } from 'react';
import {Dimensions} from 'react-native';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    AlertIOS,
} from 'react-native';

var {height, width} = Dimensions.get('window');


export default class NavTitleView extends Component {

    constructor(props){
        super(props);
        this.state={
            rightBarBtnItemDisplay:true,
            rightBarBtnItemTitle:this.props.rightBarBtnItemTitle,
            rightBarBtnItemIcon:this.props.rightBarBtnItemIcon

        }
    }

    render(){
        let navTitle = this.props.navTitle;
        let navTitleColor = this.props.navTitleColor;
        let backTitleColor = this.props.backTitleColor;
        let backTitle = this.props.backTitle;
        let backgroundColor = this.props.backgroundColor;
        let iconType = this.props.iconType;

        let rightBarBtnItemDisplay = this.props.rightBarBtnItemDisplay;
        let rightBarBtnItemTitle = this.props.rightBarBtnItemTitle;
        let rightBarBtnItemIcon = this.props.rightBarBtnItemIcon;

        return(
            <View style={styles.navStyle}>
                <TouchableOpacity onPress={this.props.back} activeOpacity={0.9}>

                    <View style={[styles.backViewStyle, backgroundColor=backgroundColor]}>
                        {this._renderBackIcon(iconType)}
                        <Text style={[styles.backStyle, {color: backTitleColor}]}>
                            {backTitle}
                        </Text>
                    </View>

                </TouchableOpacity>

                <Text style={[styles.navTitle,  {color: navTitleColor}]}>
                    {navTitle}
                </Text>
                <TouchableOpacity onPress={this.props.rightBarBtnItemClick}>
                    <View style={ [styles.rightBarBtnItem, {display:rightBarBtnItemDisplay}]}>
                        {/*<Image style={styles.backIconStyle}*/}
                               {/*source={require('../resources/camera.png')}*/}
                        {/*/>*/}
                        <Text style={styles.rightBarBtnTextStyle}>
                            {rightBarBtnItemTitle}
                        </Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }

    _renderBackIcon =(iconType)=> {

        if (iconType == undefined || iconType == null || iconType == 0) {
            return(
                <Image style={styles.backIconStyle}
                       source={require('./../resources/nav_back.png')}
                />
            )
        } else if (iconType == 1) {
            return(
                <Image style={styles.backIconStyle}
                       source={require('./../resources/back_white.png')}
                />
            )
        }

    }

}

const styles = StyleSheet.create({
    navStyle:{
        marginTop:0,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#dddddd',
        height:64,
        width:width,
        justifyContent:'space-between'
    },
    navTitle:{
        flex: 1,
        fontSize:18,
        marginBottom:-15,
        textAlign:"center",
    },
    backViewStyle:{
        marginLeft: 15,
        flexDirection:'row',
        width:80,
    },
    backStyle:{
        marginTop:10,
        fontSize:16,
        textAlign:"left",
        top:5,

    },
    backIconStyle:{
        marginLeft:-10,
        marginTop:15,
        width:20,
        height:20,

    },
    rightBarBtnItem:{
        flexDirection:'row',
        marginRight: 15,
        width:80,
    },
    rightBarBtnTextStyle: {
        textAlign: 'right',
        fontSize:18,
        marginBottom:-15,
        alignSelf:"flex-end",
    }
});