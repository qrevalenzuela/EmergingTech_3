import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputborder}>
        <TextInput
          placeholder="*Email"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
        />
      </View>
      <View style={styles.inputborder}>
        <TextInput
          placeholder="*Password"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { width: 200, borderRadius: 10 }]}
        onPress={() => navigation.navigate('Welcome')}>
      
            <Text style={styles.buttontext}>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.acctext}>
          Don’t have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signtext}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inputtext: {
    fontSize: 13,
    color: '#E9D735',
    paddingBottom: 10,
  },
  inputborder: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 240,
    marginBottom: 50,
  },
  buttontext: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  acctext: {
    marginTop: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  signtext: {
    marginTop: 15,
    fontSize: 15,
    color: '#E9D735',
    fontWeight: 'bold',
  },
});