import type { FC } from 'react'

import { Navigate } from 'react-router-dom'

import { FullScreenSpinner, Navbar, OperationModal, OperationTable } from '@components'
import { useAuth, useOperations } from '@hooks'

export const Operations: FC = () => {
  const { user } = useAuth()
  const { operation, isLoading, operationModalIsOpen, openOperationModal, closeOperationModal } = useOperations()

  if (isLoading || user === undefined) return <FullScreenSpinner />
  if (user === null) return <Navigate to="/ingreso" replace />

  return (
    <div className="min-h-screen">
      <Navbar />

      {operationModalIsOpen && <OperationModal operation={operation} onClose={closeOperationModal} />}

      <div className="container mx-auto">
        <div className="flex justify-end p-4 mt-4">
          <button
            onClick={() => openOperationModal(null)}
            className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-gray-50"
          >
            Añadir
          </button>
        </div>

        {/* TODO: Add table */}
        <OperationTable />
      </div>
    </div>
  )
}
