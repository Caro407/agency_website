import React from 'react';
import {
  Link,
} from 'react-router-dom';
import ThemeContext from './../../ThemeContext';
//import logo from './../../images/logo.svg';
import {ReactComponent as ReactLogo} from './../../images/logo.svg';

const Navbar = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <nav className="my-3">
      <div className="text-center">
        <h1>The Agency</h1>
        <div className="flex flex-row justify-center">
          <ReactLogo />
        </div>
        <div className="flex flex-row justify-center">
          <Link to="/home">Accueil</Link>
          <Link to="/about">L'agence</Link>
          <Link to="/works">Projets</Link>
        </div>
        <div className="col-span-1 mt-2">
          <button className="btn flex justify-center items-center" onClick={theme.switchTheme}>
            <i class="fas fa-sun theme-icon"></i>
             /
            <i class="fas fa-moon theme-icon"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
