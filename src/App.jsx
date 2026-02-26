import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './common/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Service';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './common/Footer';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1); // removes leading slash
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Header />
      <ScrollToSection />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact/></section>
        <section id="footer"><Footer/></section>
      </main>

      {/* Back to Top Button */}
      {showTopBtn && (
  <div className="fixed bottom-6 right-6 z-50 group">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      data-aos="fade-up-left"
      data-aos-delay="300"
      className="w-14 h-14 flex items-center justify-center rounded-full text-white text-3xl transition-all duration-300 hover:border-transparent hover:shadow-[0_0_10px_rgba(99,102,241,0.7)]"
    >
      <span className="group-hover:animate-bounce">⬆</span>
    </button>

  </div>
)}

    </Router>
  );
}

export default App;