import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Experience() {
  const educationItems = experience.filter(item => item.type === 'education');
  const achievementItems = experience.filter(item => item.type === 'achievement');

  return (
    <section id="experience" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-500">Education</span> <span className="text-white">& Achievements</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">My academic journey and seminars</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-500/20 pb-3 mb-6">
              Education
            </h3>
            
            <div className="relative pl-6 border-l-2 border-orange-500/30 space-y-6">
              {educationItems.map((item, i) => (
                <div key={item.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-6 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300" />
                  
                  {/* Card */}
                  <div className="relative bg-[#111111] border border-white/5 rounded-xl p-5 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-white font-semibold text-base">{item.title}</h4>
                      <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-0.5 rounded border border-orange-500/20 whitespace-nowrap">
                        {item.dateRange}
                      </span>
                    </div>
                    <p className="text-green-400 text-sm mt-1">
                      {item.organization} {item.location && `· ${item.location}`}
                    </p>
                    {item.description && (
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.points && item.points.length > 0 && (
                      <ul className="text-gray-500 text-xs mt-1 list-none space-y-1">
                        {item.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-orange-400/60 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-500/20 pb-3 mb-6">
              Workshops & Seminars
            </h3>
            
            <div className="relative pl-6 border-l-2 border-orange-500/30 space-y-6">
              {achievementItems.map((item, i) => (
                <div key={item.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-6 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300" />
                  
                  {/* Card */}
                  <div className="relative bg-[#111111] border border-white/5 rounded-xl p-5 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-white font-semibold text-base">{item.title}</h4>
                      <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-0.5 rounded border border-orange-500/20 whitespace-nowrap">
                        {item.dateRange}
                      </span>
                    </div>
                    <p className="text-green-400 text-sm mt-1">
                      {item.organization} {item.location && `· ${item.location}`}
                    </p>
                    {item.description && (
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.points && item.points.length > 0 && (
                      <ul className="text-gray-500 text-xs mt-1 list-none space-y-1">
                        {item.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-orange-400/60 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="border-t border-white/5 mx-auto max-w-6xl" />
      </div>
    </section>
  );
}

export default Experience;
