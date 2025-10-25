import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Intermediate' }
];

export default function Skills(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map(s => (
          <div key={s.name} className="p-4 border rounded bg-white dark:bg-gray-800">
            <h3 className="font-semibold">{s.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{s.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
