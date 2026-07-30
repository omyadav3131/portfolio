import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiCode } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-500">My</span> <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Featured work and open-source contributions</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/40 hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)] transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* Image Area */}
              <div className="relative overflow-hidden h-56 md:h-64 bg-[#0a0a0a]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-700 text-4xl" aria-hidden="true">
                    <FiCode />
                  </div>
                )}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-[#4ade80]/10 text-[#4ade80] text-xs px-3 py-1 rounded-full border border-[#4ade80]/20 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <FaGithub className="text-lg" />
                      Source Code
                    </a>
                  ) : <div />}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-black hover:bg-orange-400 text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
                    >
                      Live Demo
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="border-t border-white/5 mx-auto max-w-6xl" />
      </div>
    </section>
  );
}

export default Projects;
