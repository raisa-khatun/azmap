/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



const App: () => React$Node = () => {

  const [med_centers, setMed]=useState(require('./data/med_centers.json'));
  const [initialPosition, setInitialPosition]=useState({
                                                        latitude: 33.45179,longitude: -112.022179,
                                                        latitudeDelta: 0.9922,
                                                        longitudeDelta: 0.9922});


  const LATITUDE_DELTA = 0.0922
  const LONGITUDE_DELTA = 0.9922


  useEffect(() => {
      Geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
              latitude: lat,
              longitude: long,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,

            }
            setInitialPosition(initialRegion);

          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});



    },[]);


  return (
    <View style={styles.container}>
    <MapView
        style={styles.map}
        initialRegion={initialPosition}

    >
   {med_centers.map(point => {
    console.log(point.latitude);
                       return  <MapView.Marker
                           key={point.id}
                           coordinate={{latitude: parseFloat(point.latitude), longitude:parseFloat(point.longitude)}}
                           title={point.address}
                           snippet={point.opiod}
                           description={point.phone}

                         />
    })}

   </MapView>

   </View>

  );
};

const styles = StyleSheet.create({
   map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }

});

export default App;
