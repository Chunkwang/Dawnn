import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

interface HomePageProps {
  onAuthClick: (isGuest?: boolean) => void
}

export default function HomePage({ onAuthClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header onAuthClick={onAuthClick} />
      <HeroSection onAuthClick={onAuthClick} />
    </div>
  )
}
