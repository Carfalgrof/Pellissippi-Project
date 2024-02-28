import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from './Screens/LoginPage';
import HomePage from './Screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();
const App = () => {
  
  return (

    <NavigationContainer>
      
    <View style={styles.container}>
      <HomePage />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;