
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Education from './sections/Education';
import CodingProfiles from './sections/CodingProfiles';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Education />
          <CodingProfiles />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
