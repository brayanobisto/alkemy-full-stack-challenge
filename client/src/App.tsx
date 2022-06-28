import { Routes, Route } from 'react-router-dom'

import { Home, Operations, Login, Register } from '@pages'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/operaciones" element={<Operations />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/ingreso" element={<Login />} />
    </Routes>
  )
}

export default App
