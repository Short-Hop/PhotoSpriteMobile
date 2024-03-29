import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import logo from "../assets/logo_transparent.png"

let url = "";

options = {
    title: 'Select Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

// type Props = {};
export default class Uploader extends Component {

    static navigationOptions = {
        title: "Uploader",
    };

    

    uploadImage = () => {
        
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response.uri;

                this.props.navigation.navigate("Converter", {url: source, height: response.height, width: response.width})
            }
        });
    }

    render() {
        return (
            <View>
                <Text>Uploader Page Fam</Text>

                <Button title="Select Image" color="#000000" onPress={this.uploadImage} />
            </View>
        );
    }
}