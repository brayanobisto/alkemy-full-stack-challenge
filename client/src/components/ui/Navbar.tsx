import type { FC } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { LogoutIcon } from '@components'
import { useAuth, useOperations } from '@hooks'

export const Navbar: FC = () => {
  const { pathname } = useLocation()
  const { logout } = useAuth()
  const { resetState } = useOperations()

  const handleLogout = () => {
    logout()
    resetState()
  }

  const isActive = (path: string): string =>
    path === pathname ? 'h-full grid place-content-center px-4 bg-gray-800 text-slate-200' : 'px-4'

  return (
    <nav className="shadow-lg bg-slate-200">
      <ul className="container flex items-center h-12 mx-auto font-medium">
        <li className={isActive('/')}>
          <Link to="/">Inicio</Link>
        </li>

        <li className={isActive('/operaciones')}>
          <Link to="/operaciones">Operaciones</Link>
        </li>

        <li className="px-4 ml-auto">
          <button onClick={handleLogout} type="button">
            <LogoutIcon width={20} height={20} className="fill-gray-800" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
