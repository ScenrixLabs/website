import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BrainCircuit, Search, TrendingUp, BarChart, PenTool, ShieldCheck } from 'lucide-react';

const PipelineExplorer = () => {
  const { t } = useTranslation();
  const [activeAgent, setActiveAgent] = useState('research');

  const agents = [
    { id: 'planner', icon: BrainCircuit, label: t('explorer.planner'), desc: t('explorer.plannerDesc') },
    { id: 'research', icon: Search, label: t('explorer.research'), desc: t('explorer.researchDesc') },
    { id: 'trend', icon: TrendingUp, label: t('explorer.trend'), desc: t('explorer.trendDesc') },
    { id: 'seo', icon: BarChart, label: t('explorer.seo'), desc: t('explorer.seoDesc') },
    { id: 'writer', icon: PenTool, label: t('explorer.writer'), desc: t('explorer.writerDesc') },
    { id: 'factChecker', icon: ShieldCheck, label: t('explorer.factChecker'), desc: t('explorer.factCheckerDesc') },
  ];

  return (
    <section id="how-it-works" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2>{t('explorer.title')}</h2>
          <p>{t('explorer.subtitle')}</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          
          {/* Left Sidebar (Agents List) */}
          <div className="flex-col gap-2">
            {agents.map((agent) => {
              const Icon = agent.icon;
              const isActive = activeAgent === agent.id;
              return (
                <div 
                  key={agent.id}
                  onClick={() => setActiveAgent(agent.id)}
                  className="glass-panel"
                  style={{ 
                    padding: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem',
                    border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                    background: isActive ? 'var(--accent-glow)' : 'var(--bg-surface)'
                  }}
                >
                  <Icon size={20} className={isActive ? 'text-accent' : ''} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{agent.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{agent.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Content Area (Dynamic Mockup) */}
          <div className="glass-panel" style={{ gridColumn: 'span 2' }}>
            {activeAgent === 'research' && (
              <div>
                <h3 className="mb-4">Live Research Feed</h3>
                <div className="flex-col gap-2">
                  {['Wikipedia', 'Nature Journal', 'YouTube Transcripts', 'Reddit discussions', 'Google Scholar'].map((src, i) => (
                    <div key={i} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: 6, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{src}</span>
                      <span style={{ color: '#22c55e' }}>Analyzed</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeAgent === 'writer' && (
              <div>
                <h3 className="mb-4">Script Generation</h3>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-secondary)', padding: '1rem', background: '#000', borderRadius: 8 }}>
                  <span style={{ color: 'var(--accent-primary)' }}>[Hook]</span><br/>
                  Did you know that Ancient Rome didn't just collapse in a day?<br/><br/>
                  <span style={{ color: 'var(--accent-primary)' }}>[Body - Part 1]</span><br/>
                  According to new climate data, a combination of volcanic winters and... <span style={{ animation: 'pulseGlow 1s infinite' }}>█</span>
                </div>
              </div>
            )}

            {/* Fallback for other agents to save lines, but keeping the interactive feel */}
            {['planner', 'trend', 'seo', 'factChecker'].includes(activeAgent) && (
              <div className="flex items-center justify-center" style={{ height: '100%', color: 'var(--text-secondary)' }}>
                Processing agent output for {activeAgent.toUpperCase()}...
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PipelineExplorer;
