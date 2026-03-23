import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight,
  Car,
  Truck,
  Bike,
  Factory,
  Cpu,
  Gauge,
  Battery,
  Settings,
  Radio,
  Wifi,
  Plane
} from 'lucide-react';

const ProductsPage = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('core');
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

  const transportationApps = [
    { icon: Bike, label: 'Electric Scooter' },
    { icon: Bike, label: 'Electric Bicycle' },
    { icon: Car, label: 'Electric Car' },
    { icon: Truck, label: 'Electric Tuk-Tuk' },
    { icon: Truck, label: 'Forklift' },
    { icon: Plane, label: 'Drone' }
  ];

  const industrialApps = [
    { icon: Factory, label: 'AGV/AMR' },
    { icon: Settings, label: 'Robotic Arm' },
    { icon: Factory, label: 'Conveyor' },
    { icon: Gauge, label: 'Treadmill' },
    { icon: Radio, label: 'Telecom RET' },
    { icon: Factory, label: 'Industrial Pump' }
  ];

  const evProducts = [
    { 
      name: 'Forklift EV Integrated Power Train',
      spec: '1.5-3KW',
      description: 'Motor + MCU + Parking Brake (EM)'
    },
    { 
      name: 'Electric Bike Xin1',
      spec: '96V / 10KW - 14KW',
      description: 'Motor + MCU, OBC, DCDC, BCU'
    },
    { 
      name: '2W EV Power Train - Integrated Swingarm',
      spec: '72V / 10KW',
      description: 'Motor - EV PCU - Gearbox'
    },
    { 
      name: '2W EV Power Train - Hub Motor',
      spec: '51V / 2.5KW - 3.3KW',
      description: '73-96Arms / 1000-5000 rpm'
    },
    { 
      name: '2W/3W/Tiller EV PCU',
      spec: '72V / 10KW',
      description: 'Power Control Unit'
    },
    { 
      name: 'EV Drone',
      spec: '48V / 80A',
      description: '10000 rpm'
    },
    { 
      name: 'AGV - AMR Wheel Assembly',
      spec: 'Custom',
      description: 'Traction Motor + Steering Motor + Controllers'
    }
  ];

  const intelligentApps = [
    { name: 'Drone', spec: '48V / 1.7 – 2.7KW' },
    { name: 'Bicycle E-Assist', spec: '36V/250W Hub Motor + Controller' },
    { name: 'Treadmill', spec: 'Motor + Controller' },
    { name: 'Smart Seat ECU', spec: '4 Motors + 7 Switches + 3 Sensors' },
    { name: 'Electric Wheelchair', spec: '24V/250W BLDC Hub Motor' },
    { name: 'HVAC Controller', spec: 'Smart Control' },
    { name: 'EoDD Fluid Pump', spec: '415V / 1-2KW PMSM' }
  ];

  return (
    <div data-testid="products-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-takumi-red rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              {t('products.title')}
            </span>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Motion Control Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From motors to intelligent controllers, explore our comprehensive 
              range of motion control products.
            </p>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section
        ref={setRef('domains')}
        data-testid="domains-section"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.domains ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
              {t('products.domains.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transportation */}
            <div className={`transition-all duration-1000 ${
              isVisible.domains ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="bg-takumi-red text-white p-6 rounded-t-sm">
                <h3 className="font-manrope text-2xl font-bold">
                  {t('products.domains.transportation')}
                </h3>
              </div>
              <div className="bg-gray-50 p-8 rounded-b-sm border border-t-0 border-gray-100">
                <div className="grid grid-cols-3 gap-6">
                  {transportationApps.map((app, index) => (
                    <div key={app.label} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white border border-gray-200 rounded-sm flex items-center justify-center group-hover:border-takumi-red group-hover:bg-takumi-red/5 transition-colors">
                        <app.icon className="w-8 h-8 text-gray-600 group-hover:text-takumi-red" />
                      </div>
                      <span className="text-sm text-gray-700">{app.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industrial */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible.domains ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="bg-industrial-slate text-white p-6 rounded-t-sm">
                <h3 className="font-manrope text-2xl font-bold">
                  {t('products.domains.industrial')}
                </h3>
              </div>
              <div className="bg-gray-50 p-8 rounded-b-sm border border-t-0 border-gray-100">
                <div className="grid grid-cols-3 gap-6">
                  {industrialApps.map((app, index) => (
                    <div key={app.label} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white border border-gray-200 rounded-sm flex items-center justify-center group-hover:border-industrial-slate group-hover:bg-industrial-slate/5 transition-colors">
                        <app.icon className="w-8 h-8 text-gray-600 group-hover:text-industrial-slate" />
                      </div>
                      <span className="text-sm text-gray-700">{app.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Tabs */}
      <section
        ref={setRef('products')}
        data-testid="products-tabs"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('core')}
              data-testid="tab-core"
              className={`px-6 py-3 font-semibold rounded-sm transition-colors ${
                activeTab === 'core'
                  ? 'bg-takumi-red text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('products.core.title')}
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              data-testid="tab-partner"
              className={`px-6 py-3 font-semibold rounded-sm transition-colors ${
                activeTab === 'partner'
                  ? 'bg-takumi-red text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('products.partner.title')}
            </button>
            <button
              onClick={() => setActiveTab('ev')}
              data-testid="tab-ev"
              className={`px-6 py-3 font-semibold rounded-sm transition-colors ${
                activeTab === 'ev'
                  ? 'bg-takumi-red text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('products.evMatrix.title')}
            </button>
            <button
              onClick={() => setActiveTab('intelligent')}
              data-testid="tab-intelligent"
              className={`px-6 py-3 font-semibold rounded-sm transition-colors ${
                activeTab === 'intelligent'
                  ? 'bg-takumi-red text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('products.intelligentMatrix.title')}
            </button>
          </div>

          {/* Core Products */}
          {activeTab === 'core' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              {/* Motors */}
              <div className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-takumi-red rounded-sm flex items-center justify-center mb-6">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-4">
                  {t('products.core.motors.title')}
                </h3>
                <ul className="space-y-3">
                  {t('products.core.motors.items').map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-takumi-red rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Controllers */}
              <div className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-600 rounded-sm flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-4">
                  {t('products.core.controllers.title')}
                </h3>
                <ul className="space-y-3">
                  {t('products.core.controllers.items').map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Telematics */}
              <div className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-600 rounded-sm flex items-center justify-center mb-6">
                  <Wifi className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-4">
                  {t('products.core.telematics.title')}
                </h3>
                <ul className="space-y-3">
                  {t('products.core.telematics.items').map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Partner Products */}
          {activeTab === 'partner' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
              <div className="bg-white p-6 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <Gauge className="w-10 h-10 text-takumi-red mb-4" />
                <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-2">
                  {t('products.partner.sensors')}
                </h3>
                <p className="text-gray-600 text-sm">LiDAR, RADAR, Ultrasonic, Position Sensors</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <Settings className="w-10 h-10 text-takumi-red mb-4" />
                <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-2">
                  {t('products.partner.hmi')}
                </h3>
                <p className="text-gray-600 text-sm">Consoles, Displays, Throttle, Brake, Steering</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <Battery className="w-10 h-10 text-takumi-red mb-4" />
                <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-2">
                  {t('products.partner.battery')}
                </h3>
                <p className="text-gray-600 text-sm">400V / 100 KWH, Lithium-ion and LFP</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <Settings className="w-10 h-10 text-takumi-red mb-4" />
                <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-2">
                  {t('products.partner.accessories')}
                </h3>
                <p className="text-gray-600 text-sm">Custom Wire Harness, Connectors</p>
              </div>
            </div>
          )}

          {/* EV Products Matrix */}
          {activeTab === 'ev' && (
            <div className="animate-fade-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {evProducts.map((product, index) => (
                  <div
                    key={product.name}
                    className="bg-white p-6 rounded-sm border border-gray-100 hover:border-takumi-red/30 hover:shadow-lg transition-all"
                  >
                    <div className="bg-gray-100 rounded-sm p-4 mb-4 flex items-center justify-center h-24">
                      <Cpu className="w-12 h-12 text-gray-400" />
                    </div>
                    <h4 className="font-manrope font-bold text-industrial-slate mb-2 text-sm">
                      {product.name}
                    </h4>
                    <p className="text-takumi-red font-semibold text-sm mb-1">{product.spec}</p>
                    <p className="text-gray-500 text-xs">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Intelligent Applications Matrix */}
          {activeTab === 'intelligent' && (
            <div className="animate-fade-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {intelligentApps.map((app, index) => (
                  <div
                    key={app.name}
                    className="bg-white p-6 rounded-sm border border-gray-100 hover:border-takumi-red/30 hover:shadow-lg transition-all"
                  >
                    <div className="bg-gray-100 rounded-sm p-4 mb-4 flex items-center justify-center h-24">
                      <Settings className="w-12 h-12 text-gray-400" />
                    </div>
                    <h4 className="font-manrope font-bold text-industrial-slate mb-2">
                      {app.name}
                    </h4>
                    <p className="text-takumi-red font-semibold text-sm">{app.spec}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our engineering team can develop tailored motion control solutions 
            for your specific requirements.
          </p>
          <Link
            to="/contact"
            data-testid="products-contact-cta"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-takumi-red text-white font-semibold rounded-sm hover:bg-takumi-red-dark transition-colors"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
