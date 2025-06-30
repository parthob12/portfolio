import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  'Python',
  'C++',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'Vue.js',
  'Bootstrap',
  'Git',
  'GitHub',
  'MongoDB',
  'SQL',
  'Azure',
  'AWS',
  'Docker',
  'Kubernetes'
];

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>
      
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="skill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills; 