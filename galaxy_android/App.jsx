/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */





import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Root from './components/Root';
import OQToDQForm from './components/OQToDQForm';
import ImageCamera from './components/ImageCamera';
import OQToDQBlower from './components/OQToDQBlower';
import OQToDQReactor from './components/OQToDQReactor';
import OQToDQHeatExchanger from './components/OQToDQHeatExchanger';

function App() {

  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Root} />
        <Stack.Screen name="OQToDQ" component={OQToDQForm} />
        <Stack.Screen name="OQToDQBlower" component={OQToDQBlower} />
        <Stack.Screen name="OQToDQReactor" component={OQToDQReactor} />
        <Stack.Screen name="OQToDQHeatExchanger" component={OQToDQHeatExchanger} />
        <Stack.Screen name="ImageCam" component={ImageCamera}/>
      </Stack.Navigator>
    </NavigationContainer>
    

  )
}



export default App;
