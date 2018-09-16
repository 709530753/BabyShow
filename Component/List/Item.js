/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


import {Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');


export default class Item extends Component {

    constructor(props){
        super(props);
        this.state={
            rowData:this.props.rowData
        }
    }

    render(){
        let rowData = this.state.rowData;
        return(
        <TouchableOpacity onPress={this.props.onSelect}>
            <View style={styles.cellStatus}>
                <Image style={styles.iconStyle}
                        source={{url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                       // source={{uri:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}}
                />
                <Text style={styles.titleStyle}>
                    {rowData.opId}
                </Text>
                <Text style={styles.descStyle}>
                    {rowData.repairItemName}
                </Text>
            </View>
        </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cellStatus:{
        marginTop:10,
        width:width,
        height:200,
        justifyContent:'center',
        alignItems:'stretch',
        flexDirection:'column'
    },
    iconStyle:{
        marginTop:0,
        width:width,
        height:140,
    },
    titleStyle: {
        paddingLeft:10,
        paddingRight:10,
        height:30,
        textAlign:'left',
        justifyContent:'center',
        paddingTop:5,
        fontSize:20,
    },
    descStyle: {
        paddingLeft:10,
        paddingRight:10,
        height:30,
        textAlign:'left',
        paddingTop:5,
        fontSize:18,
        color:'#999999'
    }


});