"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-10 bg-gray-900/60 backdrop-blur-lg text-white border-t border-white/10 relative z-10"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="https://github.com/NOVA0206"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#f84525' }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl text-white/70"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jeevanjadhav02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#f84525' }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl text-white/70"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/Jeevan3002"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#f84525' }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl text-white/70"
          >
            <FaTwitter />
          </motion.a>
        </div>
        <p className="text-gray-400 text-sm">
          Built with Chakra and Ambition 🔥
        </p>
        <p className="mt-2 text-gray-500 text-xs">
          &copy; 2025 Jeevan Jadhav. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}