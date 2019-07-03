import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from "../assets/logo_transparent.png"

export default class Converter extends Component {

    static navigationOptions = {
        title: "Converter",
    };

    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam("url", "whoops").uri}</Text>
            </View>
        );
    }
}