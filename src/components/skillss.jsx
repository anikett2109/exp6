import React from 'react';
import Projectprops from './Skills';// Import the Project component

function ProjectsPage() {
  // Define an array of project objects with data
  const projects = [
    {

      key:0,
      name: 'Project 1',
      techStack: 'React, Node.js, MongoDB',
      description: 'Yass!!!Finally got this running.',
    },
    {
      key:1,
      name: 'Project 2',
      techStack: 'Angular, Express.js, MySQL',
      description: 'Tears of Joy;))',
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h1>Projects Page</h1>
      <div>
        
        {projects.map((project, index) => (
          <Projectprops
            key={index}
            name={project.name}
            techStack={project.techStack}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;