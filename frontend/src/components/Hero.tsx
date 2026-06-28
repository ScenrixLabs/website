import { useTranslation } from 'react-i18next';
import { Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p < 100 ? p + 2 : 0));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ paddingTop: '10rem' }} id="product">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-8">
          
          {/* Left: Text & CTA */}
          <div>
            <h1>
              {t('hero.title').split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? <span key={i} className="text-accent">{word}</span> : word + ' '
              )}
            </h1>
            <p className="mb-8" style={{ fontSize: '1.25rem', maxWidth: '90%' }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">
                <Sparkles size={18} />
                {t('hero.ctaPrimary')}
              </button>
              <button className="btn btn-secondary">
                <Play size={18} />
                {t('hero.ctaSecondary')}
              </button>
            </div>
            
            <div className="flex gap-4 mt-8" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent"/> Structured pipeline</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent"/> Fact-checked output</span>
            </div>
          </div>

          {/* Right: Live UI Mockup */}
          <div className="glass-panel" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'var(--accent-primary)', filter: 'blur(60px)', zIndex: -1, opacity: 0.5 }}></div>
            
            <div className="flex items-center gap-2 mb-4" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }}></div>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#eab308' }}></div>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }}></div>
              <span style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Scenrix Pipeline · Active</span>
            </div>

            <div className="flex-col gap-4">
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Topic:</div>
                <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>Why Ancient Rome Disappeared</div>
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <div className="flex justify-between text-sm mb-2">
                  <span style={{ color: 'var(--accent-primary)' }}>Research Agent</span>
                  <span>{progress}%</span>
                </div>
                <div style={{ width: '100%', height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ width: `${progress}%`, height: '100%', background: 'var(--accent-primary)', transition: 'width 0.1s linear' }}></div>
                </div>
                <div className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
                  {progress < 100 ? 'Scanning 200+ publications...' : '132 sources found.'}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', opacity: progress > 50 ? 1 : 0.3, transition: 'opacity 0.5s ease' }}>
                <div className="flex justify-between text-sm mb-2">
                  <span>Trend Agent</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Pending</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Waiting for research completion...</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
