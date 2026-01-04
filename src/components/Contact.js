"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Head from 'next/head';
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_xfc8jnl",
        "template_lm4boqu",
        formRef.current,
        "JIZ8ozyqgqBX6fbJ3"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        (err) => {
          setError(true);
          setLoading(false);
          console.error("Failed to send message:", err);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jaro:wght@400&family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, #1a1a1a, #2a2a2a)",
        }}
      >
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/naruto-bg.png')", // You will need to add this image to your public folder
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
          }}
        />

        <div className="z-10 w-full max-w-4xl flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="text-center lg:text-left flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 drop-shadow-lg font-['Bangers'] tracking-widest leading-none mb-4"
              variants={itemVariants}
            >
              Contact Me
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 font-['Jaro'] mb-6 leading-tight"
              variants={itemVariants}
            >
              Ready to create something legendary together? Send me a message, dattebayo!
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="w-full flex flex-col gap-6 p-8 rounded-2xl shadow-2xl backdrop-blur-md"
              style={{
                backgroundColor: "rgba(30, 30, 30, 0.7)",
                border: "2px solid rgba(255, 255, 255, 0.1)",
              }}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.input
                type="text"
                name="user_name"
                placeholder="Your Name (e.g., Naruto Uzumaki)"
                required
                className="bg-zinc-800 text-white border-2 border-orange-500 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 placeholder-shown:border-orange-500 placeholder-shown:border-opacity-50"
                variants={itemVariants}
              />
              <motion.input
                type="email"
                name="user_email"
                placeholder="Your Email (e.g., hokage@konoha.org)"
                required
                className="bg-zinc-800 text-white border-2 border-orange-500 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                variants={itemVariants}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message (e.g., 'I want to hire you to build my ramen shop website!')"
                required
                rows={5}
                className="bg-zinc-800 text-white border-2 border-orange-500 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                variants={itemVariants}
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-orange-600 text-white rounded-xl font-['Bangers'] text-2xl tracking-widest hover:bg-orange-500 transition-transform duration-300 ease-in-out"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center font-semibold mt-2"
                >
                  Your message has been received! Believe it! ✅
                </motion.p>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center font-semibold mt-2"
                >
                  Failed to send message. Please try again. ❌
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
}