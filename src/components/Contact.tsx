import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vishal.rajak@example.com',
      href: 'mailto:vishal.rajak@example.com',
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'text-orange-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bokaro, Jharkhand',
      href: '#',
      color: 'text-cyan-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vishalkumarrajak',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vishalkumarrajak',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/vishalkumarrajak',
      color: 'hover:text-cyan-400'
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      href: '#',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm font-rajdhani tracking-[0.3em] text-green-400 mb-4">
            ESTABLISH CONNECTION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-exo mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">Protocol</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next digital mission? Let's establish a secure communication channel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-exo font-bold text-white mb-6 flex items-center space-x-2">
              <Send className="text-green-400" size={24} />
              <span>Send Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors duration-200"
                  placeholder="Project discussion"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-cyan-600 text-white font-rajdhani font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>TRANSMIT MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-exo font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-200`}>
                        <Icon className={info.color} size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-rajdhani text-gray-400">
                          {info.label}
                        </div>
                        <div className="text-white font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-exo font-bold text-white mb-6">
                Social Networks
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group ${social.color}`}
                    >
                      <Icon size={20} className="text-gray-400 group-hover:text-current transition-colors duration-200" />
                      <span className="font-rajdhani font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Gaming Status */}
            <div className="bg-black/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-exo font-bold text-white mb-6">
                Gaming Status
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-rajdhani text-gray-400">BGMI Rank</span>
                  <span className="text-yellow-400 font-bold">ACE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-rajdhani text-gray-400">Cricket Position</span>
                  <span className="text-green-400 font-bold">All-Rounder</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-rajdhani text-gray-400">Coding Level</span>
                  <span className="text-red-400 font-bold">ELITE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;