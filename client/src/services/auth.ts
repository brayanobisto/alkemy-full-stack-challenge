import axios from 'axios'

import type { IUser } from '@interfaces'

export const register = async (email: string, password: string) => {
  const response = await axios.post<IUser>('/auth/register', { email, password })

  return response.data
}

export const login = async (email: string, password: string) => {
  const response = await axios.post<IUser>('/auth/login', { email, password })

  return response.data
}

export const verifyToken = async (token: string) => {
  const response = await axios.get<IUser>('/auth/verify-token', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
