import { View, Text } from 'react-native'
import React ,{useEffect, useState}from 'react'
import LoginPage from './screens/LoginPage'
import RegisterPage from './screens/RegisterPage'
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack=createNativeStackNavigator();

const App = () => {
  const [isLoggedin,setIsLoggedin]=useState('')

  async function getData(){
    const data=await AsyncStorage.getItem('isLoggedin');
    console.log(data,'at app jsx');
    setIsLoggedin(data);
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="Register" component={RegisterPage}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App