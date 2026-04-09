import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  Car, 
  Wifi, 
  Users, 
  Zap,
  MapPin,
  Check,
  Award,
  TrendingUp
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

  const locations = [
    {
      name: 'Takumi – Kyoto',
      country: 'Japan',
      flag: '🇯🇵',
      description: 'Technology Partnerships – Market Research',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGphcGFufGVufDB8fHx8MTczMjEyMDAwMHww&ixlib=rb-4.1.0&q=85&w=400'
    },
    {
      name: 'Takumi – Bangalore',
      country: 'India',
      flag: '🇮🇳',
      description: 'Engineering and PoC & Proto Production',
      image: 'https://images.pexels.com/photos/5858521/pexels-photo-5858521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600'
    },
    {
      name: 'Takumi – Tenkasi',
      country: 'India',
      flag: '🇮🇳',
      description: 'Engineering, Production & Test Lab',
      image: 'https://images.pexels.com/photos/6432110/pexels-photo-6432110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'ISO 27001:2013', description: 'Information Security' },
    { name: 'ESD Association', description: 'Electrostatic Discharge Control' }
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

      {/* Mission & Vision Section */}
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
                Our Mission & Vision
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

      {/* FCC Investment Section */}
      <section
        ref={setRef('investment')}
        data-testid="investment-section"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible.investment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white rounded-sm shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-takumi-red p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                    <span className="text-white/80 text-sm uppercase tracking-widest">Strategic Investment</span>
                  </div>
                  <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-white mb-4">
                    FCC Investment in Takumi
                  </h2>
                  <p className="text-white/80 text-lg">
                    December 2023
                  </p>
                </div>
                <div className="p-12">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    F.C.C. Co., Ltd (HQ: Hamamatsu, Japan. CEO: Yoshitaka Saito) made an early-stage 
                    strategic investment in Takumi Motion Controls Pvt. Ltd. (HQ: Bengaluru, India. 
                    CEO: Britto Edward Victor).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Takumi develops PCU, VCU and OS for small electric mobility (2W, 3W, and tractors, etc.).
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    FCC and Takumi will co-develop powertrain and its associated services for the 
                    electric mobility market, strengthening the partnership between Japanese engineering 
                    excellence and Indian innovation.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-gray-100 rounded-sm">
                      <span className="text-sm font-medium text-gray-700">🇯🇵 FCC Japan</span>
                    </div>
                    <div className="px-4 py-2 bg-gray-100 rounded-sm">
                      <span className="text-sm font-medium text-gray-700">🇮🇳 Takumi India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Facilities Section */}
      <section
        ref={setRef('facilities')}
        data-testid="facilities-section"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.facilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              Global Presence
            </span>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mt-4">
              Our Facilities
            </h2>
          </div>

          <div className={`grid lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.facilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {locations.map((location, index) => (
              <div
                key={location.name}
                className="group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-sm">
                  <div className="aspect-[16/10]">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4 text-3xl">{location.flag}</div>
                </div>
                <div className="bg-white p-6 rounded-b-sm border border-t-0 border-gray-100 group-hover:shadow-lg transition-all">
                  <div className="flex items-center space-x-2 text-takumi-red mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-medium">{location.country}</span>
                  </div>
                  <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        ref={setRef('certs')}
        data-testid="certifications-section"
        className="py-24 lg:py-32 bg-white"
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
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-gray-50 p-8 rounded-sm border border-gray-100 text-center hover:shadow-lg hover:border-takumi-red/20 transition-all"
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

      {/* Capabilities Section */}
      <section
        ref={setRef('capabilities')}
        data-testid="capabilities-section"
        className="py-24 lg:py-32 bg-gray-50"
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

              <div className="grid grid-cols-2 gap-4">
                {[
                  'SMT Assembly Lines',
                  'Automated Optical Inspection',
                  'In-Circuit Testing',
                  'Functional Testing',
                  'Environmental Testing',
                  'ESD-Protected Areas'
                ].map((capability) => (
                  <div key={capability} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-takumi-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-takumi-red" />
                    </div>
                    <span className="text-gray-700 text-sm">{capability}</span>
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

      {/* CTA */}
      <section className="py-24 bg-takumi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold mb-6">
            Explore Our Platform
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Discover the Motion Magic platform and see how our innovative solutions 
            can power your next project.
          </p>
          <Link
            to="/platform"
            data-testid="about-platform-cta"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-takumi-red font-semibold rounded-sm hover:bg-gray-100 transition-colors"
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
