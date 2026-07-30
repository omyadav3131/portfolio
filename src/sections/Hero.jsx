import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import ResumeViewer from '../components/ResumeViewer';
import SocialLinks from '../components/SocialLinks';

const roles = ['Java Developer', 'Software Developer', 'Data Analyst'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9, x: 20 },
  show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100);
    }
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-orange-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[80vh]">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Greeting Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block py-2 px-4 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] text-xs font-semibold tracking-wide">
              Hi! I'm Om Yadav — Based in India
            </span>
          </motion.div>

          {/* Huge Typography */}
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-2">
            Creative Thinker &
          </motion.h1>
          <motion.div variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-6 min-h-[1.2em]">
            <span>{text}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          {/* Subtext */}
          <motion.p variants={fadeUp} className="text-gray-400 max-w-lg text-lg mb-8 leading-relaxed">
            I build robust backend systems and extract meaningful insights from complex datasets, solving problems and inspiring success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 bg-transparent text-[#4ade80] border border-[#4ade80] font-semibold px-8 py-3 rounded-full hover:bg-[#4ade80]/10 transition-all"
            >
              <FiDownload className="text-lg" />
              View Resume
            </button>
            <ScrollLink to="projects" smooth={true} duration={600} offset={-72}>
              <button className="flex items-center gap-2 bg-[#4ade80] text-black border border-[#4ade80] font-semibold px-8 py-3 rounded-full hover:bg-[#22c55e] transition-all">
                View Projects
                <FiArrowRight />
              </button>
            </ScrollLink>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp}>
             <SocialLinks direction="horizontal" />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Profile Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0"
          variants={imageVariant}
          initial="hidden"
          animate="show"
        >
          <div className="relative w-full max-w-md">
            {/* Card wrapper */}
            <div className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-orange-500/20 p-3 md:p-4 rounded-3xl shadow-[0_0_40px_rgba(249,115,22,0.15)] relative group">
              {/* Inner card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative w-full rounded-2xl overflow-hidden bg-transparent flex items-center justify-center">
                <img 
                  src="/profile.jpg" 
                  alt="Om Yadav" 
                  className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  style={{ maxHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}

export default Hero;
