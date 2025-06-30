import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    title: "ONC",
    role: "Software Development Intern (March 2025 - May 2025)",
    description: [
      "Developed dynamic frontend interfaces with JavaScript and React.js, optimizing user experience and performance. Worked on backend services using WordPress (PHP) and custom JavaScript to support API integrations and data workflows. Implemented core APIs for authentication, search, and user feed, ensuring secure and efficient data exchange. Integrated SQL databases for user and content management, writing optimized queries for speed and security. Contributed to user authentication flows, including login and session handling, enhancing app security. Collaborated with cross-functional teams in an Agile environment, participating in code reviews, testing, and end-to-end feature delivery.",
    ],
  },
  {
    title: "Microsoft Future Ready Talent Program",
    role: "Software Developer Intern (Jan 2022 - April 2022)",
    description: [
      "During my internship, I had the opportunity to design and deploy web applications on Microsoft Azure. I focused on ensuring scalability and maintainability by applying test-driven development practices. I was tasked with building automated solutions using Azure services, specifically for embedding and prompt engineering, which significantly enhanced the efficiency of the systems I worked on. Additionally, I contributed to setting up CI/CD pipelines, ensuring the applications were reliable and stable. By utilizing Docker and Kubernetes, I streamlined the deployment process and improved the scalability of the applications, reducing maintenance efforts. My internship experience at Microsoft honed my cloud deployment skills and deepened my understanding of scalable, automated systems.",
    ],
  },
  {
    title: "Commous Inc.",
    role: "Software Developer Intern (July 2021 - Dec 2021)",
    description: [
      "At Commous, I developed robust RESTful APIs using Node.js and Express.js to ensure seamless data flow and integration with existing systems. My role involved enhancing server-side logic to improve the efficiency of data processing, allowing for smooth communication between various services. I leveraged Docker to organize and manage backend services, which enabled the system to handle a larger user base and scale more effectively. This experience provided me with a deeper understanding of backend architecture and how to integrate various technologies for optimal performance and reliability. I also contributed to automating processes, which significantly improved system reliability and user experience. Additionally, I collaborated closely with front-end developers to ensure that the APIs met their needs, facilitating a more cohesive development process.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      
      <motion.div
        className="experience-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="experience-info">
              <h3>{exp.title}</h3>
              <p>{exp.role}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience; 