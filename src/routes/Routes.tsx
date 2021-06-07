import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AppRoutes } from './app.routes';
import {AuthRoutes} from './auth.routes';
export function Routes(){
    const {logado}=useContext(AuthContext);
    if(!logado){
        return<AuthRoutes/>
    }else{
        return <AppRoutes/>
    }
}