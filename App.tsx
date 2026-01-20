import React from 'react';
import Hero from './components/Hero';
import UrgencyBar from './components/UrgencyBar';
import Problem from './components/Problem';
import SocialProof from './components/SocialProof';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import RiskReversal from './components/RiskReversal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white font-sans antialiased flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-xl shadow-gray-100/50 min-h-screen">
        <Hero />
        <UrgencyBar />
        <Problem />
        <SocialProof />
        <Solution />
        <Pricing />
        <RiskReversal />
        <Footer />
      </div>
    </main>
  );
};

export default App;