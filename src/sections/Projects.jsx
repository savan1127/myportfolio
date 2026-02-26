import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Amazon Clone",
    description: "A static responsive UI replicating Amazon's homepage with modular components.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://amazoclon.netlify.app/",
    image: "/images/amaclon.png",
  },
  {
    title: "BMI Calculator",
    description: "Interactive BMI calculator with input validation and dynamic results.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://bmicalculatly.netlify.app/",
    image: "/images/BMIcl.png",
  },
  {
    title: "Weather Web",
    description: "Live weather updates using OpenWeatherMap API with responsive design.",
    tech: ["HTML","CSS","JavaScript", "API Integration"],
    link: "https://checkcityweatheer.netlify.app/",
    image: "/images/weather.png",
  },
  {
    title: "Reandom Jokes",
    description: "The core functionality is powered by JavaScript and API integration, fetching fresh jokes on demand to keep users entertained.",
    tech: ["HTML","CSS","JavaScript", "API Integration", "Bootstrap"],
    link: "https://tolaugh.netlify.app/",
    image: "/images/rjoke.png",
  },
  {
    title: "Responsive Portfolio",
    description: "Personal portfolio with animated sections and smooth scrolling.",
    tech: ["React","CSS", "Tailwind","Responsive Design"],
    link: "https://devrathod.netlify.app/",
    image: "/images/myweb.png",
  },
  {
    title: "Abc... with Fun",
    description: "Alphabet Explorer is a fun, responsive web app that helps users learn the English alphabet interactively.",
    tech: ["HTML","CSS","SOUND" , "JavaScript","Responsive Design"],
    link: "https://acbwithfun.netlify.app/",
    image: "/images/abcgame.png",
  },
  {
    title: "Age Calculator",
    description: "Converted Figma design into responsive HTML/CSS layout.",
    tech: ["HTML", "CSS", "Responsive Design"],
    link: "https://agescalculater.netlify.app/",
    image: "/images/birthcl.png",
  },
  {
    title: "Chess Game",
    description: "A fully functional chess game with drag-and-drop piece movement and basic rules implemented.",
    tech: ["HTML","CSS","JavaScript"],
    link: "https://sr-chess.netlify.app/",
    image: "/images/chess.png",
  },
  {
    title: "Luxe Showroom",
    description: "This project includes dynamic car filtering, modal previews, YouTube integration, booking forms, dark/light mode, and more.",
    tech: ["HTML","CSS","JavaScript"],
    link: "https://luxe-showroom.netlify.app/",
    image: "/images/luxe-showroom.png",
  }
];


const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      className="min-h-screen py-20 px-6 sm:px-10 md:px-20 flex flex-col justify-center bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white"
      id="projects"
    >
      <div className="w-full max-w-6xl mx-auto">
      <h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        data-aos="fade-down"
      >
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="relative rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-2"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-75 rounded-xl z-0"></div>
            <div className="relative z-10 p-4 rounded-xl h-full text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 px-4 py-2 rounded transition duration-300"
              >
                View Project
              </a>
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

export default Projects;