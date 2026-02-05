import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const LandingFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#fafafa] to-white border-t border-gray-200">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">

        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl font-extrabold text-gray-900">
              Recruiter<span className="text-blue-600">AI</span>
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            AI-powered recruiting that helps you hire faster, smarter, and at scale.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4 text-gray-400">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column */}
        {[
          {
            title: 'Product',
            links: ['Features', 'Pricing', 'Integrations', 'API', 'Changelog'],
          },
          {
            title: 'Company',
            links: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
          },
          {
            title: 'Resources',
            links: ['Documentation', 'Help Center', 'Community', 'Webinars', 'Templates'],
          },
          {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-gray-900 mb-5">
              {col.title}
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 RecruiterAI. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <span className="text-red-500">❤</span> for hiring teams everywhere
          </span>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
