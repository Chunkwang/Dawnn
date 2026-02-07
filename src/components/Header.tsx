import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

interface HeaderProps {
  onAuthClick?: (isGuest?: boolean) => void
}

export default function Header({ onAuthClick }: HeaderProps) {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          Dashboard
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/feedback" className="text-gray-300 hover:text-white transition-colors">
            Feedback
          </Link>
          <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
            Privacy
          </Link>
          <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
            Terms
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => onAuthClick?.(true)}
                className="btn-secondary"
              >
                Guest Login
              </button>
              <button
                onClick={() => onAuthClick?.()}
                className="btn-primary"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
