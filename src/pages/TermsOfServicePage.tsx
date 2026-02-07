import React from 'react'
import Header from '../components/Header'

interface TermsOfServicePageProps {
  onAuthClick: (isGuest?: boolean) => void
}

export default function TermsOfServicePage({ onAuthClick }: TermsOfServicePageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header onAuthClick={onAuthClick} />
      <div className="container-max py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-3xl space-y-6">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">User Responsibilities</h2>
            <p className="text-gray-300">
              Users are responsible for maintaining the confidentiality of their account information and passwords.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-300">
              We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
