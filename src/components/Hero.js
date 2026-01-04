// src/components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import narutoIcon from "./Jeevan.jpg";
import { default as kunai } from "./kunai.png";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "I build AI / ML, Agentic AI and craft digital experiences... DATTEBAYO!";
  const [showKunai, setShowKunai] = useState(false);
  const [showShuriken, setShowShuriken] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
        setShowKunai(true);
        setTimeout(() => setShowShuriken(true), 500);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  const introVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px #FFD700",
      boxShadow: "0px 0px 12px #FFD700",
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 text-center overflow-hidden"
    >
      {/* 🔥 Background Image (CSS – Next.js Safe) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wallpapercave.com/wp/wp12836470.jpg')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={introVariants}
      >
        <Image
          src={narutoIcon}
          alt="Naruto Uzumaki Logo"
          width={100}
          height={100}
          className="mb-4 shadow-lg rounded-full"
        />

        <motion.h1
          className="naruto-font text-6xl md:text-8xl font-black mb-4 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Jeevan Jadhav
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4 px-4 font-light text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {text}
          <span className="typing-cursor">|</span>
        </motion.p>

        {/* Contact Button */}
        <motion.div
          className="mt-10 flex justify-center items-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.a
            href="#contact"
            className="
              relative 
              inline-flex 
              items-center 
              justify-center
              px-10 
              py-4
              text-lg 
              font-semibold
              rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500
              text-black
              shadow-lg
              overflow-hidden
            "
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact Me
            <span className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-pulse opacity-60"></span>
          </motion.a>
        </motion.div>
      </motion.div>

      {showKunai && (
        <motion.div
          className="absolute kunai-icon z-10"
          initial={{ x: "-100vw", y: "-100vh", rotate: -180, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src={kunai} alt="Kunai" width={70} height={70} />
        </motion.div>
      )}
    </section>
  );
}
