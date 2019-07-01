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
        title: "Home",
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}/>
                <Button title="Get Started" color="#000000" onPress={() => this.props.navigation.navigate('Converter')}/>
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
