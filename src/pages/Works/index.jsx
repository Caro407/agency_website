import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Project from './../../components/Project';
import projects from './../../data/projects';

const Works = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="page-element">
      <div className="top-dividor"></div>
        <h2 className="text-center">Works</h2>
      <div className="bottom-dividor"></div>
      <ul className="work-items">
        {projects.map((project, index) =>
          <li key={index} className="work-element">
            <Link to={`${url}/${project.url}`}>{project.customer} project</Link>
          </li>
        )}
      </ul>

      <Switch>
        <Route path={`${path}/:projectId`}>
          <Project />
        </Route>
      </Switch>
    </div>
  )
}

export default Works;
