import React from 'react';
import { 
  Cloud, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  Shield, 
  Zap, 
  Sparkles,
  Globe,
  Heart,
  ArrowRight
} from 'lucide-react';

const FootAi = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-2.5 rounded-xl shadow-lg">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  CloudAI Pro
                </h2>
                <p className="text-xs text-gray-500 font-medium">Smart Storage</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The world's most advanced cloud storage platform powered by artificial intelligence. 
              Automatically organize, optimize, and secure your digital life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 group">
                <Twitter className="h-5 w-5 text-gray-600 group-hover:text-blue-500" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 group">
                <Github className="h-5 w-5 text-gray-600 group-hover:text-gray-900" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 group">
                <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 group">
                <Mail className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
              </a>
            </div>
          </div>

          {/* AI Features */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span>AI Features</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Smart File Organization</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Duplicate Detection</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Content Analysis</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Predictive Search</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Auto-Tagging</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>Platform</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>File Sharing</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Team Collaboration</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Version Control</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Backup & Sync</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>API Access</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Support</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Contact Support</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>System Status</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Security</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h4>
              <p className="text-gray-600">Get the latest AI features and storage tips delivered to your inbox.</p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white flex-1"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <p className="flex items-center space-x-1">
                <span>© 2025 CloudAI Pro. Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>for creators</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Cookie Settings</a>
              <div className="flex items-center space-x-1 text-gray-500">
                <Globe className="h-4 w-4" />
                <span>Global CDN</span>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-full border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-green-700">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
                  <Shield className="h-3 w-3 text-blue-600" />
                  <span className="text-xs font-medium text-blue-700">SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-purple-50 rounded-full border border-purple-200">
                  <Sparkles className="h-3 w-3 text-purple-600" />
                  <span className="text-xs font-medium text-purple-700">AI Powered</span>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                <span>Trusted by 50M+ users worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FootAi;

