import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    TouchableHighlight
} from "react-native";

var iOSAlert = NativeModules.RNIOSAlert;

export default class RNAlert extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight onPress={()=>iOSAlert.showAlert('from react native')}
                                    style={styles.btn}>
                    <Text>showAlert</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.btn}
                    onPress={()=> {
                        var date = new Date();
                        iOSAlert.showTime(
                            {
                                time: date.getTime()
                            }
                        )
                    }}>
                    <Text>Time</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    btn: {
        margin: 10
    }
});

