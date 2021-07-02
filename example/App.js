 import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,PermissionsAndroid} from 'react-native';
  import SecureKeystore from 'react-native-mirrar-sdk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const granted =  PermissionsAndroid.requestMultiple([
  PermissionsAndroid.PERMISSIONS.CAMERA,
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
]);
type Props = {};
export default class App extends Component<Props> {


    componentDidMount() {

    }
  render() {
     const data ="{\"options\":{\"productData\":{\"Earrings\":{\"items\":[\"0079-500x500\",\"0097-500x500\",\"00118-500x500sdfghjk\"],\"type\":\"ear\"},\"Sets\":{\"items\":[\"DSC_0206S\",\"DSC_0204S\"],\"type\":\"set\"}}}\n" +
 "}";

         return (
               <View style={{ flex: 1, padding: 0, }}>
                <SecureKeystore
            data={data}
            uuid=''
             />
           </View>
         );
       }
     }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });