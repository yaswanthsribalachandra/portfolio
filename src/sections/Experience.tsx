import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import experienceData from '../data/experience.json';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and key contributions"
        />

        <div className="max-w-5xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />
              )}

              <Card>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <FaBriefcase className="text-white text-2xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaBriefcase className="text-blue-600 dark:text-purple-400" />
                          <span className="font-semibold text-blue-600 dark:text-purple-400">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-blue-600 dark:text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-blue-600 dark:text-purple-400" />
                          <span>
                            {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            {' - '}
                            {exp.current ? 'Present' : new Date(exp.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                      </div>
                      <span className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-blue-600 dark:text-purple-400 mt-1.5">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
