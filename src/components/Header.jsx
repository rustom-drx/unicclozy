import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const linkClasses = ({ isActive }) => `capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`;

  return (
    <header className="bg-gray-800/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex-shrink-0 text-2xl font-bold text-white cursor-pointer flex items-center">
            <Box className="h-8 w-8 mr-2 text-indigo-500" />
            CreativeForge
          </NavLink>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={linkClasses}>Home</NavLink>
              <NavLink to="/services" className={linkClasses}>Services</NavLink>
              <NavLink to="/about" className={linkClasses}>About</NavLink>
              <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>) : (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>)}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={`${linkClasses({isActive: false})} block`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={`${linkClasses({isActive: false})} block`} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
            <NavLink to="/about" className={`${linkClasses({isActive: false})} block`} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={`${linkClasses({isActive: false})} block`} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;