import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from '@pages'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/ingreso" element={<Login />} />
    </Routes>
  )
}

export default App
