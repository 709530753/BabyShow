
import React,{ Component } from 'react';

import { Dimensions } from 'react-native';

import URL from './../common/url'

import {

    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity

} from 'react-native'

var {heigh, width} = Dimensions.get('window');

export default class EditItem extends Component {

    constructor(props){
        super(props)

        this.state={
            rowData:this.props.rowData
        }

    }

    render(){
        let rowData = this.state.rowData;
        return(
        <TouchableOpacity onPress={()=>this.props.onClickEditItem(rowData)}>
            <View style={styles.itemStyle}>
                <Image style={styles.iconStyle}
                       source={{url: URL.endpoint + rowData.icon}}
                />
                <Text style={styles.titleStyle}>{rowData.title}</Text>
            </View>
        </TouchableOpacity>

        )
    }

}

const styles=StyleSheet.create({
    itemStyle:{
        width:width/3,
        height:width/3,
        justifyContent:'center',
    },
    iconStyle:{

        marginLeft:(width/3 - 60)/2,
        marginTop:10,
        width:60,
        height:60,
    },
    titleStyle:{
        marginTop:15,
        textAlign:'center',
        width:width/3,
        fontSize:14,
    }

});