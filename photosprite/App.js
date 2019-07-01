import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./components/Home"
import Converter from "./components/Converter"

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Converter: { screen: Converter}
});

const App = createAppContainer(MainNavigator);

export default App;