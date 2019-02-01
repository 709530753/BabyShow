/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';

import NavTitleView from './../List/NavTitleView'
import AccountHeaderView from './AccountHeaderView'
import AccountItem from './AccountItem'
import Login from  './../Login/Login'
import URL from '../common/url'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    AlertIOS
} from 'react-native';

import {
    Navigator,
}from 'react-native-deprecated-custom-components';

export default class Account extends Component {

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            shouldUpdate: true

        }
     }

     shouldComponentUpdate(){

        if (this.state.shouldUpdate == true) {
            return true
        }
        return false
     }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");

        this._loadData();
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    /*
    * 请求数据
    * */
    _loadData() {

        let url = URL.mine;

        console.log("URL-------ssssss :" + url);

        fetch(url).then((response) => response.json())
            .then((responseJson) => {
            console.log("responseJson" + JSON.stringify(responseJson));

            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(
                    responseJson
                )
            })

            }).catch((error) =>{
            console.log("error: " + error);
        });

    }

    render(){
        return(
            <View style={styles.container}>
                <AccountHeaderView
                    headerClick={()=>this._loginClick()}
                />
                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow}
                />

            </View>
        )
    }

    _loginClick =()=> {
        this.props.navigator.push({
            component:Login,
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom
        })
    }

    _itemClick() {

        console.log("_itemClick : ");

        // let {navigator} = this.props;
        // if (navigator) {
        //     navigator.push({
        //         component:Login
        //     })
        // }
    }

    _renderRow = (rowData)=> {
        console.log("rowData : " + rowData.url);
        return (
                <AccountItem
                    rowData={rowData}
                    onSelected={()=>this._itemClick()}
                />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});