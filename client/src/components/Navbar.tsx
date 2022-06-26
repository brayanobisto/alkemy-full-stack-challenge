import type { FC } from 'react'

import { Link, useLocation } from 'react-router-dom'

export const Navbar: FC = () => {
  const { pathname } = useLocation()

  const isActive = (path: string): string => (path === pathname ? 'p-4 bg-gray-800 text-slate-200' : 'p-4')

  return (
    <nav className="shadow-lg bg-slate-200">
      <ul className="flex font-medium gap-x-4">
        <li className={isActive('/')}>
          <Link to="/">Inicio</Link>
        </li>

        <li className={isActive('/operaciones')}>
          <Link to="/operaciones">Operaciones</Link>
        </li>
      </ul>
    </nav>
  )
}
