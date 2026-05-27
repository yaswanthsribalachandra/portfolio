import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI/ML', 'Full Stack', 'Cloud', 'DevOps', 'Web Development'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcase of my best work in web development, AI, and cloud infrastructure"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {/* TODO: Replace with actual project image */}
                    {/* <img src={project.image} alt={project.name} className="w-full h-full object-cover" /> */}
                    <FaCode className="text-white text-6xl opacity-50" />
                  </div>

                  {/* Project Status Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Production' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : project.status === 'Beta'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Problem Statement */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Problem Statement:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.problemStatement}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-purple-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="px-2 py-1 text-blue-600 dark:text-purple-400 rounded text-xs font-semibold">
                          +{project.techStack.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Deployment Info */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-semibold">Deployed on:</span> {project.deployment}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {/* TODO: Add actual GitHub URL */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      icon={<FaGithub />}
                      onClick={() => console.log('GitHub:', project.githubUrl)}
                    >
                      Code
                    </Button>
                    {/* TODO: Add actual live demo URL */}
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1"
                      icon={<FaExternalLinkAlt />}
                      onClick={() => console.log('Live Demo:', project.liveUrl)}
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
