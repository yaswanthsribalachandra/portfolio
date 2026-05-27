import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yaswanthsribalachandra', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dasari-yaswanth-sri-balachandra/', label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/u/YASWANTH_SRI_BALACHANDRA/', label: 'LeetCode' },
    { icon: <FaEnvelope />, url: 'mailto:dasariyaswanthsribalachandra@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              &lt;DY /&gt;
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer passionate about building scalable applications and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Dasari Yaswanth Sri Balachandra. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
              Built with <FaHeart className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
