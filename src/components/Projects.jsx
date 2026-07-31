import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { projectsData } from '../data/projectsData';

function Projects() {
    const { theme } = useContext(ThemeContext);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const featuredProjects = projectsData.filter(p => p.featured);
    const otherProjects = projectsData.filter(p => !p.featured);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Delay clearing selected project to allow exit animation
        setTimeout(() => setSelectedProject(null), 300);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section
            id="projects"
            className="py-24 px-6 relative overflow-hidden bg-transparent"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className={`text-5xl md:text-6xl font-bold mb-4 ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                            }`}
                    >
                        Projects
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1 mx-auto rounded-full mb-6 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                            }`}
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
                            } opacity-90`}
                    >
                        Here are some of my recent projects that showcase my skills and passion for Data Analytics & Java Devloper
                    </motion.p>
                </motion.div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <div className="mb-16">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`text-2xl md:text-3xl font-bold mb-8 ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                                }`}
                        >
                            Featured Projects
                        </motion.h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {featuredProjects.map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => handleProjectClick(project)}
                                />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <div className="mb-16">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`text-2xl md:text-3xl font-bold mb-8 ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                                }`}
                        >
                            Other Projects
                        </motion.h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {otherProjects.map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => handleProjectClick(project)}
                                    isCompact={true}
                                />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* View More Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com/omyadav3131"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${theme === "dark"
                                ? "bg-[#b8f2e6]/10 text-[#b8f2e6] border-2 border-[#b8f2e6]/30 hover:bg-[#b8f2e6]/20 hover:border-[#b8f2e6]/50"
                                : "bg-[#aed9e0]/20 text-[#5e6472] border-2 border-[#aed9e0]/40 hover:bg-[#aed9e0]/30 hover:border-[#aed9e0]/60"
                            }`}
                    >
                        <span>View More Projects</span>
                        <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default Projects;