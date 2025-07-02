import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { skills } from '../data/portfolioData';

// Import all logos eagerly
const logoMap = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
});

const getLogo = (filename: string) => {
  const path = `../assets/${filename}`;
  return logoMap[path];
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
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
              Technical Skills
            </h2>
            <Zap className="w-8 h-8 text-purple-600 ml-3 animate-pulse delay-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const logo = getLogo(skill.logo);
            return (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="text-center relative z-10 flex flex-col items-center gap-2">
                  {typeof logo === 'string' && (
                    <img
                      src={logo}
                      alt={skill.name}
                      className="w-22 h-22 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </h4>
                </div>
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
