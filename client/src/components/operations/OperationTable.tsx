import type { FC } from 'react'
import { useMemo, useEffect } from 'react'

import { useOperations } from '@hooks'
import { EditIcon, DeleteIcon } from '@components'

export const OperationTable: FC = () => {
  const { operations, filters, setFilter, resetFilters, openOperationModal } = useOperations()
  // const [deleteOperationModalIsOpen, setDeleteOperationModalIsOpen] = useState(false)

  useEffect(() => {
    return resetFilters
  }, [])

  const filteredOperations = useMemo(
    () =>
      operations
        .filter(operation => (filters.type !== 'all' ? operation.type === filters.type : true))
        .filter(operation => (filters.category !== 'all' ? operation.category === filters.category : true)),
    [operations, filters]
  )

  if (operations.length === 0)
    return <h4 className="text-lg font-semibold text-center text-gray-400">No has registrado ninguna operación</h4>

  return (
    <div className="p-4">
      {/* {deleteOperationModalIsOpen && <DeleteOperationModal onClose={deleteOperationModal} />} */}
      <div className="overflow-x-auto rounded-sm shadow-md">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase bg-slate-200">
            <tr>
              <th colSpan={1} role="columheader" className="px-4 py-3 text-left align-top">
                Concepto
              </th>
              <th colSpan={1} role="columheader" className="px-4 py-3 text-right">
                <span className="block">Monto</span>
                <select
                  value={filters.type}
                  onChange={e => setFilter('type', e.target.value)}
                  className="inline-block w-max px-1 py-0.5 mt-1 text-center rounded-lg outline-none bg-gray-50"
                >
                  <option value="all">Todo</option>
                  <option value="ingreso">Ingreso</option>
                  <option value="egreso">Egreso</option>
                </select>
              </th>
              <th colSpan={1} role="columheader" className="px-4 py-3 text-left align-top">
                <span className="block">Categoría</span>
                <select
                  value={filters.category}
                  onChange={e => setFilter('category', e.target.value)}
                  className="inline-block px-1 w-max py-0.5 mt-1 text-center rounded-lg outline-none bg-gray-50"
                >
                  <option value="all">Todo</option>
                  <option value="ahorro">Ahorro</option>
                  <option value="comida">Comida</option>
                  <option value="varios">Varios</option>
                  <option value="ocio">Ocio</option>
                  <option value="salud">Salud</option>
                </select>
              </th>
              <th colSpan={1} role="columheader" className="px-4 py-3 text-left align-top">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOperations.length === 0 ? (
              <tr className="border-t border-gray-500">
                <td colSpan={4} className="p-4">
                  No hay operaciones que concidan con el filtro
                </td>
              </tr>
            ) : (
              filteredOperations.map(operation => {
                const className = operation.type === 'ingreso' ? ' text-green-600' : ' text-red-600'
                const amount = operation.type === 'ingreso' ? `+$${operation.amount}` : `-$${operation.amount}`

                return (
                  <tr key={operation.id} className="border-t border-gray-500">
                    <td role="cell" className="p-4 font-medium text-left whitespace-nowrap">
                      {operation.concept}
                    </td>
                    <td role="cell" className={`p-4 font-medium text-right whitespace-nowrap${className}`}>
                      {amount}
                    </td>
                    <td role="cell" className="p-4 font-medium text-left whitespace-nowrap">
                      {operation.category}
                    </td>
                    <td role="cell" className="flex items-center p-4 font-medium text-left whitespace-nowrap gap-x-4">
                      <button onClick={() => openOperationModal(operation)} type="button">
                        <EditIcon className="fill-gray-800" />
                      </button>

                      <button type="button">
                        <DeleteIcon className="fill-gray-800" />
                      </button>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
