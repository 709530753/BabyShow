import React, { Component }  from 'react';
import { AppRegistry } from 'react-native';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.highScoresTitle}>
                    aaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
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
    highScoresTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scores: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('BabyShow', () => test);
