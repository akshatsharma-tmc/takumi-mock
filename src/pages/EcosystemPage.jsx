import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight,
  Cpu,
  Settings,
  Wifi,
  Battery,
  Gauge,
  Wrench,
  FileCheck,
  Cog,
  Car,
  Truck,
  Bike,
  Factory,
  Plane,
  Lightbulb,
  Package,
  Plug,
  Monitor,
  Users,
  Building,
  Cloud
} from 'lucide-react';

const EcosystemPage = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('products');
  const sectionRefs = useRef({});
  const location = useLocation();

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
  }, [activeSection]);

  const setRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');

    if (tab && ['products', 'services', 'applications', 'platform'].includes(tab)) {
      setActiveSection(tab);
    }
  }, [location.search]);

  // Takumi Core Products with Domain & Application
  const coreProducts = [
    {
      id: 'motors',
      title: 'Motors + Motor Controllers',
      icon: Cpu,
      color: 'bg-takumi-red',
      domains: ['Transportation', 'Industrial'],
      applications: ['Electric Vehicles', 'AGV/AMR', 'Drones', 'Industrial Pumps'],
      specs: [
        'Brushed DC, Brushless DC, PMSM, Servo Motors',
        'Controllers: Infineon, TI, Renesas, Microchip',
        'Ready: 12V – 96V / 100W – 33KW',
        'Upcoming: 240V – 1200V / 33KW – 1200KW'
      ]
    },
    {
      id: 'controllers',
      title: 'Intelligent Application Controllers',
      icon: Settings,
      color: 'bg-blue-600',
      domains: ['Transportation', 'Industrial'],
      applications: ['EV PCU/VCU', 'Smart Seat ECU', 'HVAC Controller'],
      specs: [
        'Based on Renesas, NXP, Microchip',
        'Smart Control for specific applications',
        'Optional Telematics integration',
        'Environment & User adaptive'
      ]
    },
    {
      id: 'telematics',
      title: 'Telematics Unit',
      icon: Wifi,
      color: 'bg-green-600',
      domains: ['Transportation'],
      applications: ['Fleet Management', 'Remote Monitoring', 'Connected Vehicles'],
      specs: [
        'GPS + IMU (Accelerometer + Compass)',
        '4G/5G Connectivity',
        'WiFi + BT/BLE',
        'OTA Updates Support'
      ]
    }
  ];

  // Takumi Partner Products
  const partnerProducts = [
    {
      id: 'sensors',
      title: 'Sensors',
      icon: Gauge,
      domains: ['Transportation', 'Industrial'],
      applications: ['ADAS', 'Obstacle Detection', 'Position Sensing'],
      items: ['LiDAR', 'RADAR', 'Ultrasonic', 'Position Sensors', 'Temperature Sensors', 'Current Sensors']
    },
    {
      id: 'hmi',
      title: 'HMI (Human Machine Interface)',
      icon: Settings,
      domains: ['Transportation', 'Industrial'],
      applications: ['Vehicle Dashboards', 'Control Panels', 'Operator Consoles'],
      items: ['Consoles/Displays', 'Throttle', 'Brake', 'Steering', 'Joystick', 'Switches']
    },
    {
      id: 'battery',
      title: 'Battery + BMS',
      icon: Battery,
      domains: ['Transportation', 'Industrial'],
      applications: ['EV Power Systems', 'Energy Storage', 'Industrial UPS'],
      items: ['Up to 400V / 100 KWH', 'Lithium-ion Batteries', 'LFP Type Batteries', 'Smart BMS']
    },
    {
      id: 'accessories',
      title: 'Accessories',
      icon: Cog,
      domains: ['Transportation', 'Industrial'],
      applications: ['System Integration', 'Custom Solutions'],
      items: ['Custom Wire Harness', 'Connectors', 'Enclosures', 'Mounting Systems']
    }
  ];

  // Core Services
  const coreServices = [
    {
      id: 'platform',
      title: 'Takumi Motion Magic Platform',
      icon: Cpu,
      description: 'Complete platform for motion control product development',
      features: ['Digital Twin', 'Model Based Design', 'Online IDE', 'Runtime Services']
    },
    {
      id: 'poc',
      title: 'PoC & Prototype Build',
      icon: Wrench,
      description: 'Rapid prototyping and proof of concept development',
      features: ['Fast Turnaround', 'Design Validation', 'Iteration Support', 'Production Ready']
    },
    {
      id: 'calibration',
      title: 'Motor-Controller Calibration',
      icon: Settings,
      description: 'Expert calibration services for optimal performance',
      features: ['Performance Tuning', 'Efficiency Optimization', 'Thermal Management', 'Safety Compliance']
    },
    {
      id: 'teardown',
      title: 'Tear-down & Benchmarking',
      icon: Wrench,
      description: 'Competitive analysis and product benchmarking',
      features: ['Component Analysis', 'Cost Breakdown', 'Technology Assessment', 'Recommendations']
    },
    {
      id: 'value-engineering',
      title: 'Value Analysis & Value Engineering',
      icon: Settings,
      description: 'Optimize cost while maintaining quality',
      features: ['Should-Costing', 'Design Optimization', 'Supplier Negotiation', 'BOM Reduction']
    }
  ];

  // Partner Services
  const partnerServices = [
    {
      id: 'certification',
      title: 'Product Qualification & Certification',
      description: 'Complete certification and homologation support',
      features: ['Compliance Testing', 'Regulatory Certification', 'Homologation', 'Documentation']
    }
  ];

  const platformFeatures = [
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

  const platformStakeholders = [
    { icon: Building, label: 'Suppliers', description: 'Components & Sub-systems' },
    { icon: Users, label: 'OEM Partners', description: 'Digital Components Library' },
    { icon: Wrench, label: 'Builders', description: 'Select, Validate, Configure' },
    { icon: Cloud, label: 'Users', description: 'Runtime & Service Portal' }
  ];

  // Applications by Domain
  const applicationsByDomain = {
    transportation: [
      { icon: Bike, name: 'Electric Scooter', products: ['Motors', 'Controllers', 'Telematics'] },
      { icon: Bike, name: 'Electric Bicycle', products: ['Motors', 'Controllers', 'BMS'] },
      { icon: Car, name: 'Electric Car', products: ['Motors', 'Controllers', 'Telematics', 'Sensors'] },
      { icon: Truck, name: 'Electric Tuk-Tuk', products: ['Motors', 'Controllers', 'BMS'] },
      { icon: Truck, name: 'Forklift', products: ['Motors', 'Controllers', 'HMI'] },
      { icon: Plane, name: 'Drone', products: ['Motors', 'Controllers', 'Sensors'] }
    ],
    industrial: [
      { icon: Factory, name: 'AGV/AMR', products: ['Motors', 'Controllers', 'Sensors', 'Telematics'] },
      { icon: Settings, name: 'Robotic Arm', products: ['Motors', 'Controllers', 'Sensors'] },
      { icon: Factory, name: 'Conveyor', products: ['Motors', 'Controllers'] },
      { icon: Gauge, name: 'Treadmill', products: ['Motors', 'Controllers', 'HMI'] },
      { icon: Wifi, name: 'Telecom RET', products: ['Motors', 'Controllers'] },
      { icon: Factory, name: 'Industrial Pump', products: ['Motors', 'Controllers'] }
    ]
  };

  return (
    <div data-testid="ecosystem-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-takumi-red rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              Takumi Ecosystem
            </span>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Products, Services, Domains & Motion Magic
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our connected motion control ecosystem, spanning core products, partner services, applications, and the Motion Magic platform.
            </p>
          </div>
        </div>
      </section>

      {/*
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
      */}

      {/* Section Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <button
              onClick={() => setActiveSection('products')}
              data-testid="section-products"
              className={`whitespace-nowrap px-4 py-2 font-semibold transition-colors ${
                activeSection === 'products'
                  ? 'text-takumi-red border-b-2 border-takumi-red'
                  : 'text-gray-600 hover:text-takumi-red'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveSection('services')}
              data-testid="section-services"
              className={`whitespace-nowrap px-4 py-2 font-semibold transition-colors ${
                activeSection === 'services'
                  ? 'text-takumi-red border-b-2 border-takumi-red'
                  : 'text-gray-600 hover:text-takumi-red'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveSection('applications')}
              data-testid="section-applications"
              className={`whitespace-nowrap px-4 py-2 font-semibold transition-colors ${
                activeSection === 'applications'
                  ? 'text-takumi-red border-b-2 border-takumi-red'
                  : 'text-gray-600 hover:text-takumi-red'
              }`}
            >
              Domains & Applications
            </button>
            <button
              onClick={() => setActiveSection('platform')}
              data-testid="section-platform"
              className={`whitespace-nowrap px-4 py-2 font-semibold transition-colors ${
                activeSection === 'platform'
                  ? 'text-takumi-red border-b-2 border-takumi-red'
                  : 'text-gray-600 hover:text-takumi-red'
              }`}
            >
              Motion Magic Platform
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      {activeSection === 'products' && (
        <div className="animate-fade-in">
          {/* Core Products */}
          <section
            ref={setRef('coreProducts')}
            data-testid="core-products-section"
            className="py-24 lg:py-32 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`mb-16 transition-all duration-1000 ${
                isVisible.coreProducts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-takumi-red" />
                  <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                    Core Products
                  </span>
                </div>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
                  Takumi Core Products
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl">
                  In-house developed motion control products powered by our Motion Magic platform.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {coreProducts.map((product, index) => (
                  <div
                    key={product.id}
                    data-testid={`core-product-${product.id}`}
                    className={`bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500 ${
                      isVisible.coreProducts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`${product.color} p-6`}>
                      <product.icon className="w-10 h-10 text-white mb-4" />
                      <h3 className="font-manrope text-xl font-bold text-white">
                        {product.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      {/* Domains */}
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Domains</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.domains.map((domain) => (
                            <span key={domain} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {domain}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Applications */}
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Applications</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.applications.map((app) => (
                            <span key={app} className="px-3 py-1 bg-takumi-red/10 text-takumi-red text-xs rounded-full">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Specs */}
                      <ul className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="flex items-start space-x-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-takumi-red rounded-full mt-2 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partner Products */}
          <section
            ref={setRef('partnerProducts')}
            data-testid="partner-products-section"
            className="py-24 lg:py-32 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`mb-16 transition-all duration-1000 ${
                isVisible.partnerProducts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-industrial-slate" />
                  <span className="text-industrial-slate font-semibold tracking-widest uppercase text-sm">
                    Partner Products
                  </span>
                </div>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
                  Takumi Partner Products
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl">
                  Curated partner ecosystem products to complement your motion control solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnerProducts.map((product, index) => (
                  <div
                    key={product.id}
                    data-testid={`partner-product-${product.id}`}
                    className={`bg-white p-6 rounded-sm border border-gray-100 hover:shadow-lg hover:border-takumi-red/20 transition-all duration-500 ${
                      isVisible.partnerProducts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <product.icon className="w-10 h-10 text-takumi-red mb-4" />
                    <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-3">
                      {product.title}
                    </h3>
                    {/* Domains */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.domains.map((domain) => (
                        <span key={domain} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {domain}
                        </span>
                      ))}
                    </div>
                    {/* Items */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                      {product.items.slice(0, 4).map((item) => (
                        <span key={item} className="text-gray-600 text-xs">
                          • {item}
                        </span>
                      ))}
                      {product.items.length > 4 && (
                        <span className="text-takumi-red text-xs font-medium">
                          +{product.items.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <div className="animate-fade-in">
          {/* Core Services */}
          <section
            ref={setRef('coreServices')}
            data-testid="core-services-section"
            className="py-24 lg:py-32 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-takumi-red" />
                  <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                    Core Services
                  </span>
                </div>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
                  Takumi Core Services
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl">
                  End-to-end engineering services to accelerate your product development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {coreServices.map((service, index) => (
                  <div
                    key={service.id}
                    data-testid={`core-service-${service.id}`}
                    className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-takumi-red rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span key={feature} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partner Services */}
          <section
            ref={setRef('partnerServices')}
            data-testid="partner-services-section"
            className="py-24 lg:py-32 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-1 bg-industrial-slate" />
                  <span className="text-industrial-slate font-semibold tracking-widest uppercase text-sm">
                    Partner Services
                  </span>
                </div>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
                  Partner Services
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl">
                  Certification and homologation support from our partner network.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {partnerServices.map((service) => (
                  <div
                    key={service.id}
                    data-testid={`partner-service-${service.id}`}
                    className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-manrope text-xl font-bold text-industrial-slate mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Applications Section */}
      {activeSection === 'applications' && (
        <div className="animate-fade-in">
          <section
            ref={setRef('applications')}
            data-testid="applications-section"
            className="py-24 lg:py-32 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Transportation */}
              <div className="mb-20">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-1 bg-takumi-red" />
                  <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                    Transportation Domain
                  </span>
                </div>
                <h2 className="font-manrope text-3xl font-bold text-industrial-slate mb-8">
                  Transportation Applications
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applicationsByDomain.transportation.map((app) => (
                    <div
                      key={app.name}
                      className="bg-gray-50 p-6 rounded-sm border border-gray-100 hover:shadow-lg hover:border-takumi-red/20 transition-all group"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-takumi-red/10 rounded-sm flex items-center justify-center group-hover:bg-takumi-red transition-colors">
                          <app.icon className="w-6 h-6 text-takumi-red group-hover:text-white" />
                        </div>
                        <h3 className="font-manrope text-lg font-bold text-industrial-slate">
                          {app.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {app.products.map((product) => (
                          <span key={product} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-full">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industrial */}
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-1 bg-industrial-slate" />
                  <span className="text-industrial-slate font-semibold tracking-widest uppercase text-sm">
                    Industrial Domain
                  </span>
                </div>
                <h2 className="font-manrope text-3xl font-bold text-industrial-slate mb-8">
                  Industrial Applications
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applicationsByDomain.industrial.map((app) => (
                    <div
                      key={app.name}
                      className="bg-gray-50 p-6 rounded-sm border border-gray-100 hover:shadow-lg hover:border-industrial-slate/20 transition-all group"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-industrial-slate/10 rounded-sm flex items-center justify-center group-hover:bg-industrial-slate transition-colors">
                          <app.icon className="w-6 h-6 text-industrial-slate group-hover:text-white" />
                        </div>
                        <h3 className="font-manrope text-lg font-bold text-industrial-slate">
                          {app.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {app.products.map((product) => (
                          <span key={product} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-full">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'platform' && (
        <div className="animate-fade-in">
          <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-takumi-red rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
                  Motion Magic Platform
                </span>
                <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                  Complete Platform for Motion Control Development
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  A modern development and runtime platform that connects digital models, runtime services, and the full Takumi ecosystem.
                </p>
              </div>
            </div>
          </section>

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
                  A comprehensive suite of tools and technologies designed to accelerate your motion control product development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platformFeatures.map((feature, index) => (
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
                  From suppliers to end users, our platform connects every stakeholder in the motion control value chain.
                </p>
              </div>

              <div className={`relative transition-all duration-1000 delay-300 ${
                isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {platformStakeholders.map((stakeholder, index) => (
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
                      {index < platformStakeholders.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300" />
                      )}
                    </div>
                  ))}
                </div>

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
                  to="/ecosystem"
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
      )}

      {/* CTA */}
      <section className="py-24 bg-takumi-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our engineering team can develop tailored motion control solutions 
            for your specific requirements.
          </p>
          <Link
            to="/contact"
            data-testid="ecosystem-contact-cta"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-takumi-red font-semibold rounded-sm hover:bg-gray-100 transition-colors"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcosystemPage;
