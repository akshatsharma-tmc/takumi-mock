import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin } from 'lucide-react';

const TeamPage = () => {
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

  const teamMembers = [
    {
      key: 'britto',
      image: '/BrittoSir.jpg'
    },
    {
      key: 'aravind',
      image: '/AravindSir.jpg'
    },
    {
      key: 'prasanth',
      image: 'https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      key: 'mohara',
      image: 'https://images.pexels.com/photos/5255409/pexels-photo-5255409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      key: 'shimogaki',
      image: 'https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  return (
    <div data-testid="team-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-takumi-red rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              Leadership
            </span>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {t('team.title')}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('team.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section
        ref={setRef('team')}
        data-testid="team-grid"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Leadership Row */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-2xl font-bold text-industrial-slate mb-8 text-center">
              Founders & Leadership
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div
                  key={member.key}
                  data-testid={`team-member-${member.key}`}
                  className="group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-sm mb-6">
                    <div className="aspect-[4/5]">
                      <img
                        src={member.image}
                        alt={t(`team.members.${member.key}.name`)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-slate/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-sm flex items-center justify-center text-takumi-red hover:bg-takumi-red hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-manrope text-xl font-bold text-industrial-slate">
                      {t(`team.members.${member.key}.name`)}
                    </h3>
                    <p className="text-takumi-red font-medium mb-3">
                      {t(`team.members.${member.key}.role`)}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`team.members.${member.key}.bio`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Directors & Advisors */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-manrope text-2xl font-bold text-industrial-slate mb-8 text-center">
              Directors & Advisors
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {teamMembers.slice(3).map((member, index) => (
                <div
                  key={member.key}
                  data-testid={`team-member-${member.key}`}
                  className="group flex space-x-6"
                >
                  <div className="relative overflow-hidden rounded-sm flex-shrink-0 w-32 h-32">
                    <img
                      src={member.image}
                      alt={t(`team.members.${member.key}.name`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-manrope text-lg font-bold text-industrial-slate">
                      {t(`team.members.${member.key}.name`)}
                    </h3>
                    <p className="text-takumi-red font-medium text-sm mb-2">
                      {t(`team.members.${member.key}.role`)}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`team.members.${member.key}.bio`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section
        ref={setRef('engineering')}
        data-testid="engineering-section"
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible.engineering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div>
              <img
                src="https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Engineering Team"
                className="rounded-sm shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-industrial-slate">
                Engineering Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our integrated engineering teams bring together expertise across multiple 
                disciplines to deliver comprehensive motion control solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-sm border border-gray-100">
                  <span className="text-takumi-red font-bold text-2xl">MBSE</span>
                  <p className="text-gray-600 text-sm mt-1">Model Based System Engineering</p>
                </div>
                <div className="p-4 bg-white rounded-sm border border-gray-100">
                  <span className="text-takumi-red font-bold text-2xl">HW/SW</span>
                  <p className="text-gray-600 text-sm mt-1">Hardware & Software Engineering</p>
                </div>
                <div className="p-4 bg-white rounded-sm border border-gray-100">
                  <span className="text-takumi-red font-bold text-2xl">PoC</span>
                  <p className="text-gray-600 text-sm mt-1">Prototype Manufacturing</p>
                </div>
                <div className="p-4 bg-white rounded-sm border border-gray-100">
                  <span className="text-takumi-red font-bold text-2xl">SIV</span>
                  <p className="text-gray-600 text-sm mt-1">Integration & Validation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-industrial-slate text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented engineers and innovators to join our mission 
            of powering the future of motion control.
          </p>
          <a
            href="/contact"
            data-testid="team-careers-cta"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-takumi-red text-white font-semibold rounded-sm hover:bg-takumi-red-dark transition-colors"
          >
            <span>View Opportunities</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
