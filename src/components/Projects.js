"use client";

import { motion } from "framer-motion";
import { projectsData } from "../utils/projectsData";

// Define a dynamic variant for the project cards
const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

// Define a hover variant for a more dramatic effect
const hoverVariants = {
  scale: 1.05,
  rotate: 2,
  boxShadow: "0 10px 20px rgba(255, 165, 0, 0.4)", // A warm, fiery glow
  transition: { type: "spring", stiffness: 300 },
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-4 py-20 bg-gray-950 text-white font-serif">
      {/* Background pattern inspired by ninja scrolls or the Konoha symbol */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/ninja-scroll.png')]"></div>
      
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"
        >
          My Jutsus (Projects)
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover={hoverVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 rounded-2xl border-2 border-transparent hover:border-orange-500 shadow-xl p-6 relative overflow-hidden"
          >
            {/* A subtle border glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 pointer-events-none group-hover:border-orange-500"></div>

            <img
              src={project.image}
              alt={`Thumbnail for ${project.title}`}
              className="w-full h-48 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold mb-2 text-orange-400">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
            <a
              href={project.link}
              className="inline-block py-2 px-6 rounded-full bg-orange-500 text-white font-bold tracking-wide transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unleash the Jutsu
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 