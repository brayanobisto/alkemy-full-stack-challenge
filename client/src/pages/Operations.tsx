import type { FC } from 'react'
import { useState } from 'react'

import { Navigate } from 'react-router-dom'

import { FullScreenSpinner, Navbar, OperationModal } from '@components'
import { useAuth, useOperations } from '@hooks'

export const Operations: FC = () => {
  const { user } = useAuth()
  const { isLoading, operations } = useOperations()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  if (isLoading || user === undefined) return <FullScreenSpinner />
  if (user === null) return <Navigate to="/ingreso" replace />

  return (
    <div className="min-h-screen">
      <Navbar />

      <OperationModal title="Crear Operación" isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />

      <div className="container mx-auto">
        <div className="flex justify-end p-4 mt-4">
          <button
            onClick={() => setModalIsOpen(true)}
            className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-gray-50"
          >
            Agregar
          </button>
        </div>

        <div className="flex flex-col mt-4">
          {operations.map(operation => (
            <div key={operation.id}>{operation.concept}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
