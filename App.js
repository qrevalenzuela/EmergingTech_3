import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './SignUpScreen';
import HomeScreen from './HomeScreen';
import Welcome from './Welcome';
import NewAccount from './NewAccount';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}