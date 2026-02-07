import React from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

export default function MobileApp() {
  const navigate = useNavigate()
  const [stats, setStats] = React.useState({
    users: 1234,
    sessions: 456,
    growth: 12,
  })

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 p-4">
        <h1 className="text-xl font-bold text-white mb-4">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="w-full btn-secondary text-sm"
        >
          Logout
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
          <h3 className="text-gray-400 text-xs font-medium mb-2">Total Users</h3>
          <p className="text-2xl font-bold">{stats.users.toLocaleString()}</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
          <h3 className="text-gray-400 text-xs font-medium mb-2">Active Sessions</h3>
          <p className="text-2xl font-bold">{stats.sessions.toLocaleString()}</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
          <h3 className="text-gray-400 text-xs font-medium mb-2">Growth Rate</h3>
          <p className="text-2xl font-bold text-green-400">+{stats.growth}%</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 mt-6">
          <h2 className="font-bold mb-3">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
              View Reports
            </button>
            <button className="w-full bg-gray-800 text-white py-2 rounded text-sm hover:bg-gray-700 border border-gray-700">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
