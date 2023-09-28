import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
        <Image
          source={require('./assets/newsfeed.png')}
          style={styles.backgroundImage}
        />
        <View>
          <Text style={styles.imageText}>Welcome</Text>
        </View>
      
      
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 4, 
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 60,
    resizeMode: 'contain',
    paddingBottom: 110,
  },


  imageText: {
    fontSize: 25,
    color: 'white',
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 30,
    fontWeight: 'bold',
  },
  inputtext: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#E9D735',
    paddingBottom: 20,
    paddingTop: 15,
  },
  inputborder: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 240,
    marginBottom: 25,
  },
  buttonContainer: {
    
    backgroundColor: '#E9D735',
    paddingVertical: 7,
    alignItems: 'center',
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
