import repodoctorImg from '../assets/projects/repodoctor.png';
import retailSalesImg from '../assets/projects/retailsales.png';
import quizcraftImg from '../assets/projects/quizcraft.png';
import powerbiImg from '../assets/projects/powerbi.png';

export const projects = [
  {
    id: 'repodoctor',
    title: 'RepoDoctor – GitHub Repository Quality Analyzer',
    description:
      'Full-stack GitHub repository analyzer with a 6-dimensional scoring engine evaluating code quality, commit hygiene, and documentation. Implemented parallel async file fetching using CompletableFuture to analyze 15+ repositories in 4–10 seconds. Generates professional PDF analysis reports.',
    tags: ['Java 21', 'Spring Boot 3.5', 'React 18', 'OpenPDF', 'JFreeChart', 'Vercel', 'Render'],
    image: repodoctorImg,
    github: 'https://github.com/omyadav3131/Repo-doctor',
    live: 'https://repo-doctor-tau.vercel.app',
  },
  {
    id: 'retail-sales-forecasting',
    title: 'Retail Sales Forecasting & Business Analytics',
    description:
      'End-to-end retail sales forecasting project developing and comparing Linear Regression and Random Forest Regressor models. Includes data preprocessing, feature engineering, and an interactive Power BI dashboard to analyze sales by item type, outlet type, and price-sales relationships.',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Power BI'],
    image: retailSalesImg,
    github: 'https://github.com/omyadav3131/Retail-Sales-Forecasting',
    live: null,
  },
  {
    id: 'quizcraft',
    title: 'Quiz Craft – Online Quiz Platform',
    description:
      'Web-based quiz platform with category and difficulty-based quizzes. Features automated scoring, leaderboards, and an admin panel to manage questions and users using a relational database design.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'HTML', 'CSS', 'Bootstrap'],
    image: quizcraftImg,
    github: 'https://github.com/omyadav3131/QuizCraft',
    live: null,
  },
  {
    id: 'powerbi-retail-revenue',
    title: 'Retail Revenue Analysis Dashboard',
    description:
      'Interactive Power BI dashboard analyzing online retail revenue trends, high-performing countries, and customer insights. Built to provide actionable business intelligence metrics from complex sales datasets.',
    tags: ['Power BI', 'Python', 'Pandas', 'NumPy'],
    image: powerbiImg,
    github: 'https://github.com/omyadav3131/powerbi-retail-revenue-analysis',
    live: null,
  }
];
