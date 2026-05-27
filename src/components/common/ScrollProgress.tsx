import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ScrollProgress;
