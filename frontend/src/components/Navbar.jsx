import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ dark, setDark }){
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">MyPortfolio</Link>
        <div className="flex items-center gap-4">
          <Link to="/projects" className="hidden md:inline">Projects</Link>
          <Link to="/skills" className="hidden md:inline">Skills</Link>
          <Link to="/resume" className="hidden md:inline">Resume</Link>
          <Link to="/contact" className="btn">Contact</Link>
          <button onClick={() => setDark(!dark)} className="p-2 rounded bg-gray-100 dark:bg-gray-700">
            {dark ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
