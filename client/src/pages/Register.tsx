import type { FC } from 'react'
import { useState } from 'react'

import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuth } from '@hooks'
import { authSchema } from '@schemas'
import { FullScreenSpinner } from '@components'

export interface IRegisterForm {
  email: string
  password: string
  confirmPassword: string
}

export const Register: FC = () => {
  const { user, register } = useAuth()
  const [loading, setLoading] = useState(false)

  const {
    register: registerInput,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegisterForm>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(authSchema.register),
  })

  const onSubmit = ({ email, password }: IRegisterForm) => {
    setLoading(true)

    register(email, password)
      .catch(({ response }) => {
        const [error, ...errors] = response.data.errors
        setError(error.param, { type: 'register', message: error.msg }, { shouldFocus: true })

        // TODO:Add errors types
        errors !== undefined &&
          errors.forEach((error: any) => {
            setError(error.param, { type: 'register', message: error.msg })
          })
      })
      .finally(() => setLoading(false))
  }

  if (loading || user === undefined) return <FullScreenSpinner />
  if (user !== null) return <Navigate to="/" replace />

  return (
    <div className="flex flex-col justify-center min-h-screen p-8">
      <h1 className="mb-4 text-2xl font-bold text-center">Crear cuenta</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="self-center w-full max-w-sm p-6 mb-2 rounded-md shadow-md bg-slate-200"
      >
        <div className="flex flex-col mb-4">
          <input
            autoComplete="off"
            type="email"
            {...registerInput('email')}
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Email"
          />
          {errors.email !== undefined && (
            <span className="mt-1 text-xs text-justify text-rose-600">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <input
            autoComplete="off"
            type="password"
            {...registerInput('password')}
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Contraseña"
          />
          {errors.password !== undefined && (
            <span className="mt-1 text-xs text-justify text-rose-600">{errors.password.message}</span>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <input
            autoComplete="off"
            type="password"
            {...registerInput('confirmPassword')}
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Confirmar contraseña"
          />
          {errors.confirmPassword !== undefined && (
            <span className="mt-1 text-xs text-justify text-rose-600">{errors.confirmPassword.message}</span>
          )}
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
