import { useContext } from 'react'

import { OperationsContext } from '@contexts'

export const useOperations = () => {
  const context = useContext(OperationsContext)

  if (context === null) throw new Error('useOperations must be used within a OperationsContext')

  return context
}
