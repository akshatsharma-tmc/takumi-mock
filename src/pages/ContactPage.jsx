import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, Phone, Send, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-industrial-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-takumi-red rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-takumi-red font-semibold tracking-widest uppercase text-sm">
              Contact
            </span>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-manrope text-2xl font-bold text-industrial-slate mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-testid="contact-name-input"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-takumi-red transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="contact-email-input"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-takumi-red transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      data-testid="contact-company-input"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-takumi-red transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      data-testid="contact-subject-input"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-takumi-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    data-testid="contact-message-input"
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-takumi-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="contact-submit-btn"
                  className="w-full sm:w-auto px-8 py-4 bg-takumi-red text-white font-semibold rounded-sm hover:bg-takumi-red-dark transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</span>
                  <Send className="w-5 h-5" />
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div data-testid="contact-success-message" className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-3 rounded-sm">
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('contact.form.success')}</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div data-testid="contact-error-message" className="flex items-center space-x-2 text-red-600 bg-red-50 px-4 py-3 rounded-sm">
                    <XCircle className="w-5 h-5" />
                    <span>{t('contact.form.error')}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="font-manrope text-2xl font-bold text-industrial-slate mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* India Office */}
                <div className="bg-gray-50 p-6 rounded-sm">
                  <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-4 flex items-center">
                    <span className="mr-2">🇮🇳</span> India Headquarters
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-takumi-red flex-shrink-0 mt-0.5" />
                      <span>Bangalore, Karnataka, India</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="w-5 h-5 text-takumi-red flex-shrink-0" />
                      <a href="mailto:contact@takumimotioncontrols.com" className="hover:text-takumi-red transition-colors">
                        contact@takumimotioncontrols.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="w-5 h-5 text-takumi-red flex-shrink-0" />
                      <span>+91 80 XXXX XXXX</span>
                    </div>
                  </div>
                </div>

                {/* Japan Office */}
                <div className="bg-gray-50 p-6 rounded-sm">
                  <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-4 flex items-center">
                    <span className="mr-2">🇯🇵</span> Japan Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-takumi-red flex-shrink-0 mt-0.5" />
                      <span>Kyoto, Japan</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="w-5 h-5 text-takumi-red flex-shrink-0" />
                      <a href="mailto:japan@takumimotioncontrols.com" className="hover:text-takumi-red transition-colors">
                        japan@takumimotioncontrols.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-manrope text-lg font-bold text-industrial-slate mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/takumimotioncontrols"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gray-600 hover:bg-takumi-red hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/takumitweets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gray-600 hover:bg-takumi-red hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/takumimotioncontrols"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gray-600 hover:bg-takumi-red hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Interactive map coming soon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
