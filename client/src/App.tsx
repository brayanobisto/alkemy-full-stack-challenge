import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from '@pages'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
