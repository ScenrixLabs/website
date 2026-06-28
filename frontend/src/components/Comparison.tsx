import { useTranslation } from 'react-i18next';
import { Clock, Check } from 'lucide-react';

const Comparison = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <h2 className="text-center mb-8">{t('comparison.title')}</h2>
        
        <div className="grid grid-cols-2 gap-8">
          
          {/* Traditional */}
          <div className="glass-panel" style={{ opacity: 0.8, borderColor: '#4a1515' }}>
            <h3 style={{ color: '#fca5a5' }} className="mb-4">{t('comparison.traditional')}</h3>
            <div className="flex-col gap-4">
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.research')}</span> <span>4h</span>
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.seo')}</span> <span>2h</span>
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.outline')}</span> <span>1h</span>
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.writing')}</span> <span>5h</span>
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.factCheck')}</span> <span>2h</span>
              </div>
              <div className="flex justify-between mt-4 font-bold" style={{ fontSize: '1.5rem' }}>
                <span>Total</span> <span style={{ color: '#fca5a5' }}><Clock size={20} className="inline mr-2"/>{t('comparison.traditionalTime')}</span>
              </div>
            </div>
          </div>

          {/* Scenrix */}
          <div className="glass-panel" style={{ borderColor: 'var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--accent-primary)' }}></div>
            <h3 style={{ color: 'var(--accent-primary)' }} className="mb-4">{t('comparison.scenrix')}</h3>
            <div className="flex-col gap-4">
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.research')}</span> <Check color="#22c55e" size={20} />
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.seo')}</span> <Check color="#22c55e" size={20} />
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.outline')}</span> <Check color="#22c55e" size={20} />
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.writing')}</span> <Check color="#22c55e" size={20} />
              </div>
              <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <span>{t('comparison.factCheck')}</span> <Check color="#22c55e" size={20} />
              </div>
              <div className="flex justify-between mt-4 font-bold" style={{ fontSize: '1.5rem' }}>
                <span>Total</span> <span style={{ color: 'var(--accent-primary)' }}><Clock size={20} className="inline mr-2"/>{t('comparison.scenrixTime')}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
