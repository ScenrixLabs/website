import Header from './components/Header';
import Hero from './components/Hero';
import PipelineExplorer from './components/PipelineExplorer';
import Comparison from './components/Comparison';
import OutputShowcase from './components/OutputShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PipelineExplorer />
        <Comparison />
        <OutputShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
