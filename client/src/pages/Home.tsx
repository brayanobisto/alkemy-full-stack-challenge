import { FC, useMemo } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth, useOperations } from '@hooks'
import { FullScreenSpinner, Navbar, OperationList } from '@components'

export const Home: FC = () => {
  const { user } = useAuth()
  const { operations } = useOperations()

  const total = useMemo(
    () => operations.reduce((acc, { type, amount }) => acc + (type === 'ingreso' ? amount : -amount), 0),
    [operations]
  )

  const lastTenOperations = useMemo(() => operations.slice(0, 11).reverse(), [operations])

  if (user === undefined) return <FullScreenSpinner />
  if (user === null) return <Navigate to="/ingreso" replace />

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto">
        <div className="p-4 mt-4 text-center">
          <h1 className="mb-2 text-3xl font-bold">Balance actual</h1>
          <p className="font-mono text-2xl font-semibold">{total < 0 ? `-$${Math.abs(total)}` : `$${total}`}</p>
        </div>

        <OperationList operations={lastTenOperations} />
      </div>
    </div>
  )
}
