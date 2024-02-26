import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement login functionality here
    console.log('Logging in with email:', email, 'and password:', password);
  };

  const handleForgotEmail = () => {
    Alert.alert('Forgot Email', 'Please contact support for assistance with your email.');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Please check your email for instructions on resetting your password.');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/dog picture.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Login to Project Chelsea</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#777"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#777" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={handleForgotEmail}>
          <Text style={styles.forgotButtonText}>Forgot Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={handleForgotPassword}>
          <Text style={styles.forgotButtonText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    width: '100%',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  loginButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  forgotButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
});
