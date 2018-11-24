
import React,{ Component } from 'react';

import {Dimensions} from 'react-native';

var {heigh, width} = Dimensions.get('window');

let itemHeigh = 200;

import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,

} from 'react-native';

export default class PictureItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1:r2)=>r1!=r2,
            }),
            rowData:this.props.rowData
        }
    }

    componentDidMount(){

        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(
                this.props.rowData.images
            )
        })

    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.timeStyle}>{this.state.rowData.time}</Text>
                <ListView

                    contentContainerStyle={styles.listViewStyle}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}/>
            </View>
        )
    }

    _renderRow = (rowData) => {
        console.log("url : " + rowData.url);
        return(
        <View style={styles.itemStyle}>
            <Image style={styles.imageStyle}
                   source={{uri:rowData.url}}
            />
        </View>

        )
    }

}

const styles = StyleSheet.create({

    container:{
        width:width,
        flexDirection:'column'
    },
    timeStyle:{
        paddingLeft:12,
        fontSize:14,
        height:40,
        paddingTop:13,
        backgroundColor:'#f5f5f5'
    },
    itemStyle:{
      width:width/3,
        height:width/3,
    },
    imageStyle:{
      marginTop:10,
        marginLeft:10,
        width:width/3 - 20,
        height:width/3 - 20,
    },
    listViewStyle:{
        // 主轴方向
        flexDirection:'row',
        // 一行显示不下,换一行
        flexWrap:'wrap',
        // 侧轴方向
        alignItems:'center', // 必须设置,否则换行不起作用
    }

});

