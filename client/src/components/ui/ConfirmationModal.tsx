import type { FC } from 'react'

interface Props {
  onClose: () => void
  onConfirm: () => void
}

export const ConfirmationModal: FC<Props> = ({ onClose, onConfirm }) => {
  return (
    // Overlay
    <div onClick={onClose} className="fixed inset-0 flex flex-col justify-center p-8 bg-gray-900 bg-opacity-50">
      {/* Modal */}
      <div
        onClick={e => e.stopPropagation()}
        className="self-center w-full max-w-sm p-4 overflow-y-auto rounded-lg shadow-lg bg-slate-200"
      >
        {/* Header */}
        <div className="pb-4 border-b border-b-gray-300">
          <h3 className="text-xl font-medium"></h3>
        </div>

        <div className="my-4">
          <p className="text-xl font-semibold text-center">¿Estás seguro que quieres eliminar esta operación?</p>
        </div>

        <div className="flex justify-between pt-4 border-t border-t-gray-300">
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-red-600 rounded-lg hover:bg-red-700 hover:text-gray-50"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            type="button"
            className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-gray-50"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}
