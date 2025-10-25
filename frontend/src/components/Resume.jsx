import React from 'react';

export default function Resume(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p>You can add a downloadable resume PDF here. Example:</p>
      <a href="/resume.pdf" download className="inline-block mt-3 px-4 py-2 border rounded">Download Resume (PDF)</a>
    </section>
  );
}
