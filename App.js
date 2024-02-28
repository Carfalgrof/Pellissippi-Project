import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from './Screens/LoginPage';
import HomePage from './Screens/HomePage';


const App = () => {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
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