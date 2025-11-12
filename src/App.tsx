import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import ProjectsWeb from './components/ProjectsWeb';
import Design from './components/Design';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Certifications />
      <ProjectsWeb />
      <Design />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
