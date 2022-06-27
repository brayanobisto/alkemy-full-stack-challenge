import { AuthState } from './'
import type { IUser } from '@interfaces'

type AuthAction =
  | { type: '@AUTH/REGISTER'; payload: IUser }
  | { type: '@AUTH/LOGIN'; payload: IUser }
  | { type: '@AUTH/LOGOUT' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case '@AUTH/REGISTER':
      return { ...state, user: action.payload }

    case '@AUTH/LOGIN':
      return { ...state, user: action.payload }

    case '@AUTH/LOGOUT':
      return { ...state, user: null }

    default:
      return state
  }
}
