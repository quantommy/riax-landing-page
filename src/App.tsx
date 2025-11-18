import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import AppShell from './pages/AppShell'
import DazaiPage from './pages/DazaiPage'
import AtlasPage from './pages/AtlasPage'
import ScribePage from './pages/ScribePage'
import RiaxPage from './pages/RiaxPage'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'landing'
      setCurrentPage(hash)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'signup' && <SignUpPage />}
      {currentPage === 'signin' && <SignInPage />}
      {currentPage === 'app' && <AppShell />}
      {currentPage === 'dazai' && <DazaiPage />}
      {currentPage === 'atlas' && <AtlasPage />}
      {currentPage === 'scribe' && <ScribePage />}
      {currentPage === 'riax' && <RiaxPage />}
    </>
  )
}

export default App
