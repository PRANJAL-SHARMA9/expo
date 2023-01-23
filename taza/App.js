import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
import ProfileScreen from './Screen/ProfileScreen';
import NotificationScreen from './Screen/NotificationScreen';
import SearchScreen from './Screen/SearchScreen'; 
import Onboarding from './Screen/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name='Notification' component={NotificationScreen}/>
      <Tab.Screen name='Prfile' component={ProfileScreen}/>
    </Tab.Navigator>
  );
}

function MyStack(){
  return(
  <Stack.Navigator screenOptions={{headerShown:true}} >
    <Stack.Screen options={{headerTitle:"Welcome",headerShown:false}} name='Onboarding' component={Onboarding}/>
    <Stack.Screen options={{headerShown:false}} name="Home" component={MyTabs} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name='Notification' component={NotificationScreen}/>
      <Stack.Screen name='Profile' component={ProfileScreen}/>
      
  </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
