import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import { supabase } from './lib/supabaseClient';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FeedbackPage from './pages/FeedbackPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DashboardPage from './pages/DashboardPage';
import MobileApp from './components/mobile/MobileApp';
import AuthModal from './components/AuthModal';

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isGuestLoggedIn, setIsGuestLoggedIn] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        setIsGuestLoggedIn(false); // Reset guest login if real session exists
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setIsGuestLoggedIn(false); // Reset guest login if real session exists
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleAuthClick = (isGuest: boolean = false) => {
    if (isGuest) {
      setIsGuestLoggedIn(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Show dashboard if user has a real session OR is logged in as guest
  const isLoggedIn = session || isGuestLoggedIn;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              isLoggedIn ? (
                isMobile ? <MobileApp /> : <DashboardPage />
              ) : (
                <HomePage onAuthClick={handleAuthClick} />
              )
            } 
          />
          <Route 
            path="/about" 
            element={<AboutUsPage onAuthClick={handleAuthClick} />} 
          />
          <Route 
            path="/feedback" 
            element={<FeedbackPage onAuthClick={handleAuthClick} />} 
          />
          <Route 
            path="/privacy" 
            element={<PrivacyPolicyPage onAuthClick={handleAuthClick} />} 
          />
          <Route 
            path="/terms" 
            element={<TermsOfServicePage onAuthClick={handleAuthClick} />} 
          />
          <Route 
            path="/dashboard" 
            element={
              isLoggedIn ? (
                isMobile ? <MobileApp /> : <DashboardPage />
              ) : (
                <HomePage onAuthClick={handleAuthClick} />
              )
            } 
          />
        </Routes>
        
        {isAuthModalOpen && (
          <AuthModal onClose={handleCloseAuthModal} />
        )}
      </div>
    </Router>
  );
}

export default App;