

const Scope: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <h3 style={{ color: '#86efac' }}>MVP Scope (First Product)</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
              <li>Topic Input</li>
              <li>Automated Research</li>
              <li>Trend & SEO Context</li>
              <li>Script Generation</li>
              <li>Fact-Checking</li>
              <li>Export Package</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fca5a5' }}>Explicitly Out of Scope</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
              <li>Direct YouTube publishing</li>
              <li>Video / Image generation</li>
              <li>Team collaboration</li>
              <li>Mobile App</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scope;
