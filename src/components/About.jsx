import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="profile-info"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.img
            src={profileImage}
            alt="Parth Barahate"
            className="profile-pic"
          />
          <motion.h3
            className="profile-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Parth Barahate
          </motion.h3>
          <motion.p
            className="profile-degree"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Masters in Science, Computer Science
          </motion.p>
          <motion.p
            className="profile-dates"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            August 2023 - May 2025
          </motion.p>
          <motion.p
            className="profile-degree"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Bachelor of Engineering, Computer Science
          </motion.p>
          <motion.p
            className="profile-dates"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            August 2019 - May 2023
          </motion.p>
        </motion.div>
        
        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I am a passionate and dedicated software engineer currently pursuing a
          Master's in Computer Science at California State University, Los
          Angeles. With a strong background in front & backend development and
          expertise in technologies like Node.js, Express.js, Docker, Kubernetes,
          and cloud platforms like Microsoft Azure and AWS, I specialize in
          building efficient and scalable software solutions. My focus is on
          creating RESTful APIs, deploying applications, and leveraging automation
          to improve system performance. Throughout my academic and professional
          journey, I have developed a strong technical foundation in programming
          languages such as Python, C++, JavaScript, and web development tools
          like React.js and Django. I am always eager to explore new technologies
          and drive innovation through practical, real-world application
          development. My hands-on experience has been shaped by internships and
          projects that have sharpened my problem-solving skills and solidified my
          commitment to continuous learning. Outside of my technical endeavors, I
          have engaged in creative activities, such as Theatre and playing Musical
          Instruments, which have further strengthened my ability to work
          collaboratively and think outside the box.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About; 