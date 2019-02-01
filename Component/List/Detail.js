/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';
import {Dimensions} from 'react-native';

import {
    Text,
    View,
    StyleSheet,
    WebView,
    Navigator,
    ActivityIndicator
} from 'react-native';

var {height, width} = Dimensions.get('window');
import NavTitleView from './NavTitleView'
import Video from 'react-native-video';

export default class Detail extends Component {

    constructor(props){
        super(props);
        this.state={
            rowData:this.props.rowData
        }
    }
    state = {
        rate: 10,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        controls: false,
        paused: false,
        skin: 'custom',
        isBuffering: false,
    };

    onLoad(data) {
        console.log('On load fired!');
        this.setState({duration: data.duration});
    }


    //即将显示
    componentDidMount(){
        //加载网络数据
        this._loadData();
    }

    _loadData=()=> {
        console.log("detail");
        console.log(this.props.rowData)

    };


    _onLoad =()=> {

        console.log("_onLoad")

    }

    _onError =()=> {

        console.log("_onLoad")

    }

    _onLoadEnd =()=> {

        console.log("_onLoad")

    }

    _onLoadStart =()=> {
        console.log("_onLoadStart")

    }

    _renderLoading =()=> {
        console.log("_renderLoading")
        return(
            <ActivityIndicator/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
            <NavTitleView
                navTitle={"详情"}
                backTitle={"back"}
                back={()=>this._back()}/>
                <WebView
                    source={{uri:'http://www.baidu.com'}}
                    style={styles.webViewStyle}
                    onload={this._onLoad()}
                    onerror={this._onError()}
                    onLoadEnd={this._onLoadEnd()}
                    onLoadStart={this._onLoadStart()}
                    startInLoadingState={true}
                    renderLoading={this._renderLoading}
                />
              {/*<Video*/}
                  {/*source={{uri:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}}*/}
                  {/*style={styles.videoStyle}*/}
                  {/*rate={this.state.rate}*/}
                  {/*paused={this.state.paused}*/}
                  {/*volume={this.state.volume}*/}
                  {/*muted={this.state.muted}*/}
                  {/*resizeMode={this.state.resizeMode}*/}
                  {/*onLoad={this.onLoad}*/}
                  {/*onBuffer={this.onBuffer}*/}
                  {/*onProgress={this.onProgress}*/}
                  {/*onEnd={() => { AlertIOS.alert('Done!') }}*/}
                  {/*repeat={false}*/}
              {/*/>*/}
            </View>
        );
    }

    _back(){
        this.props.navigator.pop();
    }

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF'
    },
    webViewStyle:{
        top:0,
        width:width,
        bottom:0,
    },
    videoStyle:{
        top:0,
        width:width,
        height:200,
        backgroundColor:'#0f0'
    }
});