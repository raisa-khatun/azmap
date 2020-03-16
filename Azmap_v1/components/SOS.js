/*
*@author Raisa
*Feb 03 2020
*/
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
      <TouchableHighlight onPress={()=>callNumber(4802870343)}
              style ={styles.button1}>
              <Text style={{fontSize:15, color:"#fff"}}>SOS</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Map')}
            style ={styles.button2}>
           <Text style={{fontSize:15, color:"#fff"}}>Go To Map
           </Text>
      </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C0C0C0'
    },
    button1:
        {
            width:140,
            borderRadius:1,
            backgroundColor:'#D23232', // red
            borderRadius:5,
            padding:30,
            alignItems:"center",
            marginBottom: 20,
            //borderColor: "#6F0D0D",
            //borderWidth:0


        },
    button2:
        {
            width:140,
            borderRadius:1,
            backgroundColor:'#0066cc', // blue
            borderRadius:5,
            padding:30,
            alignItems:"center",
            //borderColor: "#9A9A0F",
            //borderWidth:0
        },




});