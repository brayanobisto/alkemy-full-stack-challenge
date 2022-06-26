import { Navbar, OperationList } from '@components'
import type { FC } from 'react'

export const Home: FC = () => {
  return (
    <div className="container min-h-screen mx-auto">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
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
  )
}
