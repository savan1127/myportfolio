import React, { useEffect } from 'react';
import profileImg from '../assets/mypic.png';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-8 md:px-20 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" data-aos="fade-down">
        About Me
      </h2>

      {/* Card Container */}
      <div
        className="w-full max-w-6xl bg-gradient-to-r from-slate-900 via-gray-800 to-gray-700 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8"
        data-aos="fade-up"
      >
        {/* Image Section */}
        <div
          className="bg-gray-600 dark:bg-gray-700 rounded-lg shadow-md p-2 w-48 sm:w-60 flex justify-center mx-auto"
          data-aos="zoom-in"
        >
          <img
            src={profileImg}
            alt="Savan Rathod"
            className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-md"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 w-full space-y-4 pt-6 md:pt-0" data-aos="fade-left">
          <p className="text-base sm:text-lg dark:text-gray-300">
            <span className="font-semibold text-indigo-400">
              More Than 6+ Months React.js And Designing Experience
            </span>
          </p>

          <p className="text-base leading-relaxed">
            I’m <span className="font-bold text-blue-200">Savan Rathod</span>, a passionate front-end developer and UI/UX designer in training, currently expanding into backend development with Node.js. I completed my 12th Science in 2019 and earned my Diploma in Information Technology in 2026 from Government Polytechnic College, Rajkot. I’ve also completed front-end development training at Felix-IT Solutions, where I mastered responsive design, modern frameworks, and the art of building visually refined web experiences.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-base sm:text-lg text-white dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Name:</span> Savan Rathod
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> Ahmedabad, Gujarat
            </div>
            
            <div className="flex items-center gap-2">
  <a
    href="mailto:savanrathod8378@gmail.com"
    className="flex items-center gap-2 text-white hover:underline"
    aria-label="Send email to Savan Rathod"
  >
    <FaEnvelope className="text-lg" />
    <span>savanrathod8378@gmail.com</span>
  </a>
</div>


          </div>

          {/* CTA Section */}
          <div className="flex justify-center mt-4" data-aos="fade-up">
            <a
  href="./assets/mycv.pdf"
  download="mycv.pdf"
  className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-pulse"
>
  <FaDownload className="text-lg" />
  <span className="z-10">Download My CV</span>
  

  {/* Glow Ring Animation */}
  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-30 blur-md animate-spin-slow"></span>
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

