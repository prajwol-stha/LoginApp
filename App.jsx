import { View, Text } from 'react-native'
import React from 'react'
import LoginPage from './screens/LoginPage'
import RegisterPage from './screens/RegisterPage'
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="Register" component={RegisterPage}/>
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App