import { IOperationsState } from './'

import type { IOperation } from '@interfaces'
type OperationsAction =
  | { type: '@OPERATIONS/SET_OPERATIONS'; payload: IOperation[] }
  | { type: '@OPERATIONS/ADD_OPERATION'; payload: IOperation }
  | { type: '@OPERATIONS/SET_FILTER'; payload: { [key: string]: string } }
  | { type: '@OPERATIONS/RESET_FILTERS' }
  | { type: '@OPERATIONS/SET_IS_LOADING' }
  | { type: '@OPERATIONS/SET_ERROR'; payload: string }
  | { type: '@OPERATIONS/RESET_STATE'; payload: IOperationsState }

export const operationsReducer = (state: IOperationsState, action: OperationsAction): IOperationsState => {
  switch (action.type) {
    case '@OPERATIONS/SET_OPERATIONS':
      return { ...state, operations: action.payload, error: null, isLoading: false }

    case '@OPERATIONS/ADD_OPERATION':
      return { ...state, operations: [...state.operations, action.payload], error: null, isLoading: false }

    case '@OPERATIONS/SET_FILTER':
      return { ...state, filters: { ...state.filters, ...action.payload } }

    case '@OPERATIONS/RESET_FILTERS':
      return { ...state, filters: { type: 'all', category: 'all' } }

    case '@OPERATIONS/SET_IS_LOADING':
      return { ...state, isLoading: true }

    case '@OPERATIONS/SET_ERROR':
      return { ...state, error: action.payload, isLoading: false }

    case '@OPERATIONS/RESET_STATE':
      return action.payload

    default:
      return state
  }
}
