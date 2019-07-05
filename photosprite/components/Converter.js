import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from "../assets/logo_transparent.png"
import nodejs from 'nodejs-mobile-react-native';
import ColorPalette from 'react-native-color-palette'
import { TextInput } from 'react-native-gesture-handler';
import DialogInput from 'react-native-dialog-input';

export default class Converter extends Component {

    state = {
        url: "",
        width: 0,
        height: 0,
        colors: ["#000000"],
        dimensions: {},
        ratio: 1
    }

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
        
        this.setState({
            url: this.props.navigation.getParam("url", ""),
            width: this.props.navigation.getParam("width", ""),
            height: this.props.navigation.getParam("height", ""),
            ratio: this.props.navigation.getParam("width", "") / this.props.navigation.getParam("height", ""),
        })
    }

    setWidth = (newWidth) => {
        let newdimensions = {}

            if (newWidth !== "") {

            newdimensions = {
                width: newWidth,
                height: Math.ceil(newWidth / this.state.ratio),
            }
        } else {
            newdimensions = {
                width: "",
                height: 1,
            }
        }
        this.setState({
            width: newdimensions.width,
            height: newdimensions.height
        });
    }

    setHeight = (newHeight) => {
        let newdimensions = {}

        if (newHeight !== "") {

            newdimensions = {
                width: Math.ceil(newHeight * this.state.ratio),
                height: newHeight,
            }
        } else {
            newdimensions = {
                width: 1,
                height: "",
            }
        }
        this.setState({
            width: newdimensions.width,
            height: newdimensions.height
        });
    }

    // setDimensions = (url) => {
    //     let img = new Image();
    //     img.onload = function () {
    //         let height = img.height;
    //         let width = img.width;
    //         let newDimensions = {
    //             width: width,
    //             height: height,
    //             ratio: width / height
    //         }

    //         this.setState({
    //             dimensions: newDimensions
    //         })
    //     }
    //     img.src = url

    //     console.log(this.state.dimensions.height)
    // }

    convertImage = () => {
        console.log("converImage Called")
        nodejs.channel.post("convert", "Hello")
    }

    addColor = (newColor) => {
        if (/^#[0-9A-F]{6}$/i.test(newColor)) {

            if(this.state.colors.filter(color => color === newColor).length > 0) {
                alert("This color is already a part of the palette")
            } else {
                let colorArray = this.state.colors;
                colorArray.push(newColor);
                this.setState({
                    colors: colorArray
                })
            }

        } else {
            alert("Entered value is not a valid hex color")
        }
    }

    render() {

        let bruh = this.props.navigation.getParam("url", "oof")

        console.log(this.state.url);
        return (
            <View style={styles.container}>
                {/* <Text>{this.props.navigation.getParam("url", "whoops")}</Text> */}
                <Button title="Convert" onPress={this.convertImage}/>
                <Image style={{width: 200, height: 200}} source={{ uri: this.props.navigation.getParam("url", "oof")}} />
                <Text>Width</Text>
                <TextInput keyboardType="number-pad" value={this.state.width.toString()} onChangeText={(text) => this.setWidth(text)}/>
                <Text>Height</Text>
                <TextInput keyboardType="number-pad" value={this.state.height.toString()} onChangeText={(text) => this.setHeight(text)}/>
                
                <ColorPalette
                    onChange={color => alert(`Color selected: ${color}`)}
                    defaultColor={'#C0392B'}
                    value={'#C0392B'}
                    colors={this.state.colors}
                    title={""}
                    icon={<></>}
                />

                <DialogInput isDialogVisible={this.state.isDialogVisible}
                    title={"Add Color"}
                    message={"Enter a Hexadecimal Color"}
                    hintInput={"#000000"}
                    submitInput={(inputText) => { this.addColor(inputText) }}
                    closeDialog={() => { this.showDialog(false) }}>
                </DialogInput>
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