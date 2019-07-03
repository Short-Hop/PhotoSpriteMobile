import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from "../assets/logo_transparent.png"
import nodejs from 'nodejs-mobile-react-native';

export default class Converter extends Component {

    static navigationOptions = {
        title: "Converter",
    };

    componentWillMount() {
        nodejs.channel.addListener(
            'test',
            (msg) => {
                console.log(msg)
            },
            this
        );
    }

    converImage = () => {
        console.log("converImage Called")
        nodejs.channel.post("convert", "Hello")
    }

    render() {
        console.log(this.props.navigation.getParam("url", "oof"))
        return (
            <View>
                <Text>{this.props.navigation.getParam("url", "whoops")}</Text>
                <Button title="Convert" onPress={this.converImage}/>
            </View>
        );
    }
}