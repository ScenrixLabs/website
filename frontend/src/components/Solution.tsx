import { Fragment } from 'react';

const Solution: React.FC = () => {
  const agents = [
    "Planner",
    "Research",
    "Trend",
    "SEO",
    "Writer",
    "Fact Checker"
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2>The Solution: Multi-Agent Pipeline</h2>
        <p>
          Scenrix breaks down content production into specialized, isolated stages.
          Each agent produces structured output that becomes the direct context for the next stage.
        </p>
        <div className="pipeline">
          {agents.map((agent, i) => (
            <Fragment key={i}>
              <div className="pipeline-node">{agent}</div>
              {i < agents.length - 1 && <span className="pipeline-arrow">→</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
