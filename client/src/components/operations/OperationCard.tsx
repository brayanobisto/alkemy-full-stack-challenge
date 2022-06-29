import type { FC } from 'react'

import type { IOperation } from '@interfaces'

interface Props {
  operation: IOperation
}

export const OperationCard: FC<Props> = ({ operation }) => {
  const className =
    operation.type === 'ingreso'
      ? 'font-mono text-xl font-medium text-right text-green-600'
      : 'font-mono text-xl font-medium text-right text-red-600'

  const amount = operation.type === 'ingreso' ? `+$${operation.amount}` : `-$${operation.amount}`

  return (
    <div className="flex flex-wrap justify-between p-4 rounded-md shadow-sm bg-slate-200">
      <div>
        <h3 className="text-xl font-medium">{operation.concept}</h3>
        <span className="font-mono">{operation.date.toLocaleString()}</span>
      </div>

      <div className="ml-auto">
        <div className={className}>{amount}</div>
        <h4 className="text-right">{operation.category}</h4>
      </div>
    </div>
  )
}
