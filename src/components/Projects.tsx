import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Vis Recommendations',
      description: 'A personalized recommendation system built with machine learning algorithms to provide tailored suggestions for users.',
      tech: ['React', 'Python', 'TensorFlow', 'REST API'],
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website featuring WebGL animations, particle effects, and smooth interactions.',
      tech: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Foodman E-commerce',
      description: 'A full-stack e-commerce platform for food delivery with real-time tracking, payment integration, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-center mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="text-gray-800" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <Github size={18} className="text-gray-800" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-chakra-petch font-bold mb-3 group-hover:text-cyan-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-chakra-petch font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-black text-white py-2 px-4 rounded-lg text-center font-chakra-petch font-medium hover:bg-gray-800 transition-colors duration-200 text-sm"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center justify-center w-10 h-10 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                  >
                    <Code size={18} className="text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-chakra-petch font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;