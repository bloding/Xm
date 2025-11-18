import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TradingStats from './components/TradingStats';
import AppSection from './components/AppSection';
import SecuritySection from './components/SecuritySection';
import TradersSection from './components/TradersSection';
import SupportSection from './components/SupportSection';
import RegulationBanner from './components/RegulationBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import LicenseDisclosure from './components/LicenseDisclosure';

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showLicense, setShowLicense] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0e1a]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <AppSection language={language} />
      <TradingStats language={language} />
      <SecuritySection language={language} />
      <TradersSection language={language} />
      <SupportSection language={language} />
      <RegulationBanner language={language} onLicenseClick={() => setShowLicense(true)} />
      <Footer
        language={language}
        onPrivacyClick={() => setShowPrivacy(true)}
        onLicenseClick={() => setShowLicense(true)}
      />
      <WhatsAppButton language={language} />

      {showPrivacy && <PrivacyPolicy language={language} onClose={() => setShowPrivacy(false)} />}
      {showLicense && <LicenseDisclosure language={language} onClose={() => setShowLicense(false)} />}
    </div>
  );
}
