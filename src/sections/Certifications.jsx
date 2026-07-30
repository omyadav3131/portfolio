import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../data/certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
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
            <span className="text-orange-500">My</span> <span className="text-white">Certifications</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Professional credentials and courses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.08)] transition-all group flex flex-col"
            >
              {/* Top Row: Icon + Issuer + Date */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <FiAward className="text-orange-400 text-lg flex-shrink-0" />
                  <span className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                    {cert.issuer}
                  </span>
                </div>
                <span className="text-orange-400 text-xs font-medium whitespace-nowrap">
                  {cert.date}
                </span>
              </div>

              {/* Body */}
              <h3 className="text-white font-semibold text-base mt-3">{cert.title}</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed flex-grow">{cert.description}</p>

              {/* Bottom Row: Credential ID + Verify */}
              <div className="mt-3 flex flex-col items-start">
                {cert.credentialId && (
                  <p className="text-orange-400/60 text-xs font-mono mb-2">
                    ID: {cert.credentialId}
                  </p>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-orange-500/30 text-orange-400 text-xs px-3 py-1 rounded-full hover:bg-orange-500/10 mt-3 transition-colors"
                  >
                    <FiExternalLink /> Verify
                  </a>
                )}
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

export default Certifications;
