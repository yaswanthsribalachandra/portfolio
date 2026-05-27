import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import SkillBar from '../components/common/SkillBar';
import skillsData from '../data/skills.json';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', color: 'blue' },
    { id: 'backend', name: 'Backend', color: 'green' },
    { id: 'cloud', name: 'Cloud', color: 'purple' },
    { id: 'aiml', name: 'AI/ML', color: 'pink' },
    { id: 'databases', name: 'Databases', color: 'yellow' },
    { id: 'devops', name: 'DevOps', color: 'red' },
    { id: 'tools', name: 'Tools', color: 'indigo' }
  ];

  const getIcon = (iconName: string) => {
    const allIcons = { ...FaIcons, ...SiIcons, ...TbIcons };
    const Icon = allIcons[iconName as keyof typeof allIcons];

    return Icon ? <Icon /> : null;
  };

  const currentSkills =
    skillsData[activeCategory as keyof typeof skillsData] || [];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? `bg-gradient-to-r from-${category.color}-600 to-${category.color}-700 text-white shadow-lg`
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {currentSkills.map((skill: any, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl text-blue-600 dark:text-purple-400">
                    {getIcon(skill.icon)}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <SkillBar
                  name="Proficiency"
                  proficiency={skill.proficiency}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              10+
            </div>

            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              1+
            </div>

            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Years Experience
            </div>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5+
            </div>

            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Projects Completed
            </div>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5+
            </div>

            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Certifications
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
