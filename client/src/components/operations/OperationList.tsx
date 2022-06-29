import type { FC } from 'react'

import { OperationCard } from '@components'
import type { IOperation } from '@interfaces'

interface Props {
  operations: IOperation[]
}

export const OperationList: FC<Props> = ({ operations }) => {
  if (operations.length === 0)
    return <h4 className="text-lg font-semibold text-center text-gray-400">No has registrado ninguna operación</h4>

  return (
    <div className="p-4">
      <h2 className="mb-4 font-semibold">Últimas 10 operaciones</h2>

      {/* Operation List */}
      <div className="grid grid-cols-1 gap-2">
        {operations.map(operation => (
          <OperationCard key={operation.id} operation={operation} />
        ))}
      </div>
    </div>
  )
}
