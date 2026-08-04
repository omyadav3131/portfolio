import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

function Education() {
  const { theme } = useContext(ThemeContext);

  const educationList = [
    {
      title: 'Master of Computer Applications (MCA)',
      company: 'Bharati Vidyapeeth Institute of Management & IT',
      period: '2025 – 2027',
      location: 'Navi Mumbai',
      type: 'Post Graduation',
      description: [],
    },
    {
      title: 'B.C.A. (Bachelor of Computer Applications)',
      company: 'Shivaji University, Kolhapur',
      period: '2022 – 2025',
      location: 'Kolhapur',
      type: 'CGPA 7.5',
      description: [],
    },

  ];

  return (
    <section
      id="education"
      className={`py-24 px-6 relative overflow-hidden bg-transparent`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === 'dark' ? 'bg-[#b8f2e6]' : 'bg-[#aed9e0]'
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
            }`}
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-1 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-[#b8f2e6]' : 'bg-[#aed9e0]'
            }`}
          />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`absolute left-0 md:left-12 top-0 w-0.5 ${
              theme === 'dark' ? 'bg-[#b8f2e6]/30' : 'bg-[#aed9e0]/40'
            }`}
          />

          {/* Education Items */}
          {educationList.map((edu, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + (index * 0.1) }}
              className="relative pl-12 md:pl-32 pb-12"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 + (index * 0.1) }}
                className={`absolute left-0 md:left-12 top-2 -translate-x-1/2 w-5 h-5 rounded-full border-4 ${
                  theme === 'dark'
                    ? 'bg-[#b8f2e6] border-[#1c1c1c]'
                    : 'bg-[#aed9e0] border-[#fafafa]'
                }`}
              >
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute inset-0 rounded-full ${
                    theme === 'dark' ? 'bg-[#b8f2e6]' : 'bg-[#aed9e0]'
                  }`}
                />
              </motion.div>

              {/* Content */}
              <div>
                {/* Header */}
                <div className="mb-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className={`text-3xl md:text-4xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
                    }`}
                  >
                    {edu.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className={`text-xl md:text-2xl font-semibold mb-4 ${
                      theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'
                    }`}
                  >
                    {edu.company}
                  </motion.p>

                  {/* Meta Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    className="flex flex-wrap gap-4"
                  >
                    <div className={`flex items-center gap-2 text-sm md:text-base ${
                      theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'
                    }`}>
                      <Calendar size={16} className={theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#aed9e0]'} />
                      <span>{edu.period}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-sm md:text-base ${
                      theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'
                    }`}>
                      <MapPin size={16} className={theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#aed9e0]'} />
                      <span>{edu.location}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-sm md:text-base ${
                      theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'
                    }`}>
                      <BookOpen size={16} className={theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#aed9e0]'} />
                      <span>{edu.type}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Description */}
                {edu.description && edu.description.length > 0 && (
                  <ul className="space-y-3">
                    {edu.description.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) + idx * 0.1 }}
                        className="group/item"
                      >
                        <motion.div
                          whileHover={{ x: 8 }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 90 }}
                            className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                              theme === 'dark' ? 'bg-[#b8f2e6]' : 'bg-[#aed9e0]'
                            }`}
                          />
                          <span
                            className={`text-base md:text-lg leading-relaxed ${
                              theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'
                            } opacity-85 group-hover/item:opacity-100 transition-opacity`}
                          >
                            {point}
                          </span>
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;