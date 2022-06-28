import type { FC, ReactNode } from 'react'
import { useReducer } from 'react'

import { OperationsContext, operationsReducer } from '.'
import type { IOperation } from '@interfaces'

export interface OperationsState {
  operations: IOperation[]
}

const OPERATIONS_INITIAL_STATE: OperationsState = {
  operations: [],
}

export interface OperationsActions {
  getOperations: () => void
}

interface OperationsProviderProps {
  children: ReactNode
}

export const OperationsProvider: FC<OperationsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(operationsReducer, OPERATIONS_INITIAL_STATE)

  // DEFINE THE ACTIONS USING THE DISPATCH FUNCTION HERE
  const getOperations = (): void => dispatch({ type: '@OPERATIONS/GET', payload: [] })

  return (
    <OperationsContext.Provider
      value={{
        ...state,
        getOperations,
      }}
    >
      {children}
    </OperationsContext.Provider>
  )
}
