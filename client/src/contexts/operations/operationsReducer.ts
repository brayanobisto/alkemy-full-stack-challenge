import { OperationsState } from './'

import type { IOperation } from '@interfaces'
type OperationsAction =
  | { type: '@OPERATIONS/SET'; payload: IOperation[] }
  | { type: '@OPERATIONS/ADD'; payload: IOperation }
  | { type: '@OPERATIONS/SET_IS_LOADING' }
  | { type: '@OPERATIONS/SET_ERROR'; payload: string }

export const operationsReducer = (state: OperationsState, action: OperationsAction): OperationsState => {
  switch (action.type) {
    case '@OPERATIONS/SET':
      return { ...state, operations: action.payload, error: null, isLoading: false }

    case '@OPERATIONS/ADD':
      return { ...state, operations: [...state.operations, action.payload], error: null, isLoading: false }

    case '@OPERATIONS/SET_IS_LOADING':
      return { ...state, isLoading: true }

    case '@OPERATIONS/SET_ERROR':
      return { ...state, error: action.payload, isLoading: false }

    default:
      return state
  }
}
