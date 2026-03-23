import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PartnershipsPage = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    const options = { threshold: 0.2 };

    Object.keys(sectionRefs.current).forEach((key) => {
      observers[key] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        });
      }, options);

      if (sectionRefs.current[key]) {
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const setRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  const partners = [
    { name: 'Renesas', logo: 'https://logo.clearbit.com/renesas.com', fallback: 'RENESAS' },
    { name: 'Infineon', logo: 'https://logo.clearbit.com/infineon.com', fallback: 'INFINEON' },
    { name: 'Texas Instruments', logo: 'https://logo.clearbit.com/ti.com', fallback: 'TI' },
    { name: 'NXP', logo: 'https://logo.clearbit.com/nxp.com', fallback: 'NXP' },
    { name: 'Microchip', logo: 'https://logo.clearbit.com/microchip.com', fallback: 'MICROCHIP' },
    { name: 'onsemi', logo: 'https://logo.clearbit.com/onsemi.com', fallback: 'ONSEMI' },
    { name: 'ROHM', logo: 'https://logo.clearbit.com/rohm.com', fallback: 'ROHM' },
    { name: 'MathWorks', logo: 'https://logo.clearbit.com/mathworks.com', fallback: 'MATLAB' },
    { name: 'PTC Creo', logo: 'https://logo.clearbit.com/ptc.com', fallback: 'CREO' },
    { name: 'Altium', logo: 'https://logo.clearbit.com/altium.com', fallback: 'ALTIUM' },
    { name: 'Tektronix', logo: 'https://logo.clearbit.com/tek.com', fallback: 'TEKTRONIX' },
    { name: 'HIOKI', logo: 'https://logo.clearbit.com/hioki.com', fallback: 'HIOKI' }
  ];

  const [logoErrors, setLogoErrors] = useState({});

  const handleLogoError = (partnerName) => {
    setLogoErrors(prev => ({ ...prev, [partnerName]: true }));
  };

  return (
    <div data-testid="partnerships-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-takumi-red rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
            Partnerships
          </span>
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            {t('partnerships.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('partnerships.subtitle')}
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section
        ref={setRef('partners')}
        data-testid="partners-grid"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-gray-50 p-8 rounded-sm border border-gray-100 flex items-center justify-center h-32 hover:shadow-lg hover:border-takumi-red/20 transition-all group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {logoErrors[partner.name] ? (
                  <span className="font-manrope font-bold text-xl text-gray-400 group-hover:text-takumi-red transition-colors">
                    {partner.fallback}
                  </span>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    onError={() => handleLogoError(partner.name)}
                    className="max-h-12 max-w-full grayscale group-hover:grayscale-0 transition-all"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section
        ref={setRef('benefits')}
        data-testid="benefits-section"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
              Why Partner With Us
            </h2>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white p-8 rounded-sm border border-gray-100">
              <div className="text-4xl font-bold text-takumi-red mb-4">01</div>
              <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                Technology Access
              </h3>
              <p className="text-gray-600">
                Access to cutting-edge semiconductor and software technologies from 
                global leaders in the industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm border border-gray-100">
              <div className="text-4xl font-bold text-takumi-red mb-4">02</div>
              <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                Integrated Solutions
              </h3>
              <p className="text-gray-600">
                Seamless integration of multiple technologies into cohesive 
                motion control solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm border border-gray-100">
              <div className="text-4xl font-bold text-takumi-red mb-4">03</div>
              <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                Technical Support
              </h3>
              <p className="text-gray-600">
                Expert support from both Takumi engineers and partner 
                technical teams worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section
        ref={setRef('categories')}
        data-testid="categories-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ${
            isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="font-manrope text-2xl font-bold text-industrial-slate mb-6">
                Semiconductor Partners
              </h3>
              <p className="text-gray-600 mb-6">
                Our semiconductor partnerships provide access to the latest in 
                microcontroller and power electronics technology.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">Renesas</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">Infineon</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">Texas Instruments</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">NXP</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">Microchip</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">onsemi</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">ROHM</span>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="font-manrope text-2xl font-bold text-industrial-slate mb-6">
                Software & Tools Partners
              </h3>
              <p className="text-gray-600 mb-6">
                Industry-leading software and design tools for simulation, 
                validation, and production.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">MATLAB & Simulink</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">Creo</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">Altium Designer</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">Tektronix</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium">HIOKI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-24 bg-takumi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold mb-6">
            Interested in Partnering?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join our ecosystem and collaborate on next-generation motion control solutions.
          </p>
          <a
            href="/contact"
            data-testid="partnership-contact-cta"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-takumi-red font-semibold rounded-sm hover:bg-gray-100 transition-colors"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;
