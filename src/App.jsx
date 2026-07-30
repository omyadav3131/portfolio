import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import GitHub from './sections/GitHub';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <GitHub />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;