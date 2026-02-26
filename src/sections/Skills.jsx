import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaLaptopCode,
  FaFigma, FaGithub
} from 'react-icons/fa';

const allSkills =  [
  // Tech
  { name: 'HTML 5', category: 'Tech', icon: <FaHtml5 />, level: 95, color: 'bg-orange-500' },
  { name: 'CSS 3', category: 'Tech', icon: <FaCss3Alt />, level: 90, color: 'bg-blue-500' },
  { name: 'JavaScript', category: 'Tech', icon: <FaJsSquare />, level: 85, color: 'bg-yellow-400' },
  { name: 'React JS', category: 'Tech', icon: <FaLaptopCode />, level: 80, color: 'bg-cyan-500' },
  { name: 'Next JS', category: 'Tech', icon: <FaLaptopCode />, level: 75, color: 'bg-gray-400' },
  { name: 'Bootstrap 5', category: 'Tech', icon: <FaBootstrap />, level: 85, color: 'bg-purple-500' },
  { name: 'Tailwind CSS', category: 'Tech', icon: <FaLaptopCode />, level: 88, color: 'bg-teal-400' },

  // Design
  { name: 'Figma to HTML', category: 'Design', icon: <FaFigma />, level: 80, color: 'bg-pink-400' },
  { name: 'Responsive Design', category: 'Design', icon: <FaLaptopCode />, level: 92, color: 'bg-green-400' },
  { name: 'Hosting & Domain', category: 'Design', icon: <FaLaptopCode />, level: 70, color: 'bg-indigo-400' },
  { name: 'Single Page App', category: 'Design', icon: <FaLaptopCode />, level: 78, color: 'bg-red-400' },

  // Tools
  { name: 'GitHub', category: 'Tools', icon: <FaGithub />, level: 85, color: 'bg-gray-600' },
  { name: 'WordPress', category: 'Tools', icon: <FaLaptopCode />, level: 65, color: 'bg-blue-300' },
  { name: 'Netlify', category: 'Tools', icon: <FaLaptopCode />, level: 70, color: 'bg-green-300' },
  { name: 'Stack Overflow', category: 'Tools', icon: <FaLaptopCode />, level: 90, color: 'bg-orange-300' },
  { name: 'Canva', category: 'Tools', icon: <FaLaptopCode />, level: 75, color: 'bg-pink-300' },
  { name: 'Adobe Express', category: 'Tools', icon: <FaLaptopCode />, level: 70, color: 'bg-red-300' },
  { name: 'Freepik', category: 'Tools', icon: <FaLaptopCode />, level: 80, color: 'bg-yellow-300' },
  { name: 'PosterMyWall', category: 'Tools', icon: <FaLaptopCode />, level: 65, color: 'bg-purple-300' },
  { name: 'ChatGPT', category: 'Tools', icon: <FaLaptopCode />, level: 95, color: 'bg-green-500' },
  { name: 'Copilot', category: 'Tools', icon: <FaLaptopCode />, level: 95, color: 'bg-blue-500' },
];
const categories = ['All', 'Tech', 'Design', 'Tools'];

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSkill, setActiveSkill] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter(skill => skill.category === selectedCategory);

  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6);

  return (
    <section
  id="skills"
  className="min-h-screen py-24 px-8 sm:px-12 md:px-20 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white"
>
<div className="max-w-6xl mx-auto">
           <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10" data-aos="fade-down">
        My Skills
      </h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false); // reset on category change
            }}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300'
            } hover:bg-indigo-500 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
        {visibleSkills.map((skill, index) => (
          <div
            key={skill.name}
            onClick={() => setActiveSkill(skill)}
            className="cursor-pointer bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-5xl mb-4 text-white">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full mt-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Proficiency</span>
                <span className="text-gray-300">
                  <CountUp start={0} end={skill.level} duration={1.5} delay={0} />%
                </span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-3">
                <div className={`h-3 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      {filteredSkills.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}

      {/* Skill Detail Modal */}
      {activeSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-xl w-full max-w-sm sm:max-w-md text-center relative animate-fade-in" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setActiveSkill(null)} className="absolute top-2 right-4 text-white text-xl">✖</button>
            <div className="text-5xl sm:text-6xl mb-4">{activeSkill.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{activeSkill.name}</h3>
            <p className="text-gray-300 mb-4">Category: <span className="text-indigo-400">{activeSkill.category}</span></p>
            <p className="text-yellow-400 font-semibold text-base sm:text-lg">Proficiency: <CountUp start={0} end={activeSkill.level} duration={1.5} delay={0} />%</p>
          </div>
        </div>
      )}

      {/* Gujarati Touch */}
      <p className="text-center text-yellow-400 text-lg mt-12" data-aos="flip-up">
        “My skill is my weapon...” 💻✨
      </p>
</div>
    </section>
  );
};

export default Skill;

