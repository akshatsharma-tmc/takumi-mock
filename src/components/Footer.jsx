import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API}/newsletter`, { email });
      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer data-testid="footer" className="bg-industrial-slate text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-manrope text-3xl sm:text-4xl font-bold mb-4">
                {t('footer.newsletter.title')}
              </h3>
              <p className="text-gray-400 text-lg">
                Stay updated with our latest innovations and news.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                data-testid="newsletter-email-input"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-takumi-red transition-colors"
                required
              />
              <button
                type="submit"
                data-testid="newsletter-submit-btn"
                disabled={isSubmitting}
                className="px-8 py-4 bg-takumi-red text-white font-semibold rounded-sm hover:bg-takumi-red-dark transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? '...' : t('footer.newsletter.submit')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="lg:col-start-2 text-green-400 text-sm">{t('footer.newsletter.success')}</p>
            )}
            {submitStatus === 'error' && (
              <p className="lg:col-start-2 text-red-400 text-sm">{t('footer.newsletter.error')}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_22fe3f13-7547-4b99-be0c-1c48285a619d/artifacts/kkg75uhc_Takumi_logo.png"
                alt="Takumi Logo"
                className="h-14 w-14"
              />
              <div>
                <span className="font-manrope font-bold text-2xl">TAKUMI</span>
                <span className="block text-xs tracking-widest uppercase text-gray-400">
                  Motion Controls
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Indian Innovation with Japanese Technology. Powering the future of motion control 
              through intelligent, software-defined solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-takumi-red" />
                <span>Bangalore, India | Kyoto, Japan</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-takumi-red" />
                <span>contact@takumimotioncontrols.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-takumi-red" />
                <span>+91 80 XXXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-manrope font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.products')}
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-manrope font-bold text-lg mb-6">{t('footer.social')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/takumimotioncontrols"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-takumi-red transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/takumitweets"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-twitter"
                className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-takumi-red transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/takumimotioncontrols"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-takumi-red transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/takumimotioncontrols"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-takumi-red transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
