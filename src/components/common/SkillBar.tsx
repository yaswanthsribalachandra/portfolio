import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  proficiency: number;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  proficiency
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {name}
        </span>

        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
          {proficiency}%
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.2
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;