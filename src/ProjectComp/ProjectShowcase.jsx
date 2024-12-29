import React from 'react';
import ProjectCard from './ProjectCard';  // Import the ProjectCard component
import projectsData from "../API/projectsData.json"

const ProjectShowcase = () => {
  return (
    <>
    <div className="grid grid-cols-1 w-72 sm:w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          project_links={project.project_links}
        />
      ))}
    </div>
    </>
  );
};

export default ProjectShowcase;
