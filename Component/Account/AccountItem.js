
import React, { Component } from 'react';

import {Dimensions} from 'react-native';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');

let rowHeigh = 50;

export default class AccountItem extends Component {

    constructor(props){
        super(props);
        this.state={
            rowData:this.props.rowData
        }
    }

    render(){

        let rowData = this.state.rowData;
        console.log("url : " + rowData.url);
        return(
        <TouchableOpacity onPress={this.props.onSelected}>
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Image source={{uri:rowData.url}} style={styles.iconStyle}/>
                    <Text style={styles.titleStyle}>
                        {rowData.title}
                    </Text>
                    <Image source={require('../resources/arrow.png')} style={styles.arrowStyle}/>

                </View>
                <View style={styles.bottomLineStyle}/>
            </View>
        </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection:'column',
        height:rowHeigh
    },
    contentView: {
        flexDirection:'row',
        justifyContent: 'space-between',
        height:rowHeigh - 1
    },
    iconStyle:{
        width:25,
        height:25,
        left:20,
        top:10,
    },
    titleStyle:{
        top:10,
        left:0,
        height:20,
        fontSize:20,
        width:width - 120
    },
    arrowStyle:{
        width:20,
        height:20,
        right:10,
        top:14,

    },
    bottomLineStyle:{
        width:width,
        height:1,
        backgroundColor:'#dddddd',
    }

});