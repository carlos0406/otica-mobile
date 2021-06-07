import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes/Routes';
import { AuthProvider } from './src/contexts/AuthContext';
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>

        <Routes />

      </NavigationContainer>
    </AuthProvider>
  );
}