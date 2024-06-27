/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PermissionsAndroid } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Button,
  Text
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import OQToDQForm from './OQToDQForm';

import { TextInput, Divider, RadioButton } from 'react-native-paper';

const RequestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'This app needs access to your storage to download files.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Storage permission granted');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}




function Root({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = React.useState("");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    RequestStoragePermission();
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',


          },
        ]}>



          <View style={[{ padding: 4 }]}>
            <Button
              onPress={() => navigation.navigate('OQToDQ')}
              title="Operational to Design of PUMP"
              
            />
          </View>

          <View style={[{ padding: 4 }]}>
            <Button
              onPress={() => navigation.navigate('OQToDQReactor')}
              title="Operational to Design of Reactor"
              
            />
          </View>

          <View style={[{ padding: 4 }]}>
            <Button
              onPress={() => navigation.navigate('OQToDQHeatExchanger')}
              title="Operational to Design of Heat Exchanger"
              
            />
          </View>

          <View style={[{ padding: 4 }]}>
            <Button
              onPress={() => navigation.navigate('OQToDQ')}
              title="Operational to Design of Equipment"
              
            />
          </View>

          



          <View style={[{ padding: 4 }]}>
            <Button
              onPress={() => navigation.navigate('OQToDQBlower')}
              title="Operational to Design of BLOWER"
              
            />
          </View>

           










           
        </View>

      </ScrollView>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({

  container: {

    flex: 1,
    padding: 20,
    marginTop: -15,
    marginBottom: -15,
    marginLeft: -10,
    marginRight: -10,
  },
  Gheading: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  GSubheading: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});


export default Root;
