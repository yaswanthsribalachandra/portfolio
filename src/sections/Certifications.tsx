import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import certificationsData from '../data/certifications.json';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and achievements demonstrating expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Badge/Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <FaCertificate className="text-white text-3xl" />
                    {/* TODO: Replace with actual badge image when available */}
                    {/* <img src={cert.badgeUrl} alt={cert.name} className="w-full h-full object-contain" /> */}
                  </div>
                </div>

                {/* Certification Details */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {cert.name}
                </h3>
                
                <p className="text-blue-600 dark:text-purple-400 font-semibold text-center mb-3">
                  {cert.organization}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center flex-grow">
                  {cert.description}
                </p>

                {/* Issue Date */}
                <div className="text-sm text-gray-500 dark:text-gray-500 mb-3 text-center">
                  Issued: {new Date(cert.issueDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-xs text-gray-500 dark:text-gray-500 mb-4 text-center font-mono">
                    ID: {cert.credentialId}
                  </div>
                )}

                {/* Verify Button */}
                <div className="mt-auto">
                  {/* TODO: Add actual verification URL */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    icon={<FaExternalLinkAlt />}
                    onClick={() => console.log('Verify certification:', cert.id)}
                  >
                    Verify Credential
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
