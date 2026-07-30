import { motion } from 'framer-motion';
import { FiMapPin, FiBook, FiCalendar } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { number: '10+', label: 'Projects Built' },
  { number: '30+', label: 'Skills Mastered' },
  { number: '4',   label: 'Certifications' },
];

const details = [
  { icon: <FiMapPin />,   label: 'Location',    value: 'Navi Mumbai, India' },
  { icon: <FiBook />,     label: 'College',     value: 'MCA Student, BVIM & IT' },
  { icon: <FiCalendar />, label: 'Graduation',  value: '2027 (Expected)' },
];

function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 py-12 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-500">About</span> <span className="text-white">Me</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Get to know me a little better</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Stats Row */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#111111] border border-orange-500/20 rounded-3xl p-8 text-center flex-1 hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.08)] transition-all duration-300"
              >
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Bio Column */}
            <motion.div variants={fadeUp} className="bg-[#111111] border border-orange-500/20 rounded-3xl p-8 shadow-[0_0_15px_rgba(249,115,22,0.05)]">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500" />
                Who am I?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                I'm a Software Developer and Data Analyst with a strong foundation in Java, 
                Python, SQL, Pandas, and Machine Learning. I thrive on building scalable backend systems 
                and extracting meaningful insights from complex datasets.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                With hands-on experience in Spring Boot, React, and data visualization tools like 
                Power BI, I bring a versatile perspective to every project. I'm driven by curiosity, 
                clean code practices, and a desire to deliver data-driven, practical solutions.
              </p>
            </motion.div>

            {/* Info Column */}
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Info Rows */}
              <div className="bg-[#111111] border border-orange-500/20 rounded-3xl p-6">
                <div className="flex flex-col gap-1">
                  {details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-orange-500/10 last:border-b-0">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 text-lg flex-shrink-0">
                        {detail.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mb-0.5">{detail.label}</div>
                        <div className="text-white text-sm font-medium">{detail.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Seeking Box */}
              <div className="bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-l-orange-500 border border-t-orange-500/20 border-r-orange-500/10 border-b-orange-500/20 rounded-2xl p-6">
                <div className="text-orange-400 text-xs uppercase tracking-wider font-semibold mb-2">Currently Seeking</div>
                <div className="text-white text-sm font-medium leading-relaxed">
                  Software Development / Data Analytics roles
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="border-t border-white/5 mx-auto max-w-6xl" />
      </div>
    </section>
  );
}

export default About;
