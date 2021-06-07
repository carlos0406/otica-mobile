import React from 'react';
import {SingIn} from '../pages/SingIn'
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack=createStackNavigator();

export function AuthRoutes() {
    return (
      <AuthStack.Navigator  screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={SingIn} />
      </AuthStack.Navigator>
    );
  }

