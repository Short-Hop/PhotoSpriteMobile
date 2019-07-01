import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from "../assets/logo_transparent.png"

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

// type Props = {};
export default class Home extends Component {

    static navigationOptions = {
        title: "Converter",
    };

    render() {
        return (
            <View>
                <Text>Converter Page Fam</Text>
            </View>
        );
    }
}