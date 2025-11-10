import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Bonuses from './components/Bonuses';
import AboutUs from './components/AboutUs';
import TermsOfUse from './components/TermsOfUse';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  return (
    <div className="min-h-screen bg-[#1a1f2e]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Features language={language} />
      <Bonuses language={language} />
      <AboutUs language={language} />
      <TermsOfUse language={language} />
      <CTASection language={language} />
      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  );
}
