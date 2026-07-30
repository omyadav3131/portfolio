import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
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
            <span className="text-orange-500">My</span> <span className="text-white">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Technologies and tools I work with</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`transition-all duration-300 ${
                activeTab === cat.id 
                  ? 'bg-orange-500 text-black font-semibold px-5 py-2 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]' 
                  : 'bg-white/5 text-gray-400 border border-orange-500/20 px-5 py-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400'
              }`}
              onClick={() => setActiveTab(cat.id)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 max-w-4xl mx-auto"
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory && activeCategory.skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="w-[110px] md:w-[150px] bg-[#111111] border border-orange-500/20 rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:border-orange-500/50 hover:bg-orange-500/10 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all group"
                >
                  <div className="text-4xl text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    <Icon />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">{skill.name}</span>
                  <div className="w-8 h-0.5 bg-orange-500 mx-auto rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="border-t border-white/5 mx-auto max-w-6xl" />
      </div>
    </section>
  );
}

export default Skills;
