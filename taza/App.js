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
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarActiveTintColor: 'purple',
      tabBarInActiveTintColor:'gray',
      tabBarShowLabel:false,
      headerShown:false,

  }}>
      <Tab.Screen  name="Home" options={{tabBarIcon:(props)=>  <FontAwesome {...props} size={35} name="home"/>}} component={HomeScreen}  />
      <Tab.Screen name="Search" options={{tabBarIcon:(props)=> <FontAwesome {...props} size={35} name="search"/>}} component={SearchScreen} />
      <Tab.Screen name='Notification'options={{tabBarIcon:(props)=> <Ionicons {...props} name="notifications-circle" size={40}  />}} component={NotificationScreen}/>
      <Tab.Screen name='Prfile'options={{tabBarIcon:(props)=> <FontAwesome {...props} size={35} name="user"/>}} component={ProfileScreen}/>
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
