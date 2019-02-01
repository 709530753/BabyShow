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
    RefreshControl
} from 'react-native';

import {
    Navigator,
}from 'react-native-deprecated-custom-components';
import Toast, {DURATION} from 'react-native-easy-toast'


import Item from './Item';

import Detail from './Detail';
import OCRN from './../RN-OC/OCRN'
import RNOC from './../RN-OC/RNOC'
import RNAlert from './../RN-OC/RNAlert'
import URL from './../common/url'

import Login from './../Login/Login'
import Loading from './../common/Loading'
import LoadMoreFooter from './../common/LoadMoreFooter'

var {height, width} = Dimensions.get('window');


export default class List extends Component {


    constructor(props){
        super(props)
        console.log("constructor");

        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2,
            }),
            isLogin: false,
            shouldUpdate: true,
            isRefreshing: false,
            isFetching: false,
            isNoMore: false

        };

    }


    shouldComponentUpdate(){
        console.log("shouldComponentUpdate edit")
        return true;
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

        // console.log("tabbar :" + this.props.isHideTabbar);

       this._loadData()
    }

    _onEndReach =()=> {
        this._loadData()
    }

    _onRefresh = () => {

        this.setState({
            isRefreshing:true
        })

        this._loadData()
    }

    _loadData(){
        this.setState({
            isFetching:true
        })
        fetch(URL.list)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                console.log(responseJson.message);

                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(
                        responseJson.data.list
                    ),
                    isRefreshing: false,
                    isFetching:false,
                })


                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){

        let isRefreshing = this.state.isRefreshing;
        let isFetching = this.state.isFetching;

        return(

                    <View style={styles.container}>
                        {/*{this._renderLoginView()}*/}
                        <View style={styles.navStyle} >
                            <Text style={styles.navTitle}>视频列表</Text>
                        </View>

                        {!isFetching &&
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                            renderFooter={this._renderFooter}
                            onEndReached={this._onEndReach}
                            onEndReachedThreshold={-50}//快到底部onEndReachedThreshold像素的时候，调用_onEndReach。
                            refreshControl={
                                <RefreshControl
                                    refreshing={isRefreshing}
                                    onRefresh={this._onRefresh}
                                    colors={['rgb(217, 51, 58)']}
                                />
                            }
                        />
                        }
                        <Loading isShow={isFetching}/>
                        <Toast ref="toast"
                               style={{backgroundColor:'#000000'}}
                               position='bottom'
                               positionValue={100}
                               opacity={0.6}
                               textStyle={{color:'#ffffff'}}
                        />
                    </View>
        )
    }

    _renderFooter =()=>  <LoadMoreFooter isNoMore={this.state.isNoMore}/>

    _renderLoginView =()=> {
        let isLogin = this.state.isLogin;
        // AlertIOS.alert("" + isLogin);
        if (isLogin == false) {
            return(
                <Navigator
                    tabLabel="Login"
                    initialRoute={{
                        name:'Login',
                        component:Login,
                        params:{
                            title:'登录'
                        }
                    }}
                    renderScene={(route,navigator) =>
                        <route.component {...route.params} navigator={navigator}/>}

                />
            )
        } else {

        }
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
        // this.refs.toast.show('网络加载中...');
        this.props.navigator.push({
                component:Detail,
                params:{
                    rowData:rowData,
                }
            })
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
    },
    toastStyle: {

    }
});