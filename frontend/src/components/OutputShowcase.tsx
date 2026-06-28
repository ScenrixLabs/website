import { useTranslation } from 'react-i18next';
import { PackageOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

const OutputShowcase = () => {
  const { t } = useTranslation();

  const checklists = t('output.checklists', { returnObjects: true }) as string[];

  return (
    <section style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2>{t('output.title')}</h2>
          <p>{t('output.subtitle')}</p>
        </div>

        <div className="flex flex-col items-center gap-8">
          
          {/* Top Flow */}
          <div className="flex items-center gap-4 text-center">
            <div className="glass-panel" style={{ padding: '1rem 2rem' }}>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('output.input').split(':')[0]}</span>
              <div style={{ fontWeight: 600 }}>{t('output.input').split(':')[1]}</div>
            </div>
            <ArrowRight className="text-accent" />
            <div className="glass-panel" style={{ padding: '1rem 2rem', borderColor: 'var(--accent-primary)', background: 'var(--accent-glow)' }}>
              <div style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{t('output.processing')}</div>
            </div>
            <ArrowRight className="text-accent" />
          </div>

          {/* Final Result Card */}
          <div className="glass-panel" style={{ width: '100%', maxWidth: 600 }}>
            <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 text-accent">
                <PackageOpen size={24} />
                <h3 style={{ margin: 0 }}>{t('output.readyPackage')}</h3>
              </div>
              <span className="text-sm" style={{ background: '#22c55e20', color: '#22c55e', padding: '0.2rem 0.6rem', borderRadius: 4 }}>Complete</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {checklists.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={18} color="#22c55e" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="btn btn-primary w-full">Export Package</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OutputShowcase;
