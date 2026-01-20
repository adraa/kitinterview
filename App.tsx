import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;