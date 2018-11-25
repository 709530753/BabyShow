/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';
import {Dimensions} from 'react-native';

import EditItem from './EditItem'
import Transcribe from './Transcribe'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

import editData from './edit.json'

var {height, width} = Dimensions.get('window');


export default class Edit extends Component {

    constructor(props) {
        super(props);

        this.state={
          dataSource:new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!=r2,
          }),
        };
    }

    componentDidMount(){

        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(
                editData.data
            )
        });
    }

    render(){
        return(
            <View style={styles.container}>
                    <View style={styles.navStyle} >
                        <Text style={styles.navTitle}>录制</Text>
                    </View>
                    <ListView
                        contentContainerStyle={styles.listViewStyle}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                    />
            </View>
        )
    }

    _renderRow = (rowData)=> {
        return(
            <EditItem
                rowData={rowData}
                onClickEditItem={(rowData)=>this._onClickEditItem(rowData)}
            />
        )
    }

    _onClickEditItem = (rowData) => {
        console.log("rowData : " + rowData.title);

        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component:Transcribe
            })
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5f5f5'
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
        marginTop:12,
        fontSize:18,
        textAlign:'center',
        width:width,
    },
    listViewStyle:{
        marginTop:height/4,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        backgroundColor:'#E5E7E6'
    }
});