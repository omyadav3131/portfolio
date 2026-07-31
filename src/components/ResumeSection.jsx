import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { ExternalLink, Download } from 'lucide-react';

function ResumeSection() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="resume"
            className="py-24 px-6 relative overflow-hidden bg-transparent"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 45, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
                        theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                    }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    
                    {/* Left Text Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/3 flex flex-col justify-center sticky top-24"
                    >
                        <h4 className={`text-sm tracking-[0.2em] font-semibold mb-4 uppercase ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}>
                            Resume
                        </h4>
                        <h2 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"}`}>
                            View my<br/>resume<br/>inline.
                        </h2>
                        
                        <div
                            className={`h-1.5 w-16 rounded-full mb-8 ${
                                theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                            }`}
                        />
                        
                        <p className={`text-lg leading-relaxed mb-10 ${theme === "dark" ? "text-[#aed9e0]/90" : "text-[#5e6472]/90"}`}>
                            Open the resume viewer to see the PDF directly in your browser. No download prompt, just a clean read.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                                    theme === "dark"
                                        ? "bg-transparent text-[#b8f2e6] border-[#b8f2e6]/40 hover:bg-[#b8f2e6]/10 hover:border-[#b8f2e6]"
                                        : "bg-transparent text-[#5e6472] border-[#5e6472]/30 hover:bg-[#5e6472]/10 hover:border-[#5e6472]"
                                }`}
                            >
                                OPEN RESUME
                                <ExternalLink size={18} />
                            </a>
                            
                            <a 
                                href="/resume.pdf"
                                download="Om_Yadav_Resume.pdf"
                                className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                                    theme === "dark"
                                        ? "bg-[#b8f2e6]/10 text-[#b8f2e6] border-[#b8f2e6]/20 hover:bg-[#b8f2e6]/20 hover:border-[#b8f2e6]/50"
                                        : "bg-[#aed9e0]/20 text-[#5e6472] border-[#aed9e0]/40 hover:bg-[#aed9e0]/30 hover:border-[#aed9e0]/60"
                                }`}
                            >
                                PDF FILE
                                <Download size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right PDF Viewer Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full lg:w-2/3"
                    >
                        <div className={`p-4 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                            theme === 'dark'
                                ? 'bg-[#1c1c1c]/50 border-[#b8f2e6]/20 shadow-2xl shadow-[#b8f2e6]/5'
                                : 'bg-white/50 border-[#aed9e0]/40 shadow-2xl shadow-[#aed9e0]/10'
                        }`}>
                            <div className={`w-full rounded-2xl overflow-hidden border ${
                                theme === 'dark' ? 'border-[#b8f2e6]/20' : 'border-[#aed9e0]/40'
                            }`} style={{ height: '75vh', minHeight: '600px' }}>
                                <iframe 
                                    src="/resume.pdf#view=FitH" 
                                    title="Resume"
                                    className="w-full h-full"
                                    style={{ border: 'none' }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ResumeSection;
