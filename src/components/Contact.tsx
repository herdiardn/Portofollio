import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, MessageCircle, Send, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const subject = `Portfolio Contact from ${formData.name}`;
    
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', bg: 'from-blue-600 to-blue-700', hoverColor: 'hover:text-blue-600' },
    { icon: MessageCircle, href: personalInfo.whatsapp, label: 'WhatsApp', bg: 'from-green-500 to-green-600', hoverColor: 'hover:text-green-500' },
    { icon: Github, href: personalInfo.github, label: 'GitHub', bg: 'from-gray-800 to-gray-900', hoverColor: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', bg: 'from-red-500 to-red-600', hoverColor: 'hover:text-red-500' },
    { icon: Instagram, href: personalInfo.instagram, label: 'Instagram', bg: 'from-pink-500 to-purple-600', hoverColor: 'hover:text-pink-500' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Heart className="w-8 h-8 text-red-500 mr-3 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <Heart className="w-8 h-8 text-pink-500 ml-3 animate-pulse delay-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Social Links */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center lg:justify-start">
                <Sparkles className="w-8 h-8 mr-3 text-blue-500 animate-pulse" />
                Get In Touch
              </h3>
            </div>
            
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`p-4 bg-gradient-to-r ${link.bg} rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="relative z-10">
                    <span className={`font-semibold text-gray-900 dark:text-white text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300`}>
                      {link.label}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      {link.label === 'Email' ? personalInfo.email : `Connect on ${link.label}`}
                    </p>
                  </div>
                  
                  {/* Sparkle Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Send className="w-8 h-8 mr-3 text-purple-500" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isSubmitting ? (
                  <span className="relative z-10">Sending...</span>
                ) : (
                  <>
                    <Send className="mr-3 w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;