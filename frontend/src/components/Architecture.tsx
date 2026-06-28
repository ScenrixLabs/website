

const Architecture: React.FC = () => {
  const features = [
    { title: "Orchestrator", desc: "Manages state and transitions between agents." },
    { title: "AI Registry", desc: "Maintains specialized prompts and capabilities." },
    { title: "Provider-Agnostic", desc: "Route to OpenAI, Anthropic, or local models dynamically." },
    { title: "Checkpoints", desc: "Resume pipelines from any intermediate stage." },
    { title: "Observability", desc: "Full trace of agent actions and API calls." },
    { title: "Human Override", desc: "Inject manual edits between automated steps." }
  ];

  return (
    <section>
      <div className="container">
        <h2 className="text-center">Core Architecture</h2>
        <p className="text-center mx-auto" style={{ margin: '0 auto 3rem auto' }}>
          Designed for reliability, transparency, and control.
        </p>
        <div className="grid grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem' }}>{f.title}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
