import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import codingProfilesData from '../data/codingProfiles.json';

const CodingProfiles: React.FC = () => {
  const platformData = [
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-5xl" />,
      color: 'from-orange-500 to-yellow-500',
      data: codingProfilesData.leetcode,
      stats: [
        { label: 'Problems Solved', value: codingProfilesData.leetcode.totalSolved },
        { label: 'Easy', value: codingProfilesData.leetcode.easy },
        { label: 'Medium', value: codingProfilesData.leetcode.medium },
        { label: 'Hard', value: codingProfilesData.leetcode.hard },
        { label: 'Current Streak', value: `${codingProfilesData.leetcode.streak} days` },
        { label: 'Ranking', value: codingProfilesData.leetcode.ranking }
      ]
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-5xl" />,
      color: 'from-gray-700 to-gray-900',
      data: codingProfilesData.github,
      stats: [
        { label: 'Repositories', value: codingProfilesData.github.repositories },
        { label: 'Total Stars', value: codingProfilesData.github.stars },
        { label: 'Followers', value: codingProfilesData.github.followers },
        { label: 'Contributions', value: codingProfilesData.github.contributions },
        { label: 'Current Streak', value: `${codingProfilesData.github.streak} days` }
      ]
    },
    {
      name: 'HackerRank',
      icon: <SiHackerrank className="text-5xl" />,
      color: 'from-green-500 to-emerald-600',
      data: codingProfilesData.hackerrank,
      stats: [
        { label: 'Problem Solving', value: `${codingProfilesData.hackerrank.stars.problemSolving} ⭐` },
        { label: 'Python', value: `${codingProfilesData.hackerrank.stars.python} ⭐` },
        { label: 'SQL', value: `${codingProfilesData.hackerrank.stars.sql} ⭐` },
        { label: 'Algorithms', value: `${codingProfilesData.hackerrank.stars.algorithms} ⭐` }
      ]
    },
    {
      name: 'CodeChef',
      icon: <SiCodechef className="text-5xl" />,
      color: 'from-brown-600 to-amber-700',
      data: codingProfilesData.codechef,
      stats: [
        { label: 'Rating', value: codingProfilesData.codechef.rating },
        { label: 'Stars', value: codingProfilesData.codechef.stars },
        { label: 'Global Rank', value: codingProfilesData.codechef.globalRank },
        { label: 'Country Rank', value: codingProfilesData.codechef.countryRank }
      ]
    },
    {
      name: 'GeeksforGeeks',
      icon: <SiGeeksforgeeks className="text-5xl" />,
      color: 'from-green-600 to-teal-600',
      data: codingProfilesData.geeksforgeeks,
      stats: [
        { label: 'Coding Score', value: codingProfilesData.geeksforgeeks.codingScore },
        { label: 'Problems Solved', value: codingProfilesData.geeksforgeeks.problemsSolved }
      ]
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
          title="Coding Profiles"
          subtitle="My journey in competitive programming and open source"
        />

        {/* Platform Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {platformData.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                {/* Platform Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${platform.color} rounded-lg p-3 text-white`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      @{platform.data.username}
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="space-y-3 mb-6">
                  {platform.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Profile Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  href={platform.data.profileUrl}
                  icon={<FaExternalLinkAlt />}
                >
                  View Profile
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 text-white">
                <FaLinkedin className="text-6xl" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Professional Network
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Connect with me on LinkedIn for professional networking and collaborations
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Button
                    variant="primary"
                    href={codingProfilesData.linkedin.profileUrl}
                    icon={<FaLinkedin />}
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* TODO: Integration Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            {/* TODO: Integrate live APIs to fetch real-time coding statistics */}
            {/* APIs to consider: LeetCode GraphQL API, GitHub API, HackerRank API */}
            Stats are updated regularly. Visit individual profiles for real-time data.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
