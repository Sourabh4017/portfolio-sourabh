import React from 'react';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  { id:1, title:'Project One', desc:'A cool MERN app', tags:['React','Node','MongoDB'], demo:'#', repo:'#' },
  { id:2, title:'Project Two', desc:'Another project', tags:['React','API'], demo:'#', repo:'#' }
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
