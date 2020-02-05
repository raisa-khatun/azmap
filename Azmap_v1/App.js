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
  Button
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
import MapViewDirections from 'react-native-maps-directions';



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
  const [pointIncreasing, setpointIncreasing]=useState([{latitude:33.45179,longitude:-112.022179}]);
  const [nearestTime, setNearestTime]=useState(0);


  const window = Dimensions.get('window');
  const { width, height }  = window
  const LATITUDE_DELTA = 0.0030;
  const LONGITUDE_DELTA=LATITUDE_DELTA + (width / height);

  useEffect(() => {
      Geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            //console.log("lat:",lat);
            //console.log("long:",long);
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
        //minZoomLevel={11}
        showsUserLocation={true}
        zoomEnabled={true}

    >


   {med_centers.map(point => {
        if(point.latitude== pointIncreasing[0].latitude&&point.longitude==pointIncreasing[0].longitude)
        return <Marker
                             key={point.id}
                             coordinate={{latitude: parseFloat(point.latitude), longitude:parseFloat(point.longitude)}}
                             onCalloutPress={() => {}}>
                             <Callout style={styles.callout1} tooltip={true}>
                                 <View style={styles.view1}>
                                     <Text style={styles.calloutTitle}>{point.address}</Text>
                                     <Text style={styles.calloutDescription}>ETA: {nearestTime.toFixed(2)} min</Text>
                                     <Text style={styles.calloutDescription}>{point.phone}</Text>
                                     <Text style={styles.calloutDescription}>{point.website}</Text>

                                 </View>
                                 <View style={styles.view2}>
                                     <Text style={styles.calloutDescription}>opiod:{point.opiod}</Text>
                                 </View>

                             </Callout>

                           </Marker>
        else
            return <Marker style={styles.m1}
                        key={point.id}
                        coordinate={{latitude: parseFloat(point.latitude), longitude:parseFloat(point.longitude)}}
                        onCalloutPress={() => {}}>
                        <Callout style={styles.callout1}  tooltip={true}>

                                <View style={styles.view1}>
                                    <Text style={styles.calloutTitle}>{point.address}</Text>
                                    <Text style={styles.calloutDescription}>{point.phone}</Text>
                                    <Text style={styles.calloutDescription}>{point.website}</Text>

                                </View>
                                <View style={styles.view2}>
                                    <Text style={styles.calloutDescription}>opiod:{point.opiod}</Text>
                                </View>

                        </Callout>

                      </Marker>

    })}
    <MapViewDirections
        origin={{latitude: currentLat, longitude:currentLong}}
        destination={{latitude: pointIncreasing[0].latitude, longitude:pointIncreasing[0].longitude}}
        apikey={"AIzaSyCRmPE7agQP1spEtXzM5zl7VB-oRj6t1E0"}
        strokeWidth={4}
        strokeColor="green"
        tappable={true}
        onReady={result => {
            console.log("Duration:",result.duration,"min");
            setNearestTime(result.duration);

            }}

      />

   </MapView>
    <View style={styles.buttonView}>
        <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            //onPress={() => this._handlePress()}
            title="Press Me"
        >Press me
        </Button>
     </View>
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
            fontSize: 14,
            fontWeight: "bold"
        },
    calloutDescription: {
        fontSize: 14, fontWeight: "bold"
    },
    buttonView:{
         position: 'absolute', top: 25, right: 25
    },
    m1:{

    },
    callout1:{
        flex:1,flexDirection: 'row',borderWidthLeft:3,borderRadius:10, overflow:'hidden'
    },
    view1:{
        width:"50%", height:100, padding: 5, alignSelf:'flex-start', backgroundColor:'blue'
    },
    view2:{
        width:"50%", height:100, padding: 5, alignSelf:'flex-end', backgroundColor:'green'
    },
    marker1:{
       marginLeft:0,padding:0, borderRadius:10
    }

});

export default App;
