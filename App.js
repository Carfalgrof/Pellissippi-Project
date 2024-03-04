import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from './Screens/LoginPage';
import HomePage from './Screens/HomePage';
import UserProfile from './Screens/UserProfile';
import SearchPage from './Screens/SearchPage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Tab = createBottomTabNavigator();
//const App = () => {
  
//   return (

//     <NavigationContainer>
      
//     <View style={styles.container}>
//       <HomePage />
//     </View>
//     </NavigationContainer>
//   );
// }



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={UserProfile} />
        <Stack.Screen name="Search" component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;