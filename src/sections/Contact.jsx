import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'omyadav3131@gmail.com',
    href: 'mailto:omyadav3131@gmail.com',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/om-yadav-5b6b09251',
    href: 'https://www.linkedin.com/in/om-yadav-5b6b09251/',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFeedback(null);
      return;
    }

    setFeedback({ type: 'success', text: "Message sent successfully! I'll get back to you soon." });
    setFormData({ name: '', email: '', message: '' });
    setErrors({});

    setTimeout(() => setFeedback(null), 5000);
  };

  return (
    <>
      <section id="contact" className="relative pt-24 pb-20 bg-[#0a0a0a] overflow-hidden">
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
              <span className="text-white">Contact</span> <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Let's work together</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            {/* Left: Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                I'm actively seeking campus placement opportunities in Java development 
                and data analytics. Feel free to reach out — I'd love to connect!
              </p>

              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-orange-500/10 p-3 rounded-xl text-orange-400 flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-orange-500 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block" htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={`w-full bg-[#0a0a0a] border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-orange-500/50'} rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all`}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block" htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={`w-full bg-[#0a0a0a] border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-orange-500/50'} rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all`}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className={`w-full bg-[#0a0a0a] border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-orange-500/50'} rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all min-h-[120px] resize-none`}
                      placeholder="Tell me about your opportunity or project..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-400 text-black font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <FiSend className="text-lg" />
                    Send Message
                  </button>

                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 rounded-lg text-sm text-center ${feedback.type === 'success' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                    >
                      {feedback.text}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-8 mt-0 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Let's work <span className="text-orange-400">together!</span></h2>
        <p className="text-gray-500 text-sm">
          Made with <span className="text-red-500">❤️</span> by Om Yadav
        </p>
      </footer>
    </>
  );
}

export default Contact;
