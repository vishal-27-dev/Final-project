import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Arsenal',
      icon: Globe,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js', level: 80 },
        { name: 'WebGL', level: 75 }
      ]
    },
    {
      title: 'Backend Systems',
      icon: Server,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel', level: 88 },
        { name: 'Linux', level: 80 },
        { name: 'CI/CD', level: 72 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm font-rajdhani tracking-[0.3em] text-red-400 mb-4">
            TECHNICAL SPECIFICATIONS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-exo mb-6">
            Combat <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-2xl mx-auto">
            Advanced weaponry and tactical systems mastered through countless battles in the digital realm
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-black/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-exo font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-rajdhani font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                        
                        {/* Skill level markers */}
                        {[25, 50, 75].map((marker) => (
                          <div
                            key={marker}
                            className="absolute top-0 w-px h-full bg-gray-600"
                            style={{ left: `${marker}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category stats */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex justify-between text-xs font-rajdhani text-gray-500">
                    <span>AVG PROFICIENCY</span>
                    <span>{Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gaming achievements */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Lines of Code', value: '50K+', color: 'text-red-400' },
            { label: 'Projects Completed', value: '15+', color: 'text-orange-400' },
            { label: 'Technologies Mastered', value: '20+', color: 'text-cyan-400' },
            { label: 'Coffee Consumed', value: '∞', color: 'text-green-400' }
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

export default Skills;