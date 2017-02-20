'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    Text,
    View
} from 'react-native';

class HelloWorld extends Component {
    render() {
        return (
            <Text style={styles.welcome}>
            Welcome to React Native!
            </Text>
        );
    }
}

class TracfoneUsage extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Tracfone Usage',
                    component: HelloWorld
                }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        margin: 80,
    }
});

AppRegistry.registerComponent('TracfoneUsage', () => TracfoneUsage);
