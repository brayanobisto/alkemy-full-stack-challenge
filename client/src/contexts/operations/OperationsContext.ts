import { createContext } from 'react'
import { IOperationsState, IOperationsActions } from './'

export const OperationsContext = createContext({} as unknown as IOperationsState & IOperationsActions)
