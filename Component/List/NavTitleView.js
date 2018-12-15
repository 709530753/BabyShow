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
        let backTitle = this.props.backTitle;
        let rightBarBtnItemDisplay = this.props.rightBarBtnItemDisplay;
        let rightBarBtnItemTitle = this.props.rightBarBtnItemTitle;
        let rightBarBtnItemIcon = this.props.rightBarBtnItemIcon;
        let colorIndex = this.props.colorIndex;

        let backgroundColor = ''

        // AlertIOS.alert(colorIndex);

        if (colorIndex == 0 || colorIndex == null) {
            backgroundColor: '#dddddd';
        } else if (colorIndex == 1) {
            backgroundColor: null;
        }

        return(
            <View style={styles.navStyle}>
                <TouchableOpacity onPress={this.props.back} activeOpacity={1.0}>

                    <View style={[styles.backViewStyle, backgroundColor=backgroundColor]}>
                        <Image style={styles.backIconStyle}
                               source={require('./../resources/nav_back.png')}
                        />
                        <Text style={styles.backStyle}>
                            {backTitle}
                        </Text>
                    </View>

                </TouchableOpacity>

                <Text style={styles.navTitle}>
                    {navTitle}
                </Text>
                <TouchableOpacity onPress={this.props.rightBarBtnItemClick}>
                    <View style={ [styles.rightBarBtnItem, {display:rightBarBtnItemDisplay}]}>
                        {/*<Image style={styles.backIconStyle}*/}
                               {/*source={require('../resources/camera.png')}*/}
                        {/*/>*/}
                        <Text style={styles.backStyle}>
                            {rightBarBtnItemTitle}
                        </Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    navStyle:{
        marginTop:0,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'#dddddd',
        height:64,
        width:width,
        justifyContent:'center'
    },
    navTitle:{
        fontSize:18,
        marginBottom:-15,
        textAlign:"center",
        width:width - 160,
    },
    backViewStyle:{
        marginLeft:-50,
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
        marginRight:-180,
        flexDirection:'row',
        width:80,
    }
});