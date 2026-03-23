import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  Car, 
  Wifi, 
  Users, 
  Zap,
  Target,
  Lightbulb,
  Globe
} from 'lucide-react';

const AboutPage = () => {
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

  const caseItems = [
    { icon: Wifi, label: 'Connected', color: 'bg-blue-500' },
    { icon: Car, label: 'Autonomous', color: 'bg-green-500' },
    { icon: Users, label: 'Shared/Smart', color: 'bg-purple-500' },
    { icon: Zap, label: 'Electric', color: 'bg-yellow-500' }
  ];

  const values = [
    { 
      icon: Target, 
      title: 'Precision', 
      description: 'Japanese engineering excellence meets Indian innovation in every product we create.'
    },
    { 
      icon: Lightbulb, 
      title: 'Innovation', 
      description: 'Constantly pushing boundaries to develop next-generation motion control solutions.'
    },
    { 
      icon: Globe, 
      title: 'Global Impact', 
      description: 'Democratizing CASE mobility for sustainable transportation worldwide.'
    }
  ];

  return (
    <div data-testid="about-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-takumi-red rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-takumi-red rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              {t('intro.title')}
            </span>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {t('intro.heading')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={setRef('mission')}
        data-testid="mission-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div>
              <img
                src="https://images.pexels.com/photos/5973843/pexels-photo-5973843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Japanese craftsmanship"
                className="rounded-sm shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
                Our Mission
              </h2>
              <div className="p-8 bg-gray-50 border-l-4 border-takumi-red rounded-r-sm">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{t('intro.mission')}"
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of combining Indian innovation with Japanese 
                technology to create solutions that not only meet but exceed global 
                standards in motion control engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={setRef('values')}
        data-testid="values-section"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white p-8 rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-500 ${
                  isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-takumi-red rounded-sm flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE Mobility Section */}
      <section
        ref={setRef('case')}
        data-testid="case-detail-section"
        className="py-24 lg:py-32 bg-industrial-slate text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t('intro.caseTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harmonizing product development & distribution away from the traditional 
              tiered setup to create a more accessible and efficient mobility ecosystem.
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {caseItems.map((item, index) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm text-center hover:bg-white/10 transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 ${item.color} rounded-sm flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-manrope text-xl font-bold">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section
        ref={setRef('ecosystem')}
        data-testid="ecosystem-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.ecosystem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              {t('intro.ecosystemTitle')}
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mt-4">
              {t('ecosystem.title')}
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            isVisible.ecosystem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {t('ecosystem.items').map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border border-gray-100 rounded-sm hover:border-takumi-red/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-takumi-red/10 rounded-sm flex items-center justify-center mb-4">
                  <span className="text-takumi-red font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mb-6">
            Explore Our Platform
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover the Motion Magic platform and see how our innovative solutions 
            can power your next project.
          </p>
          <Link
            to="/platform"
            data-testid="about-platform-cta"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-takumi-red text-white font-semibold rounded-sm hover:bg-takumi-red-dark transition-colors"
          >
            <span>View Platform</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
