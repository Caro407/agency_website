import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import ThemeContext from './ThemeContext';

const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState(false);
  let body = document.querySelector('body');

  const switchTheme = () => {
    body.classList.toggle('dark-theme');
    if(currentTheme === false) {
      setCurrentTheme(true)
    } else {
      setCurrentTheme(false)
    }
  };

  return (
      <ThemeContext.Provider value={{
          currentTheme,
          switchTheme
        }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </Router>
      </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
