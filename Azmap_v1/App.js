/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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

  var markers = [
    {
      latitude: 33.45179,
      longitude: -112.022179,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];

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
        //annotations={markers}
    >
    <MapView.Marker
                coordinate={{latitude: 33.45179,
                longitude: -112.022179}}
                title={"2770 E Van Buren St.Phoenix, AZ 85008"}
                description={"(602) 273-9999"}
     />
     <MapView.Marker
                    coordinate={{latitude: 33.34047,
                    longitude:-111.68531}}
                    title={"1550 N Stonehedge Dr., Ste. 104 Gilber, AZ 85233"}
                    description={"(480) 962-7922"}
         />
    <MapView.Marker
                    coordinate={{latitude: 33.43589,
                    longitude:-112.07486}}
                    title={"8825 N 23rd Ave., Ste. 100 Phoenix, AZ 85021"}
                    description={"(480) 962-7922"}
    />
    <MapView.Marker
                    coordinate={{latitude: 33.5653,
                    longitude:-112.10766}}
                    title={"8825 N 23rd Ave., Ste. 100 Phoenix, AZ 85021"}
                    description={"(480) 962-7922"}
   />
     </MapView>

    </View>
    /*
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>

    </>
    */
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
  /*
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  map:{
    flex:1
  },
  container:{
    flex:1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  */
});

export default App;
