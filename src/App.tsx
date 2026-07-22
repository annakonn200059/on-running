import { Suspense } from 'react'
import './App.scss'
import AppRouter from './routes'
import Header from './view/components/header'

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </>
  )
}

export default App
