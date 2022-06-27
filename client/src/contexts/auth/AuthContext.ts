import { createContext } from 'react'
import { AuthState, AuthActions } from './'

export const AuthContext = createContext(null as unknown as AuthState & AuthActions)
