import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from "../assets/logo_transparent.png"
import nodejs from 'nodejs-mobile-react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: "Home",
    };

    componentWillMount() {
        nodejs.start('main.js');
        nodejs.channel.addListener(
            'message',
            (msg) => {
                alert('From node: ' + msg);
            },
            this
        );
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}/>
                <Button title="Get Started" color="#000000" onPress={() => this.props.navigation.navigate('Uploader')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    logo: {
        width: 300,
        height: 150,
    },
    button: {
        borderRadius: 2,
        backgroundColor: "#000000",
        color: "#FFFFFF",
    }
})
