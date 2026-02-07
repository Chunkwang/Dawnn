import React from 'react'
import Header from '../components/Header'

interface PrivacyPolicyPageProps {
  onAuthClick: (isGuest?: boolean) => void
}

export default function PrivacyPolicyPage({ onAuthClick }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header onAuthClick={onAuthClick} />
      <div className="container-max py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-3xl space-y-6">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection</h2>
            <p className="text-gray-300">
              We collect personal information only when you voluntarily provide it to us.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection</h2>
            <p className="text-gray-300">
              Your data is protected with industry-standard security measures and encryption.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-300">
              You have the right to access, modify, or delete your personal information at any time.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
