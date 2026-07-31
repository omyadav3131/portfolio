import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';

import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Projects from './components/Projects.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import SplashLoader from './components/SplashLoader';

export const ThemeContext = createContext();

function App() {
  const [splashDone, setSplashDone] = useState(true);

  const particlesContainerRef = useRef(null);

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark'
  );

  localStorage.setItem('theme', theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Stable callback reference
  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  const particlesOptions = useMemo(() => {
    return {
      background: {
        color: theme === 'dark' ? '#1c1c1c' : '#fafafa',
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },

        color: {
          value: theme === 'dark' ? '#ffffff' : '#000000',
        },

        shape: {
          type: 'circle',
        },

        opacity: {
          value: {
            min: 0.3,
            max: 0.6,
          },

          random: true,

          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },

        size: {
          value: {
            min: 2.5,
            max: 3,
          },

          random: true,

          anim: {
            enable: true,
            speed: 2,
            size_min: 1,
            sync: false,
          },
        },

        links: {
          enable: true,
          distance: 180,
          color: theme === 'dark' ? '#00BFFF' : '#1a73e8',
          opacity: 0.2,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
        },
      },

      interactivity: {
        // detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          },

          onClick: {
            enable: false,
          },

          resize: {
            enable: true,
          },
        },

        modes: {
          grab: {
            distance: 150,

            line_linked: {
              opacity: 0.2,
              color: '#00BFFF',
            },
          },
        },
      },

      detectRetina: true,
    };
  }, [theme]);

  useEffect(() => {
    // Gate particles until splash completes
    if (!splashDone) return;

    const initParticles = async () => {
      if (!particlesContainerRef.current) return;

      try {
        await loadSlim(tsParticles);

        await tsParticles.load({
          id: 'tsparticles',
          element: particlesContainerRef.current,
          options: particlesOptions,
        });
      } catch (error) {
        console.error('tsParticles failed:', error);
      }
    };

    initParticles();

    return () => {
      const container = tsParticles
        .dom()
        .find((c) => c.id === 'tsparticles');

      container?.destroy();
    };
  }, [particlesOptions, splashDone]);

  return (
    <div className="relative min-h-screen w-full bg-transparent">
      {/* Heavy subtree mounts */}
      {splashDone && (
        <>
          <div
            id="tsparticles"
            ref={particlesContainerRef}
            className="absolute inset-0 w-full h-full particles-canvas"
            style={{
              minHeight: '100vh',
              zIndex: -10,
            }}
          />

          <ThemeContext.Provider
            value={{ theme, toggleTheme }}
          >
            <Navbar />
            <Hero />
            <ResumeSection />
            <Skills />
            <Projects />
            <AboutMe />
            <Certifications />
            <Education />
            <Contact />
          </ThemeContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;