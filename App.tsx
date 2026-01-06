import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Performers from './components/Performers';
import CaseStudySection from './components/CaseStudySection';
import NeuralEngine from './components/NeuralEngine';
import ProofSection from './components/ProofSection';
import EcosystemLeaders from './components/EcosystemLeaders';
import CatalystSection from './components/CatalystSection';
import TransformationSection from './components/TransformationSection';
import ProcessSection from './components/ProcessSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-brand-dark selection:bg-brand-green/30 selection:text-white">
      {/* Background Layer */}
      <GridBackground />
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Hero />
          <LogoTicker />
          <Performers />
          <CaseStudySection />
          <NeuralEngine />
          <ProofSection />
          <EcosystemLeaders />
          <CatalystSection />
          <TransformationSection />
          <ProcessSection />
          <CallToActionSection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;