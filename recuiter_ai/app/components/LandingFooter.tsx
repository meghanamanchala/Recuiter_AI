import React from 'react';
import { Twitter, LinkedinIcon, GithubIcon } from 'lucide-react';

const LandingFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#fafafa] to-white border-t border-gray-200">
      
      {/* Top Footer */}
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          pt-12 sm:pt-20 lg:pt-24
          pb-10 sm:pb-16 lg:pb-20
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-5
          gap-8 sm:gap-10 lg:gap-12
        "
      >
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <span className="text-xl font-extrabold text-gray-900">
              Recruiter<span className="text-blue-600">AI</span>
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs mx-auto sm:mx-0">
            AI-powered recruiting that helps you hire faster, smarter, and at scale.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-400">
            {[Twitter, LinkedinIcon, GithubIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="p-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Product (always visible) */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Features</a></li>
            <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-900">Integrations</a></li>
            <li><a href="#" className="hover:text-gray-900">API</a></li>
            <li><a href="#" className="hover:text-gray-900">Changelog</a></li>
          </ul>
        </div>

        {/* Company – hidden on mobile */}
        <div className="hidden sm:block text-center sm:text-left">
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Press</a></li>
            <li><a href="#" className="hover:text-gray-900">Partners</a></li>
          </ul>
        </div>

        {/* Resources – hidden on mobile */}
        <div className="hidden sm:block text-center sm:text-left">
          <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-900">Community</a></li>
            <li><a href="#" className="hover:text-gray-900">Webinars</a></li>
            <li><a href="#" className="hover:text-gray-900">Templates</a></li>
          </ul>
        </div>

        {/* Legal (always visible) */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">GDPR</a></li>
            <li><a href="#" className="hover:text-gray-900">Security</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            py-4
            flex flex-col sm:flex-row
            items-center justify-between
            gap-2
            text-sm text-gray-500
            text-center sm:text-left
          "
        >
          <span>© 2026 RecruiterAI. All rights reserved.</span>
          <span className="flex items-center justify-center gap-1">
            Made with <span className="text-red-500">❤</span> for hiring teams everywhere
          </span>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
