import { Suspense, lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import OpenLayout from './componentes/layout/OpenLayout'
const Home = lazy(() => import('./pages/Home'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<OpenLayout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
