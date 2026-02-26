import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { MdDesignServices, MdSpeed } from 'react-icons/md';
import { HiOutlineLightBulb, HiOutlineDeviceMobile } from 'react-icons/hi';
import { FaLaptopCode, FaTools } from 'react-icons/fa';
import { TbBrandTailwind, TbRocket } from 'react-icons/tb';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging user interfaces with a focus on user experience.',
    icon: <MdDesignServices />,
    color: 'text-pink-500',
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, pixel-perfect websites using React, Tailwind CSS, and modern tools.',
    icon: <FaLaptopCode />,
    color: 'text-indigo-500',
  },
  {
    title: 'Mobile Optimization',
    description: 'Ensuring seamless performance across all devices with adaptive design strategies.',
    icon: <HiOutlineDeviceMobile />,
    color: 'text-green-500',
  },
  {
    title: 'Tailwind Mastery',
    description: 'Advanced Tailwind config editing, custom animations, and scalable utility-first styling.',
    icon: <TbBrandTailwind />,
    color: 'text-cyan-500',
  },
  {
    title: 'Performance Tuning',
    description: 'Speed-focused builds with optimized assets, lazy loading, and clean architecture.',
    icon: <MdSpeed />,
    color: 'text-yellow-500',
  },
  {
    title: 'Creative Branding',
    description: 'Unique naming, visual identity, and storytelling that elevate your digital presence.',
    icon: <HiOutlineLightBulb />,
    color: 'text-orange-500',
  },
  {
    title: 'Debug & Troubleshoot',
    description: 'Proactive bug fixing, layout corrections, and import/path resolution in React/Vite.',
    icon: <FaTools />,
    color: 'text-red-500',
  },
  {
    title: 'Launch Strategy',
    description: 'Helping you deploy, present, and promote your portfolio or product with impact.',
    icon: <TbRocket />,
    color: 'text-purple-500',
  },
];

const Service = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-r from-black via-gray-900 to-gray-800 bg-fixed bg-cover bg-center text-white"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          My Services
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 105}
              className="group relative bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-10 transition duration-500 transform hover:-translate-y-2 hover:scale-[1.05] hover:bg-gradient-to-br hover:from-indigo-500 hover:via-purple-800 hover:to-pink-400 hover:text-white border border-gray-600 hover:border-transparent overflow-hidden"
            >
              {/* Glow Background */}
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-xl z-0"></span>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`text-4xl mb-3 ${service.color} transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-100">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;



