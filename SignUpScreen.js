import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
    <Image
        source={require('./assets/profile.png')}
        style={styles.image}
    />
    <View>
      <Text style={styles.title}>CREATE AN ACCOUNT</Text>
      
    </View>
    <View>
    <Text style={[styles.phrase, { marginBottom: 50 }]}>Don't wait, start finding your lost items - Sign up today!</Text>
    </View>
        <View style={styles.inputborder}>
        <TextInput
          placeholder="*Student Number"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
        />
        </View>
        <View style={styles.inputborder}>
        <TextInput
          placeholder="*TIP Email"
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
        <View style={styles.inputborder}>
        <TextInput
          placeholder="*Confirm Password"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { width: 200, borderRadius: 10 }]}
        onPress={() => navigation.navigate('NewAccount')}>
      
            <Text style={styles.buttontext}>SIGNUP</Text>
      </TouchableOpacity>
      <View>
          <Text style={styles.acctext}>Don’t have an account? {''}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signtext}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394B58',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 30,
    resizeMode: 'contain',
    paddingBottom: 110,
  },
  title: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  phrase: {
    fontSize: 14,
    color: 'white',
    paddingTop: 5,
    alignContent: 'center',
  },
  inputborder:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 240,
    marginBottom: 35,
  },
  inputtext:{
    fontSize: 14,
    fontStyle: 'italic',
    color: '#E9D735',
    paddingBottom: 18  ,
    paddingTop: 10,
  },
  buttonContainer: {
    
    backgroundColor: '#E9D735',
    paddingVertical: 7,
    alignItems: 'center',
  },
  buttontext:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  acctext:{
    marginTop: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  signtext:{
    marginTop: 15,
    fontSize: 15,
    color: '#E9D735',
    fontWeight: 'bold',
  },
});