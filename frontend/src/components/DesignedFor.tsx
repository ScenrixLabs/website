

const DesignedFor: React.FC = () => {
  const audiences = [
    { title: "YouTube creators", desc: "Automate research and scripting pipelines." },
    { title: "Researchers", desc: "Deep-dive analysis with automated fact-checking." },
    { title: "Content studios", desc: "Scale production without compromising quality." },
    { title: "Media teams", desc: "Coordinated content generation at scale." }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="text-center">Designed For</h2>
        <div className="grid grid-cols-4 mt-8">
          {audiences.map((a, idx) => (
            <div key={idx} className="card">
              <h3>{a.title}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignedFor;
