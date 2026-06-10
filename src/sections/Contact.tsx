import React, { useState } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

import { SiLeetcode } from 'react-icons/si';

import personalInfo from '../data/personalInfo.json';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    // 1. Integrate EmailJS / Formspree / Backend API
    // 2. Add validation
    // 3. Add loading state
    // 4. Store messages in DB

    console.log('Form submitted:', formData);

  alert(
  'Thank you for your interest! Feel free to contact me using the email, phone number, or LinkedIn profile listed on this page.'
);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  const socialMedia = [
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      href: personalInfo.socialLinks.github
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      href: personalInfo.socialLinks.linkedin
    },
    {
      icon: <SiLeetcode className="text-2xl" />,
      label: 'LeetCode',
      href: personalInfo.socialLinks.leetcode
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      href: personalInfo.socialLinks.email
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Heading */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Talk
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part
                  of your vision. Feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                  >
                    <Card hover={false}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          {info.icon}
                        </div>

                        <div className="flex-1">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {info.label}
                          </p>

                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-white font-semibold">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Connect on Social Media
                </h4>

                <div className="flex gap-4 flex-wrap">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={
                        social.label !== 'Email'
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        social.label !== 'Email'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-purple-600 transition-all shadow-md"
                    >
                      <span className="sr-only">
                        {social.label}
                      </span>

                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Collaboration"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<FaPaperPlane />}
                >
                  Send Message
                </Button>

                {/* Demo Note */}
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center italic">
                  Note: Form submission is currently in static page
                  mode
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;