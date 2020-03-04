/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @author Raisa
 *
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer, NavigationEvents } from 'react-navigation';

import SOS from './components/SOS';
import Map from './components/Map';


export default class App extends React.Component {
  render(

  ) {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: SOS
  },
  Map: {
    screen: Map
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
