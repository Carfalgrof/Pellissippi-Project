import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Screens/LoginPage';




//const App = () => {
  
//   return (

//     <NavigationContainer>
      
//     <View style={styles.container}>
//       <HomePage />
//     </View>
//     </NavigationContainer>
//   );
//////////////////////// }
/*<Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={UserProfile} />
      </Stack.Navigator>
*/


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Tabs />
      navigation.jumpTo('Login');
      
    </NavigationContainer>
    
  );
}

export default App;