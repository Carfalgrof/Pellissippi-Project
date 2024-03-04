import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
/If you want to add a page to navigation, go the the tabs folder and go to bottomTab.js
/you also don't need to import the page here, just add it to the bottomTab.js file
*/

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
      
      

    </NavigationContainer>
    
  );
}

export default App;