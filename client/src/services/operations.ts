import axios from 'axios'

import type { IOperation, IOperationForm } from '@interfaces'

export const getOperations = async (): Promise<IOperation[]> => {
  const token = localStorage.getItem('token') || ''

  const response = await axios.get('/operations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const addOperation = async (operation: IOperationForm): Promise<IOperation> => {
  const token = localStorage.getItem('token') || ''

  const newOperation = await axios.post('/operations', operation, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return newOperation.data
}

export const updateOperation = async (id: number, operation: IOperationForm): Promise<IOperation> => {
  const token = localStorage.getItem('token') || ''

  const newOperation = await axios.put(`/operations/${id}`, operation, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return newOperation.data
}

export const deleteOperation = async (id: number): Promise<IOperation> => {
  const token = localStorage.getItem('token') || ''

  const newOperation = await axios.delete(`/operations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return newOperation.data
}
