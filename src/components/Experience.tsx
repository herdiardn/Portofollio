import React from 'react';
import { Calendar, MapPin, Building, Clock, Briefcase, Sparkles } from 'lucide-react';
import { experience } from '../data/portfolioData';
import gizalab from '../assets/gizalab.jpeg';
import lac from '../assets/lac.jpeg';
import humic from '../assets/humic.jpeg';
import caatis from '../assets/caatis.jpeg';
import telkom from '../assets/telkom.png';
import gdsc from '../assets/gdscc.png';
import makers from '../assets/makers.jpg';


const Experience: React.FC = () => {
const logoMap: Record<string, string> = {
  'gizalab.jpeg': gizalab,
  'lac.jpeg': lac,
  'humic.jpeg': humic,
  'caatis.jpeg': caatis,
  'telkom.png': telkom,
  'gdsc.png': gdsc,
  'makers.jpg': makers,
};

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <Briefcase className="w-8 h-8 text-purple-600 ml-3 animate-pulse delay-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hidden lg:block group-hover:scale-150 transition-transform duration-300"></div>
                
                <div className="lg:ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-6">
                        <img
                          src={logoMap[exp.logo]}
                          alt={`${exp.company} logo`}
                          className="w-20 h-20 object-contain mr-5 rounded-[10px]"
                        />

                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <Building className="w-4 h-4 mr-3 text-purple-500" />
                          <span>{exp.status}</span>
                        </div>
                        <div className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <MapPin className="w-4 h-4 mr-3 text-green-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <Clock className="w-4 h-4 mr-3 text-orange-500" />
                          <span>{exp.workType}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {exp.summary}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center text-lg">
                          <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-3">
                          {exp.keyResponsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center text-lg">
                          <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gradient-to-r from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-200 border border-blue-200/50 dark:border-blue-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;