import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { FaCode, FaRocket, FaBrain, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices and design patterns.'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks to deliver cutting-edge solutions.'
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: 'Problem Solver',
      description: 'Analytical thinker with strong problem-solving skills and attention to detail.'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Team Player',
      description: 'Collaborative mindset with excellent communication skills and leadership experience.'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Software Engineer',
      description: 'Leading cloud-native development and AI initiatives at TechCorp Inc.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      description: 'Built scalable SaaS applications serving 50,000+ users at StartupXYZ'
    },
    {
      year: '2020',
      title: 'Started Professional Journey',
      description: 'Graduated with B.Tech in Computer Science and began career in software development'
    },
    {
      year: '2019',
      title: 'First Internship',
      description: 'Gained hands-on experience in web development and cloud technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building innovative solutions that make a difference"
        />

        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer and AI enthusiast focused on building scalable, modern, and user-centric applications. 
              I enjoy transforming ideas into real-world solutions using cutting-edge technologies and clean development practices.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My expertise includes React.js, Next.js, Python, FastAPI, Node.js, Java, SQL, and cloud platforms like Azure. 
              I have hands-on experience developing full-stack applications, deploying cloud-native solutions, working with REST APIs, 
              integrating machine learning models, and building responsive web interfaces.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond development, I actively solve coding challenges on platforms like LeetCode, explore system design and cloud technologies, 
              contribute to personal and academic projects, and continuously improve my problem-solving and communication skills to grow as a software engineer.
            </p>
          </Card>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="text-blue-600 dark:text-purple-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Journey
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <Card>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-blue-600 dark:text-purple-400">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
