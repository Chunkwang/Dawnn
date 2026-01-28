// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MobileApp from './components/mobile/MobileApp';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import FeedbackPage from './pages/FeedbackPage';
import AboutUsPage from './pages/AboutUsPage';
// import AuthModal from './components/AuthModal'; // AuthModal is no longer needed globally if auth is bypassed
import useAuthModal from './hooks/useAuthModal'; // Keep if HomePage still uses it

// import { supabase } from './lib/supabaseClient'; // Comment out or remove if not used elsewhere in App.tsx

function App() {
  const [isMobile, setIsMobile] = useState(false);
  // To disable authentication, we force the session to be a truthy value
  // and set loading to false immediately.
  const [session, setSession] = useState<any>({}); // Simulate a logged-in session
  const [loading, setLoading] = useState(false); // Set loading to false immediately

  // The useAuthModal hook is still initialized here, but the AuthModal component
  // itself is removed from global rendering in App.tsx.
  // If HomePage is accessed directly, its internal AuthModal will still function.
  const { isOpen, mode, openLogin, openSignup, close } = useAuthModal();

  useEffect(() => {
    const checkMobile = () => {
      const isMobileWidth = window.innerWidth <= 768;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileWidth || isMobileUA);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // --- Authentication Bypass Start ---
    // Commenting out the original Supabase authentication logic
    // const initializeAuth = async () => {
    //   try {
    //     const { data: { session }, error } = await supabase.auth.getSession();
    //     if (error) {
    //       console.error('Error getting session:', error);
    //     } else {
    //       setSession(session);
    //     }
    //   } catch (error) {
    //     console.error('Failed to initialize auth:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // initializeAuth();

    // const { data: authListener } = supabase.auth.onAuthStateChange(
    //   (event, session) => {
    //     console.log('Auth state changed:', event, session);
    //     setSession(session);
    //     setLoading(false);
    //   }
    // );
    // --- Authentication Bypass End ---

    return () => {
      window.removeEventListener('resize', checkMobile);
      // authListener?.subscription?.unsubscribe(); // Unsubscribe if authListener was active
    };
  }, []);

  // The loading state will now be false from the start, so this block will be skipped.
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage onAuthClick={openSignup} />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage onAuthClick={openSignup} />} />
        <Route path="/feedback" element={<FeedbackPage onAuthClick={openSignup} />} />
        <Route path="/about-us" element={<AboutUsPage onAuthClick={openSignup} />} />
        <Route
          path="/*"
          element={
            // Always render the DashboardPage or MobileApp, bypassing the session check
            isMobile ? <MobileApp /> : <DashboardPage />
          }
        />
      </Routes>
      {/* The global AuthModal is removed as authentication is bypassed.
          If HomePage is accessed directly, it will render its own AuthModal. */}
      {/* <AuthModal
        isOpen={isOpen}
        mode={mode}
        onClose={close}
        onSwitchMode={mode === 'login' ? openSignup : openLogin}
      /> */}
    </Router>
  );
}

export default App;