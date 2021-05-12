import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Project from './../../components/Project';
import projects from './../../data/projects';

const Works = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Works</h1>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a project.</h3>
        </Route>
        <Route path={`${path}/:projectId`}>
          <Project />
        </Route>
      </Switch>
      <ul>
        {projects.map(project => 
          <li>
            <Link to={`${url}/${project.url}`}>{project.customer} project</Link>
          </li>
        )}
      </ul>

    </div>
  )
}

export default Works;
