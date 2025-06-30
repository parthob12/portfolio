import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p>&copy; 2025 Parth Barahate. All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer; 