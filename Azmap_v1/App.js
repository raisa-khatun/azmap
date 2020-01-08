/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
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



const App: () => React$Node = () => {

  const [med_centers, setMed]=useState(require('./data/med_centers.json'));

  console.log(med_centers);

  return (
    //<>
    <View style={styles.container}>
    <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.45179,
          longitude: -112.022179,
          latitudeDelta: 0.9922,
          longitudeDelta: 0.9922,
          zoomEnabled:true,

        }}

    >
   {med_centers.map(point => {
    console.log(point.latitude);
                       return  <MapView.Marker
                           key={point.id}
                           coordinate={{latitude: parseFloat(point.latitude), longitude:parseFloat(point.longitude)}}
                           title={point.title}
                           description={point.description}
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
