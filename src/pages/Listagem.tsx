import React, { useContext } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
export function Listagem(){
  const {usuario}=useContext(AuthContext);
    return (
        <View style={styles.container}>
           <Text>
           {JSON.stringify(usuario)}
          </Text> 
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#2196f3'
     
    }
})