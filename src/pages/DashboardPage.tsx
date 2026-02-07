import React from 'react'
import Header from '../components/Header'

interface DashboardPageProps {
  onAuthClick?: (isGuest?: boolean) => void
}

export default function DashboardPage({ onAuthClick }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header onAuthClick={onAuthClick} />
      <div className="container-max py-20">
        <h1 className="text-4xl font-bold mb-12">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold">456</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Growth Rate</h3>
            <p className="text-3xl font-bold text-green-400">+12%</p>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <p className="text-gray-400">No activity yet</p>
        </div>
      </div>
    </div>
  )
}
