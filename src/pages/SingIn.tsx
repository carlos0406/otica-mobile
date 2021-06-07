import React,{useState,useContext} from 'react';
import {View,Pressable,StyleSheet,TextInput,Text} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';


export function SingIn(){
    const {logado,logar}=useContext(AuthContext);
    const [cpf,setCpf]=useState('')
    const [senha,setSenha]=useState('')
     function handleSingIn(){
        logar(cpf,senha)
    }

    return (

        <View style={styles.container}>
            <Text style={styles.titulo}>Digite Seus dados e acompanhe suas compras</Text>
            <TextInput  placeholderTextColor="#CCC" style={styles.input}
                onChangeText={setCpf}
                value={cpf}
                placeholder="Digite seu CPF aqui"
                keyboardType="numeric"
            />
 
            <TextInput  placeholderTextColor="#CCC" style={styles.input}
                secureTextEntry={true}
                onChangeText={setSenha}
                value={senha}
                placeholder="Digite sua senha aqui"
            />
            <Pressable style={styles.button} onPress={handleSingIn}>
                <Text style={styles.texto}>Fazer Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#2196f3'
     
    },
    input:{
        color:'#000',
        fontSize:20,
        textAlign: 'center',
        padding:15,
        width: '90%',
        backgroundColor: '#fff',
        marginBottom:10,
        borderRadius:10,
        borderBottomColor: '#483C67',
        borderBottomWidth: 1,
        
    },
    texto:{
        fontSize:20,
        color:'#fff'
    },
    button:{
        alignItems: 'center',
        backgroundColor:'#29e34e',
        fontSize:20,
        textAlign: 'center',
        padding:15,
        width: '90%',
        borderRadius:10,
        borderBottomColor: '#483C67',
        borderBottomWidth: 2
    },
    titulo:{
        fontSize:30,
        width: '90%',
        paddingBottom:100,
        fontWeight:'700',
        color: '#fff'
    }
    ,
  });