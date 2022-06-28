import { OperationsState } from './'

import type { IOperation } from '@interfaces'
type OperationsAction = { type: '@OPERATIONS/GET'; payload: IOperation[] } | { type: '@OPERATIONS/ADD'; payload: IOperation }

export const operationsReducer = (state: OperationsState, action: OperationsAction): OperationsState => {
  switch (action.type) {
    case '@OPERATIONS/GET':
      return { ...state, operations: action.payload }

    case '@OPERATIONS/ADD':
      return { ...state, operations: [...state.operations, action.payload] }

    default:
      return state
  }
}
