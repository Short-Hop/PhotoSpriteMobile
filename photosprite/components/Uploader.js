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

    state = {
        imageUrl: "",
    }

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
                const source = { uri: response.uri };

                this.props.navigation.navigate("Converter", {url: source})
            }
        });
    }

    render() {
        return (
            <View>
                <Text>Converter Page Fam</Text>

                <Button title="Select Image" color="#000000" onPress={this.uploadImage} />
                <Image style={{ width: 50, height: 50 }} source={this.state.imageUrl} />
            </View>
        );
    }
}