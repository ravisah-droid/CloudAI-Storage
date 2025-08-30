
import React from "react";
import {
    Sparkles,
    Users,
    Shield,
    Zap,
    BarChart3,
    Upload,
} from "lucide-react";

const layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">  
          {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Intelligent Cloud Storage
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of file storage with AI-powered organization, smart search, and automated optimization. Your files, intelligently managed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Start Uploading</span>
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-md hover:shadow-lg border border-gray-200">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our intelligent platform learns from your usage patterns to deliver a personalized storage experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-blue-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Organization</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI automatically categorizes and organizes your files based on content, usage patterns, and context.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-purple-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Military-grade encryption with AI-powered threat detection keeps your data safe and secure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-green-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized algorithms and global CDN ensure instant access to your files from anywhere.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-orange-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Usage Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed insights into your storage patterns help optimize space and improve workflow.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-indigo-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time collaboration tools with AI-suggested sharing and permission settings.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-pink-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Uploads</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent compression and deduplication reduce storage costs while maintaining quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

     </div> 
    )
}

export default layout;


