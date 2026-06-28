import { useTranslation } from 'react-i18next';
import { GITHUB_URL, DOCS_URL, CONTACT_EMAIL } from '../constants';
import { Globe, ArrowRight } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <header style={{ 
      position: 'fixed', top: 0, width: '100%', zIndex: 50, 
      background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)' 
    }}>
      <div className="container flex items-center justify-between" style={{ height: '4rem' }}>
        <div className="flex items-center gap-2">
          <div style={{ width: 24, height: 24, borderRadius: 4, background: 'var(--accent-primary)' }}></div>
          <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>Scenrix</span>
        </div>

        <nav className="flex items-center gap-8" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <a href="#product">{t('nav.product')}</a>
          <a href="#how-it-works">{t('nav.howItWorks')}</a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">{t('nav.docs')}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={toggleLanguage} className="btn-icon flex items-center gap-2" title="Toggle Language">
            <Globe size={18} />
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>{i18n.language}</span>
          </button>
          <a href={GITHUB_URL} className="btn btn-secondary" style={{ padding: '0.4rem 1rem' }}>
            GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
