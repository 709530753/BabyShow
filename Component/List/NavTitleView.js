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
    TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');


export default class NavTitleView extends Component {

    constructor(props){
        super(props);
        this.state={
            navTitle:this.props.navTitle,
            backTitle:this.props.backTitle
        }
    }

    render(){
        let navTitle = this.props.navTitle;
        let backTitle = this.props.backTitle;

        return(
            <View style={styles.navStyle}>
                <TouchableOpacity onPress={this.props.back}>
                    <Text style={styles.backStyle}>
                        {backTitle}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.navTitle}>
                    {navTitle}
                </Text>
            </View>
        )
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
        justifyContent:'center'
    },
    navTitle:{
    fontSize:18,
        marginBottom:-10,
        textAlign:"center",
        width:width - 80,
    },
    backStyle:{
        fontSize:16,
        textAlign:"left",
        top:5,

    }
});