import React from 'react';
import { View, Text, Button } from 'react-native';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    right: 100,
    padding: 100,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },});

const textStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function UserProfile({navigation}) {
  return (
    <View>
      
      <Image
        style={styles.tinyLogo}
        source={require('../assets/I frew up.png')}
      ></Image>
      <Text style = {textStyles.text}>Name = Owen Humphrey</Text>
      <Text style = {textStyles.text}>Age = 31</Text> 
      
    </View>
  );
}