import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import AppShell from './pages/AppShell'

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
    </>
  )
}

export default App
