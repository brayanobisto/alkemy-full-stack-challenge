import type { FC } from 'react'

import { Link } from 'react-router-dom'

export const Register: FC = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen p-8">
      <h1 className="mb-4 text-2xl font-bold text-center">Crear cuenta</h1>

      <form className="self-center w-full max-w-sm p-6 mb-2 rounded-md shadow-md bg-slate-200">
        <div className="flex flex-col mb-4">
          <input
            autoComplete="off"
            type="email"
            id="email"
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Email"
          />
          <span className="mt-1 text-rose-600">El email es requerido</span>
        </div>

        <div className="flex flex-col mb-4">
          <input
            autoComplete="off"
            type="password"
            id="password"
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Contraseña"
          />
          <span className="mt-1 text-rose-600">La contraseña es requerida</span>
        </div>

        <div className="flex flex-col mb-4">
          <input
            autoComplete="off"
            type="password"
            id="confirmPassword"
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Confirmar contraseña"
          />
          <span className="mt-1 text-rose-600">La contraseña es requerida</span>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-md text-md hover:bg-blue-700 hover:text-gray-50"
        >
          Registrarse
        </button>
      </form>

      <div className="flex self-center w-full max-w-sm gap-x-1">
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/ingreso" className="text-blue-500 underline hover:text-blue-400">
          Inicia sesión
        </Link>
      </div>
    </div>
  )
}
