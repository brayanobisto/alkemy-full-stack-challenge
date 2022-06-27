import type { FC } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth } from '@hooks'
import { FullScreenSpinner, Navbar, OperationList } from '@components'

export const Home: FC = () => {
  const { user } = useAuth()

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
          <p className="font-mono text-2xl font-semibold">$1000.99</p>
        </div>

        <div className="p-4">
          <h2 className="mb-4 font-semibold">Últimos 10 movimientos</h2>

          {/* Operation List */}
          <OperationList />
        </div>
      </div>
    </div>
  )
}
