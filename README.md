# azmap

Set up android studio properly following the official documentation link: https://reactnative.dev/docs/getting-started

The install the following libraries using npm

npm install react-native-maps --save-exact

npm install @react-native-community/geolocation --save

npm install --save react-native-google-maps-directions

npm install react-navigation --save

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save

Comment line 20 to 22 in file /azmap/Azmap_v1/node_modules/react-native-maps/lib/android/build.gradle (Only if running in macos).

When setup is complete. Create an emulator in android studio.

Then run the below command to launch the app on emulator.

npx react-native run-android

