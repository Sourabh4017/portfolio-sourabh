import React from 'react';

export default function About(){
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Sourabh Mehra!</h1>
      <p className="mb-4"> Seeking a Software Developer role where I can apply my strong coding skills to build
 impactful software solutions, continuously learn emerging technologies, and contribute to
 the company's success through smart and efficient development practices. , I have worked
 on full stack development related projects and I also do Ul design.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>Write a paragraph about your background, education, and interests. Keep it concise and friendly.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Quick Info</h2>
          <ul className="list-disc pl-5">
            <li>Location: Bhopal</li>
            <li>Availability: Open to work </li>
            <li>Experience: 1+ years</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
