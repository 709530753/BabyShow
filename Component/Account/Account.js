/**
 * Created by myxc on 2018/6/18.
 */


import React, { Component } from 'react';
import NavTitleView from './../List/NavTitleView'
import AccountHeaderView from './AccountHeaderView'
import AccountItem from './AccountItem'
import Login from  './../Login/Login'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    AlertIOS,
    Navigator,
} from 'react-native';

export default class Account extends Component {

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{"title":"钱包","url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"},
                                          {"title":"收藏","url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"},
                                          {"title":"相册","url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"},
                                          {"title":"卡包","url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"},
                                          {"title":"表情","url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"},
                                          {"title":"设置","url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}])
        }
     }


    render(){
        return(
            <View style={styles.container}>
                <NavTitleView
                    navTitle={"我的"}
                    backTitle={""}
                    back={()=>this._back()}/>

                />
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
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component:Login
            })
        }
    }

    _itemClick() {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component:Login
            })
        }
    }

    _renderRow = (rowData)=> {
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