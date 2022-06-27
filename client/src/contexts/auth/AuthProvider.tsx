import type { FC, ReactNode } from 'react'
import { useReducer, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { AuthContext, authReducer } from './'
import type { IUser } from '@interfaces'
import { authService } from '@services'

export interface AuthState {
  user: IUser | null | undefined
}

const AUTH_INITIAL_STATE: AuthState = {
  user: undefined,
}

export interface AuthActions {
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token') || ''

    if (token === '') return dispatch({ type: '@AUTH/LOGOUT' })

    authService
      .verifyToken(token)
      .then(user => {
        dispatch({ type: '@AUTH/LOGIN', payload: user })
      })
      .catch(() => {
        logout()
      })
  }, [])

  // DEFINE THE ACTIONS USING THE DISPATCH FUNCTION HERE
  const register = (email: string, password: string): Promise<void> => {
    return authService.register(email, password).then(user => {
      localStorage.setItem('token', user.token)
      dispatch({ type: '@AUTH/REGISTER', payload: user })
      navigate('/', { replace: true })
    })
  }

  const login = (email: string, password: string): Promise<void> => {
    return authService.login(email, password).then(user => {
      localStorage.setItem('token', user.token)
      dispatch({ type: '@AUTH/LOGIN', payload: user })
      navigate('/', { replace: true })
    })
  }

  const logout = (): void => {
    localStorage.removeItem('token')

    dispatch({ type: '@AUTH/LOGOUT' })
    navigate('/ingreso', { replace: true })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
