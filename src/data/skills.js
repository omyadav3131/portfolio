import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGitAlt, FaDocker, FaGithub, FaLinux,
  FaDatabase
} from 'react-icons/fa';
import {
  SiJavascript, SiSpringboot, SiMysql, SiPostgresql,
  SiSqlite, SiScikitlearn, SiFlask, SiReact,
  SiPandas, SiNumpy, SiJupyter, SiPostman, SiVercel,
  SiVite, SiTailwindcss, SiBootstrap, SiIntellijidea
} from 'react-icons/si';
import { TbChartBar, TbChartDots } from 'react-icons/tb';

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'Java',       icon: FaJava,       proficiency: 90 },
      { name: 'Python',     icon: FaPython,     proficiency: 85 },
      { name: 'C',          icon: FaJava,       proficiency: 75 }, /* using FaJava as fallback for C if needed, or omit icon. Let's just use SiJavascript for JS */
      { name: 'JavaScript', icon: SiJavascript, proficiency: 75 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React',      icon: FaReact,       proficiency: 78 },
      { name: 'HTML5',      icon: FaHtml5,       proficiency: 90 },
      { name: 'CSS3',       icon: FaCss3Alt,     proficiency: 85 },
      { name: 'Tailwind',   icon: SiTailwindcss, proficiency: 70 },
      { name: 'Bootstrap',  icon: SiBootstrap,   proficiency: 75 },
      { name: 'Vite',       icon: SiVite,        proficiency: 72 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot,   proficiency: 85 },
      { name: 'Flask',       icon: SiFlask,        proficiency: 75 },
      { name: 'SQLAlchemy',  icon: FaDatabase,     proficiency: 70 },
      { name: 'REST APIs',   icon: SiPostman,      proficiency: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'SQL',        icon: FaDatabase,   proficiency: 85 },
      { name: 'SQLite',     icon: SiSqlite,     proficiency: 80 },
      { name: 'MySQL',      icon: SiMysql,      proficiency: 80 },
      { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 70 },
    ],
  },
  {
    id: 'data-ml',
    label: 'Data & ML',
    skills: [
      { name: 'Pandas',       icon: SiPandas,       proficiency: 85 },
      { name: 'NumPy',        icon: SiNumpy,        proficiency: 80 },
      { name: 'scikit-learn', icon: SiScikitlearn,  proficiency: 75 },
      { name: 'Power BI',     icon: TbChartBar,     proficiency: 80 },
      { name: 'Matplotlib',   icon: TbChartDots,    proficiency: 75 },
      { name: 'Jupyter',      icon: SiJupyter,      proficiency: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git',        icon: FaGitAlt,       proficiency: 85 },
      { name: 'GitHub',     icon: FaGithub,       proficiency: 85 },
      { name: 'Vercel',     icon: SiVercel,       proficiency: 75 },
      { name: 'Postman',    icon: SiPostman,      proficiency: 80 },
    ],
  },
];
