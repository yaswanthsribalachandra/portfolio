import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import * as FaIcons from 'react-icons/fa';
import achievementsData from '../data/achievements.json';

const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    const Icon = FaIcons[iconName as keyof typeof FaIcons];
    return Icon ? <Icon className="text-4xl" /> : <FaIcons.FaTrophy className="text-4xl" />;
  };

  const categories = ['All', 'Award', 'Hackathon', 'Open Source', 'Leadership', 'Community', 'Research'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAchievements = selectedCategory === 'All'
    ? achievementsData
    : achievementsData.filter(achievement => achievement.category === selectedCategory);

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Achievements & Recognition"
          subtitle="Awards, hackathons, and contributions to the tech community"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full">
                {/* Icon */}
                <div className={`${achievement.color} mb-4 flex justify-center`}>
                  {getIcon(achievement.icon)}
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                    {achievement.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Organization */}
                <p className="text-blue-600 dark:text-purple-400 font-semibold mb-2">
                  {achievement.organization}
                </p>

                {/* Date */}
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                  {new Date(achievement.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No achievements found in this category.
            </p>
          </div>
        )}

        {/* Summary Stats */}
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
            <div className="text-gray-600 dark:text-gray-400 font-medium">Total Achievements</div>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Hackathon Wins</div>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Awards & Honors</div>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Community Impact</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
