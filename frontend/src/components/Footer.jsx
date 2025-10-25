import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container py-6 text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Your Name. Built with MERN.
      </div>
    </footer>
  );
}
