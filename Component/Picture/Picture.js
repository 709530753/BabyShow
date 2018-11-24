/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';
import {Dimensions} from 'react-native';

import PictureHeader from './PictureHeader';
import PictureItem from './PictureItem'

/*
* 本地数据加载方法
* */
import JSONData from './package.json'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

var {height, width} = Dimensions.get('window');


export default class Picture extends Component {

    constructor(props) {
        super(props)

        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1:r2)=>r1!==r2,
            }),
        };
    }

    componentDidMount(){
        this._loadData();
    }

    /*
    * 获取数据
    * */
    _loadData(){
        console.log("JSONData : " + JSONData.data);

        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(
                JSONData.data
            )
        })

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navStyle} >
                    <Text style={styles.navTitle}>图片</Text>
                </View>
                <PictureHeader/>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow}  />
            </View>
        )
    }

    _renderRow = (rowData)=> {

        return(
            <PictureItem
                rowData={rowData}
            />
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
        textAlign:'center',
        width:width,
    }
});