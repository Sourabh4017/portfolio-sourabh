import React from 'react';

export default function ProjectCard({ project }){
  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map(t => <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>)}
      </div>
      <div className="flex gap-2">
        <a href={project.demo} className="text-sm underline">Demo</a>
        <a href={project.repo} className="text-sm underline">Repo</a>
      </div>
    </div>
  );
}
