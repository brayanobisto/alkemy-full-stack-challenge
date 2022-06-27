import type { FC, ReactNode } from 'react'
import { useReducer } from 'react'

import { useNavigate } from 'react-router-dom'

import { AuthContext, authReducer } from './'
import type { IUser } from '@interfaces'
import { authService } from '@services'

export interface AuthState {
  user: IUser | null | undefined
}

const AUTH_INITIAL_STATE: AuthState = {
  user: null,
}

export interface AuthActions {
  register: (email: string, password: string) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  const navigate = useNavigate()

  // TODO: Verify if user is still logged in
  // useEffect(() => {
  //   const token = localStorage.getItem('token') || ''
  //   if (token) {

  //     dispatch({ type: '@AUTH/LOGIN', payload: user })
  //   }
  // }, [])

  // DEFINE THE ACTIONS USING THE DISPATCH FUNCTION HERE
  const register = (email: string, password: string): Promise<void> => {
    return authService.register(email, password).then(user => {
      localStorage.setItem('token', user.token)
      dispatch({ type: '@AUTH/REGISTER', payload: user })
      navigate('/')
    })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
