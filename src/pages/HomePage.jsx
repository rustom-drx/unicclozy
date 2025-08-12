import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import HomeBackground from '../assets/images/home-bg.jpg'; // <-- ADD THIS LINE

const pageVariants = { initial: { opacity: 0, scale: 0.98 }, in: { opacity: 1, scale: 1 }, out: { opacity: 0, scale: 0.98 } };
const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.6 };

function HomePage() {
  return (
    <Motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${HomeBackground})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">Bringing Your Vision to Life</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">We are a creative powerhouse specializing in stunning visuals, from breathtaking 3D animations to sleek mobile app designs.</p>
          <Link to="/services" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105">Explore Our Services</Link>
        </div>
      </section>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">CreativeForge is more than just an agency; we're a passionate team of artists, designers, and developers dedicated to pushing the boundaries of digital creativity.</p>
          <Link to="/about" className="border border-indigo-500 text-indigo-400 font-bold py-3 px-8 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300">Learn More About Us</Link>
        </div>
      </section>
    </Motion.div>
  );
}
export default HomePage;