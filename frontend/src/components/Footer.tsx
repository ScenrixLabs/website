import { useTranslation } from 'react-i18next';
import { GITHUB_URL, CONTACT_EMAIL, DOCS_URL } from '../constants';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', padding: '3rem 0' }}>
      <div className="container flex justify-center items-center gap-4" style={{ gap: '2rem' }}>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
          GitHub
        </a>
        <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
          {t('nav.docs')}
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--text-secondary)' }}>
          {t('nav.contact')}
        </a>
      </div>
      <div className="text-center mt-8">
        <p style={{ fontSize: '0.875rem', color: '#525252' }}>
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
