import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const accounts = await AsyncStorage.getItem("user");
    if (accounts) {
      const accountArray = JSON.parse(accounts);

      var check = accountArray.find((account) => account.username == username && account.password == password);
      if (check){
        alert("Correct");
        navigation.navigate("Home");
      }else{
        alert("Incorrect");
        return; 
      }
    }
  };

  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={require("../../assets/images/images.jpg")} resizeMode='cover' style={styles.image}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <Icon name="user" size={30} color="black" />
            <TextInput style={styles.input} placeholder=" Enter username or email" onChangeText={(e) => setUsername(e)}/>
          </View>
          
          <View style={styles.iconinput}>
            <Icon name="lock" size={30} color="black" /> 
            <TextInput style={styles.input} placeholder=" Password" secureTextEntry={true} placeholderTextColor={"black"}  onChangeText={(e) => setPassword(e)}/>
          </View>
          <Text style={{ alignSelf: 'flex-end' }}>forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end' }}>You don't have an account yet? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ textAlign: 'center', color: 'red' }}> Register </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
  </View>
</KeyboardAvoidingView>

  
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconinput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'white',
    borderBottomWidth:0.3,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    
    paddingHorizontal: 10,
   
  },
  button: {
    backgroundColor: '#3399FF',
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    width: 300,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  background: {
    flex: 1,

    backgroundColor: 'white',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420
  }
});

export default Login;
