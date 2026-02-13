import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { WhatsAppFloating } from '../components/ui/WhatsAppFloating'

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main className="pb-16 pt-[76px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}
