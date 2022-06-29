import type { FC } from 'react'
import { useMemo } from 'react'

import { useOperations } from '@hooks'

export const OperationTable: FC = () => {
  const { operations, filters, setFilter } = useOperations()

  const filteredOperations = useMemo(
    () =>
      operations
        .filter(operation => (filters.type !== 'all' ? operation.type === filters.type : true))
        .filter(operation => (filters.category !== 'all' ? operation.category === filters.category : true)),
    [operations, filters]
  )

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-lg shadow-md">
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
              filteredOperations.map(operation => (
                <tr key={operation.id} className="border-t border-gray-500">
                  <td role="cell" className="px-6 py-4 font-medium text-left whitespace-nowrap">
                    {operation.concept}
                  </td>
                  <td role="cell" className="px-6 py-4 font-medium text-right whitespace-nowrap">
                    {operation.amount}
                  </td>
                  <td role="cell" className="px-6 py-4 font-medium text-left whitespace-nowrap">
                    {operation.category}
                  </td>
                  <td role="cell" className="px-6 py-4 font-medium text-left whitespace-nowrap">
                    Editar / Eliminar
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
