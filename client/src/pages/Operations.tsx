import type { FC } from 'react'
import { Navbar } from '../components/Navbar'

export const Operations: FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Overlay */}
      <div className="fixed inset-0 flex flex-col justify-center p-8 bg-gray-900 bg-opacity-50">
        {/* Modal */}
        <div className="self-center w-full max-w-sm p-4 rounded-lg shadow-lg bg-slate-200">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-medium">Crear Operacion</h3>
          </div>
          <hr className="w-full bg-slate-500" />

          <div className="mt-4">
            {/* Formulario */}
            <form action="#">
              <div className="mb-4">
                <label htmlFor="concept" className="block mb-2 font-semibold">
                  Concepto
                </label>
                <input
                  type="text"
                  name="concept"
                  id="concept"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                  placeholder="Concepto"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="amount" className="block mb-2 font-semibold">
                  Monto
                </label>
                <input
                  type="text"
                  name=""
                  id="amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                  placeholder="Monto"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block mb-2 font-semibold">
                  Fecha
                </label>
                <input
                  type="date"
                  name="date"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                />
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-semibold">Tipo</h4>

                <div className="flex items-center justify-between">
                  <label htmlFor="ingress" className="flex items-center gap-x-1">
                    <input type="radio" name="type" id="ingress" value="ingreso" className="w-5 h-5" />
                    Ingreso
                  </label>

                  <label htmlFor="egress" className="flex items-center gap-x-1">
                    <input type="radio" name="type" id="egress" value="egreso" className="w-5 h-5" />
                    Egreso
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <select
                  name="category"
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
              </div>
            </form>
          </div>

          <hr className="w-full bg-slate-500" />
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-gray-50">
              Guardar
            </button>

            <button className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-red-600 rounded-lg hover:bg-red-700 hover:text-gray-50">
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-end p-4 mt-4">
          <button className="px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-gray-50">
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}
