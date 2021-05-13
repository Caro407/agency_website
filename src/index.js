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
import Footer from './components/Footer';
import ThemeContext from './ThemeContext';

const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState(false);
  let body = document.querySelector('body');

  const switchTheme = () => {
    body.classList.toggle('dark-theme');
    if(currentTheme === false) {
      setCurrentTheme(true);
      localStorage.setItem('theme', "true");
    } else {
      setCurrentTheme(false);
      localStorage.setItem('theme', "false");
    };

  };

  React.useEffect(() => {
    const saveTheme = () => {
      let savedTheme = localStorage.getItem('theme');
      if(savedTheme === null || savedTheme === "false") {
        localStorage.setItem('theme', `${currentTheme}`);
      } else {
        switchTheme();
      };
    }
    saveTheme()
  }, []);

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
          <Footer />
        </Router>
      </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
