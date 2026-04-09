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

  // Semiconductor Partners with actual logos
  const semiconductorPartners = [
    { 
      name: 'Renesas', 
      logo: '/RenesasLogo.png',
      description: 'Microcontrollers & Power'
    },
    { 
      name: 'Infineon', 
      logo: '/InfineonLogo.png',
      description: 'Power Semiconductors'
    },
    { 
      name: 'Texas Instruments', 
      logo: '/TexasInstrumentsLogo.png',
      description: 'Analog & Embedded'
    },
    { 
      name: 'NXP', 
      logo: '/NXPLogo.png',
      description: 'Automotive & IoT'
    },
    { 
      name: 'Microchip', 
      logo: '/MicrochipLogo.png',
      description: 'MCU & Analog'
    },
    { 
      name: 'onsemi', 
      logo: '/OnsemiLogo.png',
      description: 'Power & Sensing'
    },
    { 
      name: 'ROHM', 
      logo: '/ROHMLogo.png',
      description: 'Power Management'
    }
  ];

  // Software & Tools Partners
  const softwarePartners = [
    { 
      name: 'MathWorks', 
      logo: '/MathWorksLogo.png',
      description: 'MATLAB & Simulink'
    },
    { 
      name: 'PTC', 
      logo: '/PTCLogo.png',
      description: 'Creo CAD'
    },
    { 
      name: 'Altium', 
      logo: '/AltiumLogo.png',
      description: 'PCB Design'
    },
    { 
      name: 'Tektronix', 
      logo: '/TektronixLogo.png',
      description: 'Test & Measurement'
    },
    { 
      name: 'HIOKI', 
      logo: '/HIOKILogo.png',
      description: 'Electrical Measurement'
    }
  ];

  const [logoErrors, setLogoErrors] = useState({});

  const handleLogoError = (partnerName) => {
    setLogoErrors(prev => ({ ...prev, [partnerName]: true }));
  };

  const PartnerCard = ({ partner, index }) => (
    <div
      className="bg-white p-6 rounded-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:border-takumi-red/20 transition-all group"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="h-16 flex items-center justify-center mb-4 w-full">
        {logoErrors[partner.name] ? (
          <span className="font-manrope font-bold text-xl text-gray-400 group-hover:text-takumi-red transition-colors">
            {partner.name}
          </span>
        ) : (
          <img
            src={partner.logo}
            alt={partner.name}
            onError={() => handleLogoError(partner.name)}
            className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
          />
        )}
      </div>
      <h4 className="font-manrope font-bold text-industrial-slate text-center">
        {partner.name}
      </h4>
      <p className="text-gray-500 text-sm text-center mt-1">{partner.description}</p>
    </div>
  );

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

      {/* Semiconductor Partners */}
      <section
        ref={setRef('semiconductor')}
        data-testid="semiconductor-partners"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible.semiconductor ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-1 bg-takumi-red" />
              <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                Silicon Partners
              </span>
            </div>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
              Semiconductor Partners
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Our semiconductor partnerships provide access to the latest in 
              microcontroller and power electronics technology.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${
            isVisible.semiconductor ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {semiconductorPartners.map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools Partners */}
      <section
        ref={setRef('software')}
        data-testid="software-partners"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible.software ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-1 bg-industrial-slate" />
              <span className="text-industrial-slate font-semibold tracking-widest uppercase text-sm">
                Development Tools
              </span>
            </div>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
              Software & Tools Partners
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Industry-leading software and design tools for simulation, 
              validation, and production.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-1000 delay-200 ${
            isVisible.software ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {softwarePartners.map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section
        ref={setRef('benefits')}
        data-testid="benefits-section"
        className="py-24 lg:py-32 bg-white"
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
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
              <div className="text-4xl font-bold text-takumi-red mb-4">01</div>
              <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                Technology Access
              </h3>
              <p className="text-gray-600">
                Access to cutting-edge semiconductor and software technologies from 
                global leaders in the industry.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
              <div className="text-4xl font-bold text-takumi-red mb-4">02</div>
              <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                Integrated Solutions
              </h3>
              <p className="text-gray-600">
                Seamless integration of multiple technologies into cohesive 
                motion control solutions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
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
