import React from 'react';
import HomePage from '../Screens/HomePage';
import UserProfile from '../Screens/UserProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import LoginPage from '../Screens/LoginPage';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    //<NavigationContainer>
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray'
        }}>
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather 
                        name={'home'}
                        size={25}
                        color={focused ? 'red' : 'black'} />)
            }}/>
            <Tab.Screen name="Profile" component={UserProfile} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather 
                        name={'user'}
                        size={25}
                        color={focused ? 'red' : 'black'} />)
            
            }} />
            <Tab.Screen name ="Login" component={LoginPage} />
        </Tab.Navigator>
    //</NavigationContainer>
  );
}

export default Tabs;