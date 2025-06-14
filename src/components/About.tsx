import React from 'react';
import { MapPin, GraduationCap, Heart, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-center mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-chakra-petch font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Bokaro, Jharkhand, India</p>
                <p className="text-sm text-gray-500 mt-1">Living in the heart of India's steel city</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-chakra-petch font-semibold mb-2">Education</h3>
                <p className="text-gray-600">BIT Mesra, Ranchi</p>
                <p className="text-sm text-gray-500 mt-1">3rd Year Student • 2022 Batch</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-chakra-petch font-semibold mb-2">Interests</h3>
                <p className="text-gray-600">Cricket & BGMI Gaming</p>
                <p className="text-sm text-gray-500 mt-1">When I'm not coding, you'll find me on the cricket field or gaming</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center">
                <Trophy className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-chakra-petch font-semibold mb-2">Expertise</h3>
                <p className="text-gray-600">Web Development & UI/UX Design</p>
                <p className="text-sm text-gray-500 mt-1">Creating modern, responsive web experiences</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-chakra-petch font-bold mb-6 text-center">Skills & Technologies</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React.js', 'TypeScript', 'Node.js', 'Next.js',
                  'Three.js', 'WebGL', 'Tailwind CSS', 'MongoDB',
                  'Express.js', 'Git', 'AWS', 'Docker'
                ].map((skill) => (
                  <div 
                    key={skill}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
                  >
                    <span className="font-chakra-petch font-medium text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BIT Mesra Logo Placeholder */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">BIT</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-chakra-petch text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer currently pursuing my degree at BIT Mesra. 
            I love creating interactive, modern web experiences that combine beautiful design 
            with cutting-edge technology. When I'm not coding, you can find me playing cricket 
            or strategizing in BGMI with friends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;