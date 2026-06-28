

const WhyScenrix: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 items-center" style={{ gap: '4rem' }}>
          <div>
            <h2>Why Scenrix</h2>
            <p>
              AI tools generate answers.<br />
              Scenrix orchestrates specialized AI agents into a repeatable production pipeline.
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--accent-primary)' }}>Beyond Chatbots</h3>
            <p style={{ marginBottom: 0, fontSize: '1rem' }}>
              Stop relying on generic, zero-shot LLM outputs. True production requires structured multi-step reasoning, contextual awareness, and automated tool use. Scenrix gives you exactly that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyScenrix;
