import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./components/Home"
import Uploader from "./components/Uploader"
import Converter from "./components/Converter"

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Uploader: { screen: Uploader},
  Converter: {screen: Converter},
});

const App = createAppContainer(MainNavigator);

export default App;