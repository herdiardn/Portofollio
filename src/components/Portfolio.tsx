import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { projects } from '../data/portfolioData';
import porto1 from '../assets/UI_Porto1.jpg';
import porto2 from '../assets/UI_Porto2.jpg';
import porto3 from '../assets/porto3.png';
import porto4 from '../assets/porto4.png';
import porto5 from '../assets/porto5.png';
import porto6 from '../assets/porto6.png';
import porto7 from '../assets/porto7.png';
import porto8 from '../assets/porto8.png';
import porto9 from '../assets/porto9.png';
import porto10 from '../assets/porto10.png';

const Portfolio: React.FC = () => {
  const Image: Record<string, string> = {
  'UI_Porto1.jpg': porto1,
  'UI_Porto2.jpg': porto2,
  'porto3.png': porto3,
  'porto4.png': porto4,
  'porto5.png': porto5,
  'porto6.png': porto6,
  'porto7.png': porto7,
  'porto8.png': porto8,
  'porto9.png': porto9,
  'porto10.png' : porto10
};
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Zap className="w-8 h-8 text-blue-600 mr-3 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Zap className="w-8 h-8 text-purple-600 ml-3 animate-pulse delay-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={Image[project.image]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Sparkle Effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
                </div>
              </div>

              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 border border-blue-200/50 dark:border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;