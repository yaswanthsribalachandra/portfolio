import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import educationData from '../data/education.json';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="Academic background and achievements"
        />

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-white text-3xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                          <FaGraduationCap className="text-blue-600 dark:text-purple-400" />
                          <span className="font-semibold text-blue-600 dark:text-purple-400">
                            {edu.institution}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-blue-600 dark:text-purple-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-blue-600 dark:text-purple-400" />
                          <span>
                            {new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            {' - '}
                            {new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        <span className="font-bold text-lg text-gray-900 dark:text-white">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Achievements & Activities:
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Projects */}
                    {edu.projects && edu.projects.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Notable Projects:
                        </h4>
                        <ul className="space-y-2">
                          {edu.projects.map((project, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-blue-600 dark:text-purple-400 mt-1.5">▹</span>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default Education;
