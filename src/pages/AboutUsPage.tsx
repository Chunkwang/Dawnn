import React from 'react'
import Header from '../components/Header'

interface AboutUsPageProps {
  onAuthClick: (isGuest?: boolean) => void
}

export default function AboutUsPage({ onAuthClick }: AboutUsPageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header onAuthClick={onAuthClick} />
      <div className="container-max py-20">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose prose-invert max-w-3xl">
          <p className="text-xl text-gray-300 mb-6">
            We're building the future of dashboard applications with seamless integration,
            powerful analytics, and an intuitive user experience.
          </p>
          <p className="text-lg text-gray-400">
            Our mission is to empower users with tools that make data-driven decisions simple and effective.
          </p>
        </div>
      </div>
    </div>
  )
}
