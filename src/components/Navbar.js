"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaDragon } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["home", "about", "skills", "projects", "contact"];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const mobileMenuVariants = {
  open: {
    clipPath: "circle(150% at 90% -10%)",
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  closed: {
    clipPath: "circle(20px at 90% -10%)",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [offset, setOffset] = useState(0);
  const navRef = useRef(null);

  // 🧭 Get navbar height dynamically
  useEffect(() => {
    const updateOffset = () => {
      if (navRef.current) {
        setOffset(navRef.current.offsetHeight + 10);
      }
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // 📜 ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 50);

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - offset - 5;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(sec);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  // 🪄 Manual scroll to section
  const scrollToSection = (sec) => {
    const el = document.getElementById(sec);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(sec);
      setOpen(false);
    }
  };

  return (
    <motion.nav
      ref={navRef}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 ${
        scrolled ? "bg-white/10" : "bg-white/5"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className={`text-2xl font-bold font-['Chakra_Petch'] flex items-center gap-2 transition-all duration-300 ${
              scrolled ? "text-red-500" : "text-yellow-400"
            }`}
          >
            <FaDragon className="drop-shadow-[0_0_6px_#facc15]" />
            Jeevan Jadhav <span className="hidden sm:inline">火影</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((sec) => (
            <motion.div
              key={sec}
              whileHover={{ scale: 1.08, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <a
                href={`#${sec}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sec);
                }}
                className={`font-['Chakra_Petch'] text-lg uppercase tracking-wider relative transition-all duration-300 ${
                  active === sec
                    ? "text-red-500 drop-shadow-[0_0_6px_#ef4444]"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {sec}
              </a>
              <span className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-60 blur-md transition-all duration-300 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.div
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className={`p-2 rounded-full cursor-pointer transition-colors duration-300 ${
              scrolled ? "text-red-500 bg-white/10" : "text-yellow-400 bg-transparent"
            }`}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        animate={open ? "open" : "closed"}
        className="fixed top-0 right-0 h-screen w-2/3 bg-black/60 backdrop-blur-2xl border-l border-white/10 shadow-2xl md:hidden flex flex-col items-center justify-center space-y-10"
      >
        <div
          className="absolute top-8 right-8 cursor-pointer text-red-500"
          onClick={() => setOpen(false)}
        >
          <FiX size={32} />
        </div>
        {sections.map((sec, index) => (
          <motion.div
            key={sec}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px #facc15",
              color: "#facc15",
            }}
          >
            <a
              href={`#${sec}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sec);
              }}
              className="text-white text-3xl font-['Chakra_Petch'] uppercase tracking-wider hover:text-yellow-400 transition-all"
            >
              {sec}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
}
