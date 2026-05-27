import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  /* ================= SCROLL EFFECT ================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ================= LOCK BODY SCROLL ================= */

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  /* ================= SMOOTH SCROLL ================= */

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ================= LOGO ================= */}

            <motion.a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              whileHover={{ scale: 1.05 }}
              className="
                text-2xl
                font-bold
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                bg-clip-text
                text-transparent
                cursor-pointer
              "
            >
              &lt;DY /&gt;
            </motion.a>

            {/* ================= DESKTOP MENU ================= */}

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  whileHover={{ y: -2 }}
                  className="
                    text-gray-700
                    dark:text-gray-300
                    hover:text-blue-600
                    dark:hover:text-purple-400
                    font-medium
                    transition-colors
                    duration-300
                  "
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 dark:text-gray-300"
                aria-label="Open Menu"
              >
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE SIDEBAR ================= */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* ================= OVERLAY ================= */}

            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* ================= SIDEBAR ================= */}

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="
                fixed
                top-0
                right-0
                w-[80%]
                max-w-sm
                min-h-dvh
                bg-white
                dark:bg-gray-900
                shadow-2xl
                z-50
                md:hidden
                overflow-hidden
              "
            >
              {/* ================= CLOSE BUTTON ================= */}

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  absolute
                  top-5
                  right-5
                  z-50
                  text-gray-700
                  dark:text-gray-300
                "
                aria-label="Close Menu"
              >
                <FaTimes size={28} />
              </button>

              {/* ================= MENU CONTENT ================= */}

              <div
                className="
                  min-h-dvh
                  overflow-y-auto
                  px-6
                  pt-24
                  pb-10
                "
              >
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="
                        text-lg
                        font-medium
                        text-gray-700
                        dark:text-gray-300
                        hover:text-blue-600
                        dark:hover:text-purple-400
                        transition-colors
                        duration-300
                      "
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;