
import React from 'react';
import mypic from '../assets/1st.png'; // Background-removed image
import TextAnimation from '../animate/Textanimate';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center justify-center"
    >

{/* Main Card with Image Inside */}
<div className="w-full max-w-6xl bg-gradient-to-r from-slate-900 via-gray-800 to-gray-700 rounded-xl shadow-2xl px-6 sm:px-8 md:px-10 pt-6 pb-0 flex flex-col md:flex-row items-center gap-8 z-10 relative">

  {/* Text Section */}
<div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 text-center md:text-left self-start">
  <h2 className="text-2xl sm:text-3xl font-light mb-2">I'm</h2>
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Savan Rathod</h1>
  <div className="w-full font-medium mx-auto md:mx-0 px-2 sm:px-0">
    <TextAnimation />
  </div>
</div>

  {/* Image Section - Inside Card, Touching Bottom */}
  <div className="w-full md:w-1/2 flex justify-center items-end">
    <img
      src={mypic}
      alt="Savan Rathod"
      className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-auto object-contain drop-shadow-xl"
    />
  </div>

</div>
    </section>
  );
};

export default Hero;