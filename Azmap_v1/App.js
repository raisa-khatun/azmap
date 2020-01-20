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
import {Callout, Marker} from 'react-native-maps';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { orderByDistance } from 'geolib';



const App: () => React$Node = () => {

  const [med_centers, setMed]=useState(require('./data/med_centers.json'));
  const [initialPosition, setInitialPosition]=useState({
                                                        latitude: 0,longitude: 0,
                                                        latitudeDelta: 0.0009,
                                                        longitudeDelta: 0.0009,
                                                        zoomEnabled:true});
  const [currentLat, setCurrentLat]=useState(33.45179);
  const [currentLong, setCurrentLong]=useState(-112.022179);
  const [selectedPoint, setSelectedPoint]=useState(null);
  const [pointIncreasing, setpointIncreasing]=useState(null);

  const window = Dimensions.get('window');
  const { width, height }  = window
  const LATITUDE_DELTA = 0.0030;
  const LONGITUDE_DELTA=LATITUDE_DELTA + (width / height);

  useEffect(() => {
      Geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            console.log("lat:",lat);
            console.log("long:",long);
            var initialRegion = {
              latitude: lat,
              longitude: long,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
              zoomEnabled:true
            }
            setInitialPosition(initialRegion);
            setCurrentLat(lat);
            setCurrentLong(long);

            /*getting points according to their distances distance*/
            var list_of_points=[];
            med_centers.map(point => {
            list_of_points.push({ latitude: parseFloat(point.latitude), longitude:parseFloat(point.longitude) });
            })
            setpointIncreasing(orderByDistance({ latitude: lat, longitude: long},list_of_points));

          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});


    },[]);


  return (
    <View style={styles.container}>
    <MapView
        style={styles.map}
        initialRegion={initialPosition}
        minZoomLevel={12}
        showsUserLocation={true}

    >
   <Marker
       coordinate={{latitude: currentLat, longitude:currentLong}}
       title={"My location"}
       //image={require('./data/map-marker.png')}

    />
   {med_centers.map(point => {
    //console.log(point.id);
                       return  <Marker
                           key={point.id}
                           coordinate={{latitude: parseFloat(point.latitude), longitude:parseFloat(point.longitude)}}
                           onCalloutPress={() => {console.log("callout press")}}>
                           <Callout>
                                       <View>
                                           <Text style={styles.calloutTitle}>{point.address}</Text>
                                           <Text style={styles.calloutDescription}>{point.phone}</Text>
                                           <Text style={styles.calloutDescription}>opiod: {point.opiod}</Text>
                                           <Text style={styles.calloutDescription}>{point.website}</Text>
                                       </View>
                           </Callout>

                        </Marker>


    })}
    {console.log(pointIncreasing)}




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
    },
    calloutTitle: {
            fontSize: 17,
            marginBottom: 5,
            fontWeight: "bold"
        },
    calloutDescription: {
        fontSize: 14
    }

});

export default App;
