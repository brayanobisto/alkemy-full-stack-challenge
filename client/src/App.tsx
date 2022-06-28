import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { Home, Operations, Login, Register } from '@pages'

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operaciones" element={<Operations />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/ingreso" element={<Login />} />
      </Routes>

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  )
}

export default App
