import {AuthState} from '../models/auth.model';
import { initialState } from './AuthContext';

export type AuthActions = 
  | { type: 'login' }
  | { type: 'logout' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'setUsername', payload: string }
  


export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
    switch (action.type) {

      case 'login':
        return {
          ...state,
          isLoggedIn: true,
          username: 'not-defined-yet',
        }
        
        case 'logout':
          return initialState
          
        case 'changeFavIcon':
          return {
            ...state,
            favoriteIcon: action.payload
          }

        case 'setUsername':
          return {
            ...state,
            username: action.payload
          }

      default:
        return state;;
    }
};
