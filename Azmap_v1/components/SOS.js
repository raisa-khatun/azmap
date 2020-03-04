import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Button,
  TouchableHighlight
} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import callNumber from './PhoneCall.js';

export default class SOS extends Component {
  render(

  ) {
    return (
      <View style={styles.container}>
      <NavigationEvents onDidFocus={() => console.log('I am triggered')} />
      <TouchableHighlight
              style ={styles.button}>
              <Button onPress={()=>callNumber(4802870343)}
              title="SOS"
              accessibilityLabel="Learn more about this button"
            />
      </TouchableHighlight>
      <TouchableHighlight
            style ={styles.button}>
           <Button
             title="Go to Map"
             onPress={() => this.props.navigation.navigate('Map')}
           />
      </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    button:
        {
            height: 40,
            width:100,
            borderRadius:10,
            //backgroundColor:'red',
            marginLeft :50,
            marginRight:50,
            marginTop :20
        }



});