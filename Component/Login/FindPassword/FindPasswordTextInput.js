
import React, { Component } from 'react'

import {

    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    TextInput,

} from 'react-native'

export default class FindPasswordTextInput extends Component {

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.textInputContent}>
                    {this._renderIcon()}
                    <TextInput style={styles.textInputStyle}
                                placeholderTextColor={'#f5f5f5'}
                                placeholder={this.props.placeholder}
                                autoCapitalize={'none'}
                                keyboardType={this.props.keyboardType}
                               secureTextEntry={this.props.secureTextEntry}

                    />
                </View>
                <View style={styles.textInputBottomLine}></View>

            </View>
        )
    }

    _renderIcon =()=> {

        let iconType = this.props.iconType;
        if (iconType == null || iconType == undefined) {
            return(
                <Image style={styles.textInputIcon} source={require('./../../resources/regist/user.png')}/>
            )
        } else if(iconType == 1) {
            return(
                <Image style={styles.textInputIcon} source={require('./../../resources/regist/password.png')}/>
            )
        }

    }

}

const styles = StyleSheet.create({

    container: {
        height: 60,
        flexDirection: 'column',
        // backgroundColor: '#f00',
    },
    textInputContent:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputBottomLine: {
        height: 1,
        backgroundColor: '#fff',
    },
    textInputIcon: {
        marginLeft: 12,
        width: 25,
        height: 25,

    },
    textInputStyle: {

        flex: 1,
        marginLeft: 10,
        color: '#fff',
        fontSize: 16,

    }

})