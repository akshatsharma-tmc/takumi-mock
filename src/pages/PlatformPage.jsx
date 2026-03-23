import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  Cpu, 
  Lightbulb, 
  Cog,
  Package,
  Plug,
  Monitor,
  Users,
  Building,
  Wrench,
  Cloud
} from 'lucide-react';

const PlatformPage = () => {
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

  const features = [
    { 
      icon: Cpu, 
      key: 'intelligentMotion',
      color: 'bg-takumi-red'
    },
    { 
      icon: Lightbulb, 
      key: 'innovativeIPs',
      color: 'bg-blue-600'
    },
    { 
      icon: Cog, 
      key: 'mbse',
      color: 'bg-green-600'
    },
    { 
      icon: Package, 
      key: 'catalog',
      color: 'bg-purple-600'
    },
    { 
      icon: Plug, 
      key: 'plugNPlay',
      color: 'bg-orange-500'
    },
    { 
      icon: Monitor, 
      key: 'digitalTwin',
      color: 'bg-indigo-600'
    }
  ];

  const visionStakeholders = [
    { icon: Building, label: 'Suppliers', description: 'Components & Sub-systems' },
    { icon: Users, label: 'OEM Partners', description: 'Digital Components Library' },
    { icon: Wrench, label: 'Builders', description: 'Select, Validate, Configure' },
    { icon: Cloud, label: 'Users', description: 'Runtime & Service Portal' }
  ];

  return (
    <div data-testid="platform-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-takumi-red rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              {t('platform.title')}
            </span>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {t('platform.heading')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('platform.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        ref={setRef('features')}
        data-testid="platform-features"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
              Platform Capabilities
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A comprehensive suite of tools and technologies designed to accelerate 
              your motion control product development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.key}
                className={`group p-8 bg-gray-50 border border-gray-100 rounded-sm hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-500 ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${feature.color} rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-3">
                  {t(`platform.features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`platform.features.${feature.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Vision */}
      <section
        ref={setRef('vision')}
        data-testid="platform-vision"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              Platform Vision
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mt-4">
              End-to-End Ecosystem
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From suppliers to end users, our platform connects every stakeholder 
              in the motion control value chain.
            </p>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Stakeholder Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visionStakeholders.map((stakeholder, index) => (
                <div
                  key={stakeholder.label}
                  className="relative bg-white p-8 rounded-sm border border-gray-200 hover:border-takumi-red/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-takumi-red/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-takumi-red group-hover:text-white transition-colors">
                    <stakeholder.icon className="w-6 h-6 text-takumi-red group-hover:text-white" />
                  </div>
                  <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-2">
                    {stakeholder.label}
                  </h3>
                  <p className="text-gray-600 text-sm">{stakeholder.description}</p>
                  
                  {/* Connector Line */}
                  {index < visionStakeholders.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300" />
                  )}
                </div>
              ))}
            </div>

            {/* Center Platform Box */}
            <div className="mt-12 max-w-2xl mx-auto bg-industrial-slate text-white p-8 rounded-sm text-center">
              <h3 className="font-manrope text-2xl font-bold mb-4">Takumi Model Library</h3>
              <p className="text-gray-300 mb-6">
                Online IDE • Digital Components • Runtime • Service Portal
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-sm text-sm">Model Based Design</span>
                <span className="px-4 py-2 bg-white/10 rounded-sm text-sm">Monetization Layer</span>
                <span className="px-4 py-2 bg-white/10 rounded-sm text-sm">Digital Twin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section
        ref={setRef('development')}
        data-testid="development-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible.development ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="space-y-8">
              <div>
                <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                  Online IDE
                </span>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mt-4">
                  Development Approach
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-takumi-red text-white rounded-sm flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-slate">Software definition and design before hardware</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-takumi-red text-white rounded-sm flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-slate">Early validation with Model based design (Azapa TDM)</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-takumi-red text-white rounded-sm flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-slate">Standard & Stable interfaces</h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-takumi-red text-white rounded-sm flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-slate">Consume & Publish ecosystem</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-6">
                Builder Workflow
              </h3>
              <div className="space-y-4">
                {['Select digital models', 'Validate through Simulation', 'Configure & Code Customization', 'Test', 'Procure', 'Assemble & Flash', 'Certify'].map((step, index) => (
                  <div key={step} className="flex items-center space-x-4 p-3 bg-white rounded-sm border border-gray-100">
                    <span className="w-6 h-6 bg-takumi-red/10 text-takumi-red rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-takumi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build with Motion Magic?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Explore our products or get in touch to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              data-testid="platform-products-cta"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-takumi-red font-semibold rounded-sm hover:bg-gray-100 transition-colors"
            >
              <span>View Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="platform-contact-cta"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;
