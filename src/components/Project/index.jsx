import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  let { projectId } = useParams();
  //let [displayedProject, setDisplayedProject] = React.useState('');

  return (
    <div>
      <p>Je suis une catégoyyyy de type {projectId}</p>
    </div>
  )
}

export default Project;
