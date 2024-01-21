import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';

const Body = () => {
  const [inputText, setInputText] = useState('');


  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handlePress = () => {

    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
    
      style={styles.container}
    >
      <View style={{ width: 300 }}>
        <Text style={{ marginRight: 0, marginTop: 100 }}>Name user</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username or email"
          value={inputText}
          onChangeText={handleInputChange}
        />

        <Text style={{ marginRight: 0 }}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={inputText}
          onChangeText={handleInputChange}
        />
        <Text style={{ alignSelf: 'flex-end' }}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#3841e9',
    padding: 10,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    width: 130,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Body;
