import type { FC } from 'react'

import { OperationCard } from '@components'

export const OperationList: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <OperationCard />
    </div>
  )
}
