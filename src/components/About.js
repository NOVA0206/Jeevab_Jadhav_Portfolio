"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCogs, FaLaptopCode, FaRocket } from "react-icons/fa"; // You might need to install react-icons

import narutoBg from "./naruto-bg.jpg";
import naruto from "./naruto.jpg";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const characterVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const konohaSymbolVariants = {
  initial: { opacity: 0, rotate: -180 },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.5, ease: "backOut" },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden min-h-screen py-16 text-white bg-black">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src={narutoBg}
          alt="Naruto themed background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Konoha Village Symbol as a Background Element */}
      <motion.div
        className="absolute bottom-[-100px] left-[-100px] md:bottom-[-200px] md:left-[-200px] z-10"
        variants={konohaSymbolVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="konoha-symbol w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-20">
          {/* You can replace this with an SVG or an image of the Konoha symbol */}
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-orange-400 drop-shadow-lg"
          style={{ fontFamily: "Bangers, cursive" }}
        >
          About Me: The Shinobi Path ⚔️
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-lg text-gray-200"
        >
          <p className="mb-8 leading-relaxed">
            Just like a shinobi refines their jutsu through discipline and repetition, I’ve immersed myself in mastering the core arts of Artificial Intelligence, Machine Learning, Blockchain systems, and Agentic AI. My journey is driven by continuous experimentation training models, orchestrating autonomous agents, and engineering decentralized intelligence constantly seeking complex challenges that transform data, logic, and computation into resilient, self-evolving digital ecosystems.
          </p>
        </motion.div>

        {/* Interactive "Character" Card Grid */}
        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: My Jutsu (Skills) */}
          <motion.div
            className="bg-gray-900 p-6 rounded-xl border border-orange-500 shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-4xl text-orange-400 mb-4">
              <FaCogs />
            </div>
            <h3 className="text-2xl font-bold mb-2">My Jutsu</h3>
            <p className="text-gray-400">
              I specialize in engineering AI-first applications that combine machine learning pipelines, blockchain-backed trust systems, and agentic AI workflows, delivered through modern, scalable interfaces.
            </p>
          </motion.div>

          {/* Card 2: My Path (Journey) */}
          <motion.div
            className="bg-gray-900 p-6 rounded-xl border border-orange-500 shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, ...cardVariants.visible.transition }}
          >
            <div className="text-4xl text-orange-400 mb-4">
              <FaLaptopCode />
            </div>
            <h3 className="text-2xl font-bold mb-2">My Path</h3>
            <p className="text-gray-400">
              From mastering fundamentals to architecting intelligent systems, my journey now moves through AI, Machine Learning, Blockchain, and Agentic architectures where models think, agents act, and systems evolve.
            </p>
          </motion.div>

          {/* Card 3: My Vision (Goals) */}
          <motion.div
            className="bg-gray-900 p-6 rounded-xl border border-orange-500 shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, ...cardVariants.visible.transition }}
          >
            <div className="text-4xl text-orange-400 mb-4">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-bold mb-2">My Vision</h3>
            <p className="text-gray-400">
              My goal is to design and engineer agentic web applications where AI models think, decide, and adapt in real time, backed by secure blockchain infrastructure creating systems that are as autonomous and intelligent as they are visually striking.
            </p>
          </motion.div>
        </div>

        {/* Naruto Character image with animation */}
        <motion.div
          className="mt-16"
          variants={characterVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Replace with your character image */}
          <Image
            src={naruto}
            alt="Naruto-themed character"
            width={300}
            height={400}
            className="rounded-full border-4 border-orange-500 shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}