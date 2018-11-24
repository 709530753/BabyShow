/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';

import {Dimensions} from 'react-native';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    AlertIOS,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';


 import Item from './Item';

import Detail from './Detail';


var {height, width} = Dimensions.get('window');


export default class List extends Component {


    constructor(props){
        super(props)

        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2,
            }),
        };

    }

    componentDidMount(){
       this._loadData()
    }

    _loadData(){

        fetch('http://localhost:9528/json/babyshow/video.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                console.log(responseJson.message);

                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(
                        responseJson.data.list
                    )
                })


                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        return(

                    <View style={styles.container}>
                        <View style={styles.navStyle} >
                            <Text style={styles.navTitle}>视频列表</Text>
                        </View>

                        <ActivityIndicator
                            style={styles.indicatorStyle}
                        />
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />

                    </View>
        )
    }

    _renderIndicator = ()=> {
        return (
            <ActivityIndicator
                style={styles.indicatorStyle}
            />
        );
    }



    _renderRow = (rowData)=> {
        return (
            <Item
                rowData={rowData}
                onSelect={()=>this._loadPage(rowData)}/>
        );
    }

    _loadPage(rowData) {
        let {navigator} = this.props;

        if (navigator) {
            navigator.push({
                component:Detail,
                params:{
                    rowData:rowData
                }
            })
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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
    },
    renderRowStatus:{
        marginTop:10,
        width:width,
        backgroundColor:'white',
        height:200,
        justifyContent:'center',
        alignItems:'center',
    },
    indicatorStyle: {
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
    }
});