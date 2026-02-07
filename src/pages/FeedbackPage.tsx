import React, { useState } from 'react'
import Header from '../components/Header'

interface FeedbackPageProps {
  onAuthClick: (isGuest?: boolean) => void
}

export default function FeedbackPage({ onAuthClick }: FeedbackPageProps) {
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFeedback('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header onAuthClick={onAuthClick} />
      <div className="container-max py-20">
        <h1 className="text-4xl font-bold mb-8">Send Us Your Feedback</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us what you think..."
            className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 mb-4"
            rows={8}
            required
          />
          <button type="submit" className="btn-primary">
            Submit Feedback
          </button>
          {submitted && (
            <p className="text-green-400 mt-4">Thank you for your feedback!</p>
          )}
        </form>
      </div>
    </div>
  )
}
