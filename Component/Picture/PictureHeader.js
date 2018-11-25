
import React, { Component } from 'react';

import {Dimensions} from 'react-native';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';



var { heigh, width } = Dimensions.get('window');
let headerheigh = 45;

var selecedIndex = 0;

export default class PictureHeader extends Component {


    constructor(props){
        super(props)
        this.state = {
            selecedIndex: selecedIndex
        };
    }

    componentDidMount(){

    }

    render(){

        console.log("selecedIndex : " + this.state.selecedIndex);

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => this._titleOnClick(0)}>
                        <Text style={ this.state.selecedIndex == 0 ? styles.textSelectedStyle : styles.textNormalStyle}>照片</Text>
                    </TouchableOpacity>

                    <View style={styles.centerLineView}/>
                    <TouchableOpacity onPress={() => this._titleOnClick(1)}>
                        <Text style={ this.state.selecedIndex == 1 ? styles.textSelectedStyle : styles.textNormalStyle}>相簿</Text>
                    </TouchableOpacity>

                </View>
                <View style={this.state.selecedIndex == 0 ? styles.popBottomNormalLine : styles.popBottomSelextedLine}/>
            </View>
        )
    }

    _setState = (index) => {

        console.log("_setState : " + index);

        this.setState({
            selecedIndex: index
        });
    }

    _titleOnClick = (index) => {

        console.log("index : " + index);
        this.setState({
            selecedIndex: index
        });

        this.props.selectedItemClicked(index);
    }

}

const styles = StyleSheet.create({

    container:{
        width:width,
        height:headerheigh,
        backgroundColor:'#dddddd',
        flexDirection:'column',
    },
    content:{
        backgroundColor:'#fff',
        flexDirection:'row',
        width:width,
        height:headerheigh - 1,
    },
    textNormalStyle:{
        top:0,
        bottom:0,
        width:width/2 - 1,
        height:20,
        top:(headerheigh - 20 - 2)/2,
        textAlign:'center',
        fontSize:16,
    },
    textSelectedStyle:{
    top:0,
        bottom:0,
        width:width/2 - 1,
        height:20,
        top:(headerheigh - 20 - 2)/2,
        textAlign:'center',
        fontSize:16,
        color:'#d4237a',
    },
    centerLineView:{
        top:0,
        bottom:0,
        backgroundColor:'#ddd',
        width:1,
        height:headerheigh - 1,
    },
    popBottomNormalLine:{
        left:0,
        backgroundColor:'#d4237a',
        width:width/2 - 1,
        height:1,
    },
    popBottomSelextedLine:{
        left:width/2 + 1,
        backgroundColor:'#d4237a',
        width:width/2 - 1,
        height:1,
    }

});


