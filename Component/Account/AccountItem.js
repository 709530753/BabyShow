
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

export default class AccountItem extends Component {

    constructor(props){
        super(props);
        this.state={
            rowData:this.props.rowData
        }
    }

    render(){

        let rowData = this.state.rowData;

        return(
        <TouchableOpacity onPress={this.props.onSelected}>
            <View style={styles.container}>
                <Image source={{url:rowData.url}} style={styles.iconStyle}/>
                <Text style={styles.titleStyle}>
                    {rowData.title}
                </Text>

                <Image source={{url:rowData.url}} style={styles.arrowStyle}/>

            </View>
        </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection:'row',
        justifyContent: 'space-between',

        height:80
    },
    iconStyle:{
        width:50,
        height:30,
        left:20,
        top:20,
    },
    titleStyle:{
        top:20,
        left:0,
        height:20,
        fontSize:20,
        width:width - 120
    },
    arrowStyle:{
        width:20,
        height:20,
        right:20,
        top:30,

    }

});