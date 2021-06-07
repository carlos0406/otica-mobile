import React,{ createContext,useState,useEffect } from 'react';
import { ReactNode } from "react-native/node_modules/@types/react";
import {api} from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
interface AuthProviderProps {
    children: ReactNode;
}


interface AuthContextProviderData{
    logado:boolean;
    usuario:object |null;
    logar:(cpf:String,senha:String)=>void;
    deslogar:()=>void;
}
export  const AuthContext =createContext({} as AuthContextProviderData);
export function AuthProvider({children}:AuthProviderProps){
    const [usuario,setUsuario]=useState<object |null>(null)
    useEffect(()=>{
        async function loadStorage(){
           const usuarioStorage= await AsyncStorage.getItem('@ExpoOtica:usuario')
           const tokenStorage= await AsyncStorage.getItem('@ExpoOtica:token')
           if(tokenStorage&&usuarioStorage){
               setUsuario(JSON.parse(usuarioStorage))
           }
        }

        loadStorage()
    },[])
    async function logar(cpf:String,senha:String){
        const response= await api.post('autenticar/usuario',{cpf,senha})
        const {'usuario':usuarioResponse,'token':tokenResponse}=response.data
        if(usuarioResponse){
           setUsuario(usuarioResponse)
           AsyncStorage.setItem('@ExpoOtica:usuario',JSON.stringify(usuarioResponse))
           AsyncStorage.setItem('@ExpoOtica:token',tokenResponse)
        }
    }
    function deslogar(){
        setUsuario(null)
        AsyncStorage.clear()
    }
    return(
        <AuthContext.Provider value={{
            logado:!!usuario
            ,usuario
            ,logar,
            deslogar}}>
            {children}
        </AuthContext.Provider>
    )
}
