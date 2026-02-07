import React from 'react'

interface HeroSectionProps {
  onAuthClick: (isGuest?: boolean) => void
}

export default function HeroSection({ onAuthClick }: HeroSectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Dashboard,
              <span className="text-blue-500"> Reimagined</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience powerful analytics and seamless integration with all your favorite tools.
              Manage everything from one beautiful interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onAuthClick?.()}
                className="btn-primary text-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => onAuthClick?.(true)}
                className="btn-secondary text-lg"
              >
                Try as Guest
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative w-full aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/20 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
