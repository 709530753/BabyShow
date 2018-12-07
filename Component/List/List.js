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
import OCRN from './../RN-OC/OCRN'
import RNOC from './../RN-OC/RNOC'
import RNAlert from './../RN-OC/RNAlert'
import URL from './../common/url'


var {height, width} = Dimensions.get('window');


export default class List extends Component {


    constructor(props){
        super(props)
        console.log("constructor");


        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2,
            }),
        };

    }

    // 在子组件中对父元素props或state的改变进行监听进行相应的操作
    componentWillReceiveProps(nextProps){
        console.log(this.props.detailContent,'this--->>componentWillReceiveProps');
        console.log(nextProps.detailContent,'next--->>componentWillReceiveProps')

    }

    componentWillMount() {
        console.log("componentWillMount1111");
    }

    componentWillUpdate(){
        console.log("componentWillUpdate1111---组件将要更新");

    }

    componentDidMount() {
        console.log("componentDidMount1111");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount1111");
    }


    componentDidMount(){

        console.log("tabbar :" + this.props.isHideTabbar);

       this._loadData()
    }

    _loadData(){

        fetch(URL.list)
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

    _isHideTabbar(isHide) {
        this.props.isHideTabbar(isHide);
    }

    _loadPage(rowData) {
        let {navigator} = this.props;

        if (navigator) {
            this._isHideTabbar(true)
            navigator.push({
                component:Detail,
                params:{
                    rowData:rowData,
                    isHideTabbar:(isHide)=>this._isHideTabbar(isHide)
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
        marginTop:12,
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