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

        <div className="card">
          <div className="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
            <h2 className="w-full p-5 text-center">{displayedProject.customer}</h2>
            <div className="top-dividor w-full"></div>
            <ul className="w-full text-center text-base font-bold">
              <li className="list-element">
                Equipe en charge du projet :
                <p className="sublist-element">Bouh</p>
              </li>
              <li className="list-element">
                Durée du projet
                <p className="sublist-element">Bouh</p>
              </li>
              <li className="list-element">
                Description
                <p className="sublist-element">{displayedProject.description}</p>
              </li>
              <li className="list-element">
                Retour client
                <p className="sublist-element">Bouh</p>
              </li>
            </ul>
          </div>
          <div className="flex-none mt-auto rounded-b rounded-t-none overflow-hidden shadow p-6">
            <h2 className="w-full text-center">
            Envie d'en savoir plus ?
          </h2>
            <div className="flex items-center justify-center">
              <button className="btn btn-lg lg:mx-0 my-4 hover:underline focus:shadow-outline">
                Contactez-nous !
              </button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Project;
