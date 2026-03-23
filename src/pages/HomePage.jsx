import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  ChevronDown, 
  Car, 
  Wifi, 
  Users, 
  Zap,
  Cpu,
  Cog,
  Cloud
} from 'lucide-react';

const HomePage = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

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
    { icon: Wifi, label: 'Connected', labelJp: 'コネクテッド' },
    { icon: Car, label: 'Autonomous', labelJp: '自律' },
    { icon: Users, label: 'Shared/Smart', labelJp: 'シェアード' },
    { icon: Zap, label: 'Electric', labelJp: '電気' }
  ];

  const ecosystemItems = [
    { icon: Cog, label: t('intro.coCreation'), color: 'bg-takumi-red' },
    { icon: Cpu, label: t('intro.magicPlatform'), color: 'bg-industrial-slate' },
    { icon: Cloud, label: t('intro.cloud'), color: 'bg-gray-700' }
  ];

  return (
    <div data-testid="home-page" className="overflow-hidden">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGZsb3dpbmclMjByZWQlMjBzaWxrJTIwZmFicmljJTIwbW90aW9ufGVufDB8fHx8MTc3NDI1OTY2M3ww&ixlib=rb-4.1.0&q=85"
            alt="Abstract flowing motion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-takumi-red/90 via-takumi-red/70 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Logo Animation */}
            <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
              <img
                src="https://customer-assets.emergentagent.com/job_22fe3f13-7547-4b99-be0c-1c48285a619d/artifacts/kkg75uhc_Takumi_logo.png"
                alt="Takumi Logo"
                className="h-24 w-24 sm:h-32 sm:w-32 animate-float"
              />
            </div>

            {/* Tagline */}
            <div className="space-y-4 opacity-0 animate-fade-in-up animate-delay-200">
              <h1 className="font-manrope text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                {t('hero.tagline')}
              </h1>
              <p className={`text-xl sm:text-2xl text-white/80 ${language === 'en' ? 'jp-text' : ''}`}>
                {t('hero.taglineJp')}
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-400">
              {t('hero.subtitle')}
            </p>

            {/* CTA Button */}
            <div className="pt-8 opacity-0 animate-fade-in-up animate-delay-600">
              <Link
                to="/about"
                data-testid="hero-cta-btn"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-takumi-red font-bold text-lg rounded-sm hover:bg-gray-100 transition-all duration-300 group"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-800">
            <div className="flex flex-col items-center space-y-2 text-white/60">
              <span className="text-sm">{t('hero.scrollHint')}</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        ref={setRef('intro')}
        data-testid="intro-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                  {t('intro.title')}
                </span>
                <h2 className="font-manrope text-4xl sm:text-5xl font-bold text-industrial-slate mt-4">
                  {t('intro.heading')}
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('intro.description')}
              </p>

              <div className="p-6 bg-gray-50 border-l-4 border-takumi-red">
                <p className="text-gray-700 italic">
                  "{t('intro.mission')}"
                </p>
              </div>

              <Link
                to="/about"
                data-testid="intro-learn-more"
                className="inline-flex items-center space-x-2 text-takumi-red font-semibold hover:space-x-3 transition-all"
              >
                <span>Learn more about our vision</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right - Craftsmanship Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5973843/pexels-photo-5973843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Japanese craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-takumi-red text-white p-6 rounded-sm shadow-2xl">
                <span className="text-4xl font-bold">20+</span>
                <p className="text-sm opacity-80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE Mobility Section */}
      <section
        ref={setRef('case')}
        data-testid="case-section"
        className="py-24 lg:py-32 bg-industrial-slate text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t('intro.caseTitle')}
            </h2>
            <p className="text-xl text-gray-300">{t('intro.caseDescription')}</p>
          </div>

          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {caseItems.map((item, index) => (
              <div
                key={item.label}
                className="text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-sm flex items-center justify-center group-hover:bg-takumi-red transition-colors duration-300">
                  <item.icon className="w-12 h-12" />
                </div>
                <h3 className="font-manrope text-xl font-bold mb-2">{item.label}</h3>
                <p className="text-gray-400 jp-text text-sm">{item.labelJp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Preview Section */}
      <section
        ref={setRef('ecosystem')}
        data-testid="ecosystem-preview"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.ecosystem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              {t('intro.ecosystemTitle')}
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-industrial-slate mt-4">
              Powering the Future of Motion
            </h2>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.ecosystem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {ecosystemItems.map((item, index) => (
              <div
                key={item.label}
                className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${item.color} rounded-sm flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                  {item.label}
                </h3>
                <p className="text-gray-600">
                  Integrated solutions for next-generation motion control applications.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/platform"
              data-testid="explore-platform-btn"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-takumi-red text-white font-semibold rounded-sm hover:bg-takumi-red-dark transition-colors"
            >
              <span>Explore Our Platform</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Showcase */}
      <section
        ref={setRef('tech')}
        data-testid="tech-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6432110/pexels-photo-6432110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Industrial technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-takumi-red/10 rounded-sm -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                  Our Technology
                </span>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mt-4">
                  Precision Engineering for Tomorrow's Mobility
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                From electric vehicles to industrial automation, our motion control solutions 
                power the technologies that are shaping the future of transportation and manufacturing.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-sm">
                  <span className="text-3xl font-bold text-takumi-red">33KW</span>
                  <p className="text-gray-600 text-sm mt-1">Ready Power Range</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-sm">
                  <span className="text-3xl font-bold text-takumi-red">1200V</span>
                  <p className="text-gray-600 text-sm mt-1">Upcoming Voltage Range</p>
                </div>
              </div>

              <Link
                to="/products"
                data-testid="view-products-btn"
                className="inline-flex items-center space-x-2 text-takumi-red font-semibold hover:space-x-3 transition-all"
              >
                <span>View Our Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-takumi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Power Your Vision?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Partner with us to create intelligent motion solutions that drive innovation 
            and transform industries.
          </p>
          <Link
            to="/contact"
            data-testid="contact-cta-btn"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-takumi-red font-bold text-lg rounded-sm hover:bg-gray-100 transition-colors"
          >
            <span>{t('nav.contact')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
