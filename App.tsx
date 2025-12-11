import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SectionBackground from './components/SectionBackground';
import SectionConcept from './components/SectionConcept';
import SectionIntro from './components/SectionIntro';
import SectionSpots from './components/SectionSpots';
import SectionFuture from './components/SectionFuture';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-nature-200 selection:text-nature-900">
      <Navigation />
      
      <main>
        <Hero />
        <SectionBackground />
        <SectionConcept />
        <SectionIntro />
        <SectionSpots />
        <SectionFuture />
      </main>

      {/* Floating Action Button (Optional, for demo) */}
      <a 
        href="#hero" 
        className="fixed bottom-6 right-6 p-3 bg-nature-600 text-white rounded-full shadow-lg hover:bg-nature-700 transition-all z-40 opacity-80 hover:opacity-100"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
}

export default App;