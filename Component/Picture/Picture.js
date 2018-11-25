/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';
import {Dimensions} from 'react-native';

import PictureHeader from './PictureHeader';
import PictureItem from './PictureItem';
import Constant from './../common/constant';
import URL from './../common/url';


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
    ScrollView
} from 'react-native';

var {height, width} = Dimensions.get('window');
var currentSelectedIndex = 0;
let headerheigh = 45;

let scrollviewHeigh = height - Constant.height.navHeigh - Constant.height.tabbarHeign - headerheigh;


export default class Picture extends Component {

    constructor(props) {
        super(props)

        this.state={
            currentSelectedIndex:currentSelectedIndex,
            photoAlbum:new ListView.DataSource({
                rowHasChanged:(r1:r2)=>r1!==r2,
            }),
            photograph:new ListView.DataSource({
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

        fetch(URL.picture).then((response) => response.json())
            .then((responseJson) => {
            console.log('responseJson :' + responseJson.data.photograph)

                this.setState({
                    photoAlbum:this.state.photoAlbum.cloneWithRows(
                        responseJson.data.photoAlbum
                    ),
                    photograph:this.state.photograph.cloneWithRows(
                        responseJson.data.photograph
                    )
                })
            }).catch((error) => {
            console.log("error : " + error);
        }) ;

    }



    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navStyle} >
                    <Text style={styles.navTitle}>图片</Text>
                </View>
                <PictureHeader ref="PictureHeader"
                    selectedItemClicked={(index)=>this._selectedItemClicked(index)}
                />
                <ScrollView ref="ScrollView"
                    style={styles.scrollViewStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}
                            pagingEnabled={true}
                            onScrollEndDrag={(e)=>this._onScrollEndDrag(e)}
                            onMomentumScrollEnd={(e)=>this._onAnimationEnd(e)}
                >
                    <View style={styles.photoAlbumStyle}>
                        <ListView dataSource={this.state.photoAlbum}
                                  renderRow={this._renderRow}  />
                    </View>
                    <View style={styles.photographStyle}>
                        <ListView dataSource={this.state.photograph}
                                  renderRow={this._renderRow}  />
                    </View>

                </ScrollView>

            </View>
        )
    }

    _onAnimationEnd = (e) => {
        console.log("_onAnimationEnd " + e.nativeEvent.contentOffset.x);

        let OffsetX = e.nativeEvent.contentOffset.x
        let pageIndex = OffsetX/width;


        let pictureHeader = this.refs.PictureHeader;

        pictureHeader._setState(pageIndex);

    }

    /*
    * 拖动结束
    * */
    _onScrollEndDrag = (e)=> {
        console.log("_onScrollEndDrag" + e.nativeEvent.contentOffset.x);


    }

    _selectedItemClicked = (index) => {
        console.log("_selectedItemClicked " + index);
        currentSelectedIndex = index;
        var scrollView = this.refs.ScrollView;//设置ref属性

        let offsetX = index * width;
        scrollView.scrollTo({x: offsetX, y:0, animated:true});

    };

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
        marginTop:12,
        fontSize:18,
        textAlign:'center',
        width:width,
    },
    scrollViewStyle:{

    },
    photoAlbumStyle:{
        height:scrollviewHeigh,
        width:width,
    },
    photographStyle:{
        height:scrollviewHeigh,
        width:width,
    }


});