import type { FC } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { operationSchema } from '@schemas'
import { useOperations } from '@hooks'
import type { IOperationForm } from '@interfaces'

interface Props {
  title: string
  isOpen: boolean
  onClose: () => void
}

export const OperationModal: FC<Props> = ({ title, isOpen, onClose }) => {
  const { addOperation } = useOperations()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IOperationForm>({
    defaultValues: {
      concept: '',
      amount: '' as unknown as number,
      date: '',
      type: '',
      category: '',
    },
    resolver: yupResolver(operationSchema),
  })

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit = (data: IOperationForm) => {
    addOperation(data)
    onClose()
  }

  if (!isOpen) return null

  return (
    // Overlay
    <div onClick={handleClose} className="fixed inset-0 flex flex-col justify-center p-8 bg-gray-900 bg-opacity-50">
      {/* Modal */}
      <div
        onClick={e => e.stopPropagation()}
        className="self-center w-full max-w-sm p-4 overflow-y-auto rounded-lg shadow-lg bg-slate-200"
      >
        {/* Header */}
        <div className="pb-4 border-b border-b-gray-300">
          <h3 className="text-xl font-medium">{title}</h3>
        </div>

        <div className="mt-4">
          {/* Formulario */}
          <form onSubmit={handleSubmit(onSubmit)} id="operationModal">
            <div className="mb-4">
              <label htmlFor="concept" className="block mb-2 font-semibold">
                Concepto
              </label>
              <input
                type="text"
                {...register('concept')}
                id="concept"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                placeholder="Concepto"
              />
              {errors.concept && <span className="mt-1 text-rose-600">{errors.concept.message}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="block mb-2 font-semibold">
                Monto
              </label>
              <input
                type="text"
                {...register('amount')}
                id="amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                placeholder="Monto"
              />
              {errors.amount && <span className="mt-1 text-rose-600">{errors.amount.message}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block mb-2 font-semibold">
                Fecha
              </label>
              <input
                type="date"
                {...register('date')}
                id="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
              />
              {errors.date && <span className="mt-1 text-rose-600">{errors.date.message}</span>}
            </div>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">Tipo</h4>

              <div className="flex items-center justify-between">
                <label htmlFor="ingress" className="flex items-center gap-x-1">
                  <input type="radio" {...register('type')} id="ingress" value="ingreso" className="w-5 h-5" />
                  Ingreso
                </label>

                <label htmlFor="egress" className="flex items-center gap-x-1">
                  <input type="radio" {...register('type')} id="egress" value="egreso" className="w-5 h-5" />
                  Egreso
                </label>
              </div>
              {errors.type && <span className="mt-1 text-rose-600">{errors.type.message}</span>}
            </div>

            <div className="mb-4">
              <select
                {...register('category')}
                id="category"
                className="w-full px-2 py-2 border border-gray-300 rounded-md outline-none"
              >
                <option value="">Seleccione una categoría</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="varios">Varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
              </select>
              {errors.category && <span className="mt-1 text-rose-600">{errors.category.message}</span>}
            </div>
          </form>
        </div>

        <div className="flex justify-between pt-4 border-t border-t-gray-300">
          <button
            onClick={handleClose}
            className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-red-600 rounded-lg hover:bg-red-700 hover:text-gray-50"
          >
            Cancelar
          </button>

          <button
            type="submit"
            form="operationModal"
            className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-gray-50"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}
