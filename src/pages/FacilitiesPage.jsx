import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Check, Award } from 'lucide-react';

const FacilitiesPage = () => {
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

  const locations = [
    {
      key: 'kyoto',
      country: 'Japan',
      flag: '🇯🇵',
      image: 'https://images.unsplash.com/photo-1767840272171-9c12ce266646?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwzfHxreW90byUyMHRyYWRpdGlvbmFsJTIwYXJjaGl0ZWN0dXJlJTIwc2NlbmVyeXxlbnwwfHx8fDE3NzQyNTk2Njl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      key: 'bangalore',
      country: 'India',
      flag: '🇮🇳',
      image: 'https://images.pexels.com/photos/5858521/pexels-photo-5858521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      key: 'tenkasi',
      country: 'India',
      flag: '🇮🇳',
      image: 'https://images.pexels.com/photos/6432110/pexels-photo-6432110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'ISO 14001:2015', description: 'Environmental Management System' },
    { name: 'ISO 27001:2013', description: 'Information Security Management' },
    { name: 'ESD Association', description: 'Electrostatic Discharge Control' }
  ];

  return (
    <div data-testid="facilities-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-takumi-red rounded-full blur-3xl -translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
            Global Presence
          </span>
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            {t('facilities.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Strategic locations across Japan and India to serve our global customers.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section
        ref={setRef('locations')}
        data-testid="locations-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={location.key}
                data-testid={`location-${location.key}`}
                className={`group transition-all duration-1000 ${
                  isVisible.locations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-sm">
                  <div className="aspect-[16/10]">
                    <img
                      src={location.image}
                      alt={t(`facilities.locations.${location.key}.name`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">{location.flag}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-b-sm border border-t-0 border-gray-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                  <div className="flex items-center space-x-2 text-takumi-red mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-medium">{location.country}</span>
                  </div>
                  <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-2">
                    {t(`facilities.locations.${location.key}.name`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`facilities.locations.${location.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        ref={setRef('certs')}
        data-testid="certifications-section"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.certs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              Quality Assured
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mt-4">
              Certifications & Compliance
            </h2>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.certs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="bg-white p-8 rounded-sm border border-gray-100 text-center hover:shadow-lg hover:border-takumi-red/20 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-takumi-red/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-takumi-red" />
                </div>
                <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        ref={setRef('capabilities')}
        data-testid="capabilities-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="space-y-8">
              <div>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
                  Production Capabilities
                </h2>
                <p className="text-gray-600 mt-4">
                  Our facilities are equipped with state-of-the-art equipment and processes 
                  to deliver high-quality motion control products.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'SMT Assembly Lines',
                  'Through-Hole Assembly',
                  'Automated Optical Inspection (AOI)',
                  'In-Circuit Testing (ICT)',
                  'Functional Testing',
                  'Environmental Testing',
                  'ESD-Protected Work Areas',
                  'Clean Room Facilities'
                ].map((capability) => (
                  <div key={capability} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-takumi-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-takumi-red" />
                    </div>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5858521/pexels-photo-5858521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Production Facility"
                className="rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-takumi-red/10 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-takumi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold mb-6">
            Visit Our Facilities
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule a visit to see our engineering and production capabilities firsthand.
          </p>
          <a
            href="/contact"
            data-testid="facilities-contact-cta"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-takumi-red font-semibold rounded-sm hover:bg-gray-100 transition-colors"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
