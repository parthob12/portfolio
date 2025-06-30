import { motion } from 'framer-motion';
import drowsinessImage from '../assets/drowsiness.jpg';
import snippetImage from '../assets/snippet.jpg';
import creditScoreImage from '../assets/credit-score.jpg';
import retailImage from '../assets/retail.jpg';
import './Projects.css';

const projects = [
  {
    title: "Driver Drowsiness Detection System",
    image: drowsinessImage,
    description: "In this project, I developed a driver drowsiness detection system using deep learning models for real-time monitoring. The system employed facial recognition algorithms to detect signs of driver fatigue and alert them to prevent accidents. I implemented the model using Python, leveraging libraries such as OpenCV and TensorFlow for computer vision and machine learning tasks. The system was deployed in a test environment, where it successfully demonstrated its potential to improve road safety. This project enhanced my skills in deep learning, computer vision, and deploying machine learning models in real-world applications.",
    repo: "https://github.com/parthob12/DrowsinessDetectionSystem",
  },
  {
    title: "Snippet Application",
    image: snippetImage,
    description: "I designed and developed a Snippet Application using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to securely share and bookmark code snippets. I implemented user authentication and data security features to ensure that user information was protected. Additionally, I integrated automated test cases to maintain the platform's stability and security. By utilizing APIs for data retrieval and submission, I was able to create a seamless user experience across different platforms. This project helped me refine my skills in full-stack development, focusing on both frontend and backend technologies.",
    repo: "https://github.com/parthob12/Snippet-Application",
  },
  {
    title: "Credit Score Classification",
    image: creditScoreImage,
    description: "For this project, I developed a credit score classification system using machine learning algorithms such as Logistic Regression, Decision Trees, and Support Vector Machines. The goal of the system was to predict creditworthiness and assist in informed decision-making for financial institutions. I deployed the model using cloud-based data pipelines for scalability and integrated interpretability features to make the results more understandable. I designed unit and functional tests to ensure the model's reliability, helping enhance its application in real-world financial decision-making. This project strengthened my expertise in machine learning and model deployment.",
    repo: "https://github.com/parthob12/Credit-Score-Classification",
  },
  {
    title: "Online Retail Platform",
    image: retailImage,
    description: "I developed a full-featured online retail platform using Python and Django, incorporating advanced security protocols for transactions and integrating payment gateways to ensure a seamless customer experience. The platform allowed for secure and efficient processing of customer orders and transactions. I also implemented automated testing suites to ensure the platform's reliability and incorporated microservices for optimized scalability and responsiveness. This project helped me improve my skills in full-stack web development, particularly in building secure and scalable e-commerce solutions.",
    repo: "https://github.com/parthob12/Digital-Commerce-Soln",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <motion.div
        className="project-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => window.open(project.repo, '_blank')}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn">
                GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects; 