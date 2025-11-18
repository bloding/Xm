import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TradingStats from './components/TradingStats';
import AppSection from './components/AppSection';
import SecuritySection from './components/SecuritySection';
import TradersSection from './components/TradersSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  return (
    <div className="min-h-screen bg-[#0a0e1a]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <AppSection language={language} />
      <TradingStats language={language} />
      <SecuritySection language={language} />
      <TradersSection language={language} />
      <SupportSection language={language} />
      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  );
}
