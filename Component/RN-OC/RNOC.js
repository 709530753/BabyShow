import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    TouchableHighlight
} from "react-native";

var rnocAlert = NativeModules.RNOC;

export default class RNOC extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight onPress={()=>rnocAlert.show('from react native')}
                                    style={styles.btn}>
                    <Text>showAlert</Text>
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

