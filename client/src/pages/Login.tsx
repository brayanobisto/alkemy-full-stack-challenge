import type { FC } from 'react'
import { useState } from 'react'

import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuth } from '@hooks'
import { authSchema } from '@schemas'
import { FullScreenSpinner } from '@components'

interface ILoginForm {
  email: string
  password: string
}

export const Login: FC = () => {
  const { user, login } = useAuth()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(authSchema.login),
  })

  const onSubmit = ({ email, password }: ILoginForm) => {
    setLoading(true)

    login(email, password)
      .catch(({ response }) => {
        console.log(response)
        const [error] = response.data.errors
        setError(error.param, { type: 'login', message: error.msg }, { shouldFocus: true })
      })
      .finally(() => setLoading(false))
  }

  if (user === undefined) return <FullScreenSpinner />
  if (user !== null) return <Navigate to="/" replace />

  return (
    <div className="flex flex-col justify-center min-h-screen p-8">
      <h1 className="mb-4 text-2xl font-bold text-center">Iniciar sesión</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="self-center w-full max-w-sm p-6 mb-2 rounded-md shadow-md bg-slate-200"
      >
        <div className="flex flex-col mb-4">
          <input
            autoComplete="off"
            type="email"
            {...register('email')}
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
            {...register('password')}
            className="px-4 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Contraseña"
          />
          {errors.password !== undefined && (
            <span className="mt-1 text-xs text-justify text-rose-600">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white transition-colors duration-200 ease-in bg-blue-600 rounded-md text-md hover:bg-blue-700 hover:text-gray-50"
          disabled={loading}
        >
          Ingresar
        </button>
      </form>

      <div className="flex self-center w-full max-w-sm gap-x-1">
        <p>¿No tienes una cuenta?</p>
        <Link to="/registro" className="text-blue-500 underline hover:text-blue-400">
          Regístrate
        </Link>
      </div>
    </div>
  )
}
