import type { FC, ReactNode } from 'react'
import { useReducer, useEffect } from 'react'

import toast from 'react-hot-toast'

import { OperationsContext, operationsReducer } from '.'
import type { IOperation, IOperationForm } from '@interfaces'
import { operationsService } from '@services'
import { useAuth } from '@hooks'

interface IOperationFilter {
  type: string
  category: string
}

export interface OperationsState {
  operations: IOperation[]
  filters: IOperationFilter
  isLoading: boolean
  error: string | null
}

const OPERATIONS_INITIAL_STATE: OperationsState = {
  operations: [],
  filters: {
    type: 'all',
    category: 'all',
  },
  isLoading: false,
  error: null,
}

export interface OperationsActions {
  getOperations: () => void
  addOperation: (operation: IOperationForm) => void
  setFilter: (filter: string, value: string) => void
}

interface OperationsProviderProps {
  children: ReactNode
}

export const OperationsProvider: FC<OperationsProviderProps> = ({ children }) => {
  const { user } = useAuth()
  const [state, dispatch] = useReducer(operationsReducer, OPERATIONS_INITIAL_STATE)

  useEffect(() => {
    if (user === undefined || user === null) return

    getOperations().catch(({ response }) => {
      console.log(response)
      const [error] = response.data.errors
      dispatch({ type: '@OPERATIONS/SET_ERROR', payload: error.msg })
      toast.error('No se pudieron cargar las operaciones')
    })
  }, [user])

  // DEFINE THE ACTIONS USING THE DISPATCH FUNCTION HERE
  const getOperations = async (): Promise<void> => {
    dispatch({ type: '@OPERATIONS/SET_IS_LOADING' })
    const operations = await operationsService.getOperations()

    dispatch({ type: '@OPERATIONS/SET', payload: operations })
  }

  const addOperation = (operation: IOperationForm): void => {
    dispatch({ type: '@OPERATIONS/SET_IS_LOADING' })

    operationsService
      .addOperation(operation)
      .then(operation => {
        dispatch({ type: '@OPERATIONS/ADD', payload: operation })
        toast.success('Operación creada correctamente')
      })
      .catch(({ response }) => {
        console.log(response)
        const [error] = response.data.errors
        dispatch({ type: '@OPERATIONS/SET_ERROR', payload: error.msg })
        toast.error('No se pudo guardar la operación')
      })
  }

  const setFilter = (filter: string, value: string): void => {
    dispatch({ type: '@OPERATIONS/SET_FILTER', payload: { [filter]: value } })
  }

  return (
    <OperationsContext.Provider
      value={{
        ...state,
        getOperations,
        addOperation,
        setFilter,
      }}
    >
      {children}
    </OperationsContext.Provider>
  )
}
