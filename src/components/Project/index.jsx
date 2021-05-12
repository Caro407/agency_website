import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './../../data/projects';

const Project = () => {
  let { projectId } = useParams();
  let [displayedProject, setDisplayedProject] = React.useState({customer: '', description: ''});

  React.useEffect(() => {
    projects.forEach((project) => {
      if(project.url === projectId) {
        setDisplayedProject({customer: project.customer, description: project.description})
      }
    }
    );
  }, [projectId]);

  return (
    <div>
      <h2>{displayedProject.customer}</h2>
      <p>Je suis une catégoyyyy de type {projectId}</p>
      <p>{displayedProject.description}</p>
    </div>
  )
}

export default Project;
