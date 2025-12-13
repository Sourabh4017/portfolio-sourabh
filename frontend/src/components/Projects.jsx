import React from 'react';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  { id:1, title:'Wanderlust', desc:'Wanderlust is a dynamic full-stack web application that allows users to explore, create and manage travel destination listings  Inspired bytravel platforms like Airbnb, this project demonstrates CRUD operations, formvalidations, database integration, and relational data handling.', tags:['React', 'JavaScript','Node','MongoDB', 'Bootstrap', 'Express', 'CSS', 'ejs'], demo:'https://wanderlust-project-yu4j.onrender.com/listings', repo:'#' },
  { id:2, title:'Cafe Nippon', desc:'User & Admin Authentication, Order Placement System, Admin Dashboard, Dynamic Menu Management, Order Status Tracker, Order Status Tracker', tags:['React','API', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB','REST API', 'JWT Auth'], demo:'#', repo:'#' }
];

export default function Projects(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
