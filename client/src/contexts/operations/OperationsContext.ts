import { createContext } from 'react'
import { OperationsState, OperationsActions } from './'

export const OperationsContext = createContext({} as unknown as OperationsState & OperationsActions)
