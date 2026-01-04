"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaCloud,
  FaCogs,
  FaEthereum,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaMagic,
  FaPython,
  FaRobot,
} from "react-icons/fa";

// Data structure for Jutsu (Skills)
const jutsu = [
  { name: "Chidori: JavaScript", level: 95, icon: <FaHtml5 /> },
  { name: "Sharingan: Deep Learning", level: 80, icon: <FaBrain /> },
  { name: "Sage Mode: Python for AI", level: 90, icon: <FaPython /> },
  { name: "Byakugan: Data Analysis (NumPy, Pandas)", level: 92, icon: <FaChartLine /> },
  { name: "Genjutsu: Model Optimization & Tuning", level: 72, icon: <FaCogs /> },
  { name: "Sage Mode: Machine Learning", level: 80, icon: <FaBrain /> },
  { name: "Six Paths: Agentic AI", level: 60, icon: <FaRobot /> },
  { name: "Summoning Jutsu: LLM Integration", level: 85, icon: <FaMagic /> },
  { name: "Hash Release: Blockchain Fundamentals", level: 82, icon: <FaEthereum /> },
  { name: "Flying Raijin: Cloud Deployment", level: 80, icon: <FaCloud /> },
  { name: "Anbu Arts: Java Backend", level: 80, icon: <FaJava /> },
  { name: "Hokage Guard: Git & Version Control", level: 92, icon: <FaGitAlt /> },
  { name: "Forbidden Jutsu: Solidity Security", level: 38, icon: <FaEthereum /> },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function JutsuMastery() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-24 px-6 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/high/naruto-shippuden-1920-x-1080-hd-1l3s88q1cst4r9h4.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Main container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto p-10 bg-black/50 backdrop-blur-sm rounded-3xl border-2 border-red-800 shadow-[0_0_50px_rgba(255,0,0,0.5)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-6xl font-extrabold text-center text-red-500 tracking-widest"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          My Jutsu Mastery
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 text-center mt-4 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Harnessing the power of the digital shinobi world.
        </motion.p>

        {/* ✅ GRID LAYOUT ONLY */}
        <motion.div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-6
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {jutsu.map((jutsuItem) => (
            <motion.div
              key={jutsuItem.name}
              className="group relative flex flex-col items-start gap-2 p-5 bg-white/5 rounded-xl border border-white/10 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 80, 0, 0.7)",
                borderColor: "#FF5000",
              }}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4 text-xl font-bold text-red-400 group-hover:text-red-300">
                <div className="text-3xl text-orange-400 group-hover:animate-pulse">
                  {jutsuItem.icon}
                </div>
                <h3>{jutsuItem.name}</h3>
              </div>

              {/* Progress */}
              <div className="w-full flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-400">
                  {jutsuItem.level}%
                </span>
                <div className="relative w-full bg-red-950 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_15px_rgba(255,80,0,0.8)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${jutsuItem.level}%` }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
