import React from 'react';
import { Calendar, MapPin, Trophy, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Contract',
      achievements: [
        'Developed 5+ responsive web applications using React.js and Node.js',
        'Implemented WebGL animations increasing user engagement by 40%',
        'Optimized application performance achieving 95+ Lighthouse scores',
        'Collaborated with clients to deliver pixel-perfect designs'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Three.js']
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Startup',
      period: '2023',
      location: 'Ranchi, Jharkhand',
      type: 'Internship',
      achievements: [
        'Built responsive e-commerce platform handling 1000+ products',
        'Integrated payment gateways and real-time notifications',
        'Reduced page load times by 60% through code optimization',
        'Mentored junior developers in modern web technologies'
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe']
    },
    {
      title: 'Computer Science Student',
      company: 'BIT Mesra',
      period: '2022 - Present',
      location: 'Ranchi, Jharkhand',
      type: 'Education',
      achievements: [
        'Maintaining 8.5+ CGPA in Computer Science Engineering',
        'Led development team in college tech fest projects',
        'Won 2nd place in inter-college coding competition',
        'Active member of coding club and tech societies'
      ],
      tech: ['Data Structures', 'Algorithms', 'System Design', 'DBMS']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm font-rajdhani tracking-[0.3em] text-cyan-400 mb-4">
            MISSION HISTORY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-exo mb-6">
            Battle <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-2xl mx-auto">
            Strategic missions completed across various digital battlefields
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-red-500 to-purple-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-red-500 to-cyan-500 rounded-full transform md:-translate-x-1/2 z-10 border-2 border-black" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-black/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-exo font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-rajdhani font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-rajdhani font-medium ${
                        exp.type === 'Contract' ? 'bg-red-500/20 text-red-400' :
                        exp.type === 'Internship' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {exp.type}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm font-rajdhani text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-rajdhani font-medium text-gray-300 mb-2 flex items-center space-x-1">
                        <Trophy size={14} />
                        <span>KEY ACHIEVEMENTS</span>
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start space-x-2">
                            <Target size={12} className="text-green-400 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-rajdhani font-medium text-gray-300 mb-2">
                        TECH STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-rajdhani"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Years Experience', value: '2+', color: 'text-red-400' },
            { label: 'Projects Delivered', value: '15+', color: 'text-orange-400' },
            { label: 'Client Satisfaction', value: '100%', color: 'text-green-400' },
            { label: 'Code Quality', value: 'A+', color: 'text-cyan-400' }
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-black/30 border border-gray-700 p-4 rounded">
              <div className={`text-2xl font-exo font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs font-rajdhani text-gray-400 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;