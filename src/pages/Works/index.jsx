import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Project from './../../components/Project';
import projects from './../../data/projects';

const Works = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="page-element">
      <div className="top-dividor mx-auto w-80 mt-6"></div>
        <h2 className="text-center">Nos projets</h2>
      <div className="bottom-dividor mx-auto w-80 mb-6"></div>
        <section className="container mx-auto">
          <h2 className="w-full my-2 text-3xl leading-tight text-center">
            Nous avons travaillé avec...
          </h2>

          <ul className="work-items">
            {projects.map((project, index) =>
              <li key={index} className="work-element">
                <Link to={`${url}/${project.url}`}>{project.customer}</Link>
              </li>
            )}
          </ul>
        </section>

      <Switch>
        <Route path={`${path}/:projectId`}>
          <Project />
        </Route>
      </Switch>
    </div>
  )
}

export default Works;
