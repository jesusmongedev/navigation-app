import React, {createContext, useReducer} from 'react';
import {AuthState, AuthContextProps, ChildrenProps} from '../models/auth.model';
import {authReducer} from './authReducer';

export const initialState: AuthState = {
  isLoggedIn: false,
};

// Create Context
export const AuthContext = createContext({} as AuthContextProps);


// Provider
export const AuthProvider = ({children}: ChildrenProps) => {
  
  // Reducer
  const [ authState, dispatch ] = useReducer( authReducer, initialState );

  
  const login = () => { dispatch({ type: 'login' })}
  const logout = () => { dispatch({ type: 'logout' })}
  const changeFavIcon = ( iconName: string ) => { dispatch({ type: 'changeFavIcon', payload: iconName })}
  const setUsername = ( userName: string ) => { dispatch({ type: 'setUsername', payload: userName })}

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
        changeFavIcon,
        setUsername
      }}>
      {children}
    </AuthContext.Provider>
  );
};
