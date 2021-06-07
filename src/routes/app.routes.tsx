import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import {Button} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import {Listagem} from '../pages/Listagem'

const AppStack=createStackNavigator();

export function AppRoutes() {
  const {deslogar}=useContext(AuthContext);

  function handleDeslogar(){
    deslogar()
  }
    return (
      <AppStack.Navigator
       screenOptions={{ headerRight: () => (
        <Button 
          onPress={handleDeslogar}
          title="Deslogar"
          color="#000"
        />
      ),
        headerStyle:{
          backgroundColor:"#483C67",
          
          
        },
        headerTitleStyle:{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 25
        }
    }}
       >
        <AppStack.Screen name="Listagem" component={Listagem} />
      </AppStack.Navigator>
    );
  }