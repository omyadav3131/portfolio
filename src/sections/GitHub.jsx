import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiGitBranch } from 'react-icons/fi';

const GITHUB_USERNAME = 'omyadav3131';
const API_BASE = 'https://api.github.com';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function GitHub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`${API_BASE}/users/${GITHUB_USERNAME}`),
          fetch(`${API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        if (!cancelled) {
          setProfile(profileData);
          const sorted = reposData
            .filter(r => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 3);
            
          const unique = sorted.filter((repo, index, self) => 
            index === self.findIndex(r => r.id === repo.id)
          );
          setRepos(unique);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
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
            <span className="text-orange-500">GitHub</span> <span className="text-white">Activity</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Open-source contributions and top repositories</p>
        </motion.div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-10 h-10 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin mb-4" />
            <p className="text-gray-400 text-sm">Fetching GitHub data...</p>
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-red-400 text-sm mb-4 bg-red-400/10 border border-red-400/20 px-4 py-2 rounded-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-transparent border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500/10 transition-colors text-sm font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && profile && (
          <div className="space-y-12">
            
            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { label: 'Public Repos', value: profile.public_repos },
                { label: 'Followers', value: profile.followers },
                { label: 'Following', value: profile.following },
                { label: 'Top Languages', value: 'Java & Python' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#111111] border border-orange-500/10 rounded-2xl p-6 text-center hover:border-orange-500/30 hover:shadow-[0_0_15px_rgba(249,115,22,0.05)] transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-500 uppercase text-xs font-semibold tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Repos Row */}
            {repos.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-white/10 flex-grow" />
                  <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Top Repositories</span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {repos.map(repo => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#111111] rounded-2xl p-5 border border-orange-500/10 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(249,115,22,0.08)] transition-all group flex flex-col h-full"
                    >
                      <h4 className="text-orange-500 font-bold text-lg mb-2 truncate group-hover:text-white transition-colors">
                        {repo.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
                        {repo.description || 'No description provided.'}
                      </p>
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-4 border-t border-white/5">
                        <span className="bg-[#1a1a1a] text-gray-400 text-xs px-2.5 py-1 rounded-full border border-white/5 font-medium flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-orange-500" />
                          {repo.language || 'Code'}
                        </span>
                        
                        <div className="flex items-center gap-3 text-gray-400 text-xs font-medium">
                          <span className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                            <FiStar className="text-[14px]" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                            <FiGitBranch className="text-[14px]" /> {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* View Full Profile CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="text-center pt-4"
            >
              <a 
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full border border-white/10 transition-colors font-medium text-sm"
              >
                View Full GitHub Profile
              </a>
            </motion.div>

          </div>
        )}
      </div>
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="border-t border-white/5 mx-auto max-w-6xl" />
      </div>
    </section>
  );
}

export default GitHub;
