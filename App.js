import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {css} from './assets/css/Css';
import Home from './views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

