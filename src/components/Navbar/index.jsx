import React from 'react';
import {
  Link,
} from 'react-router-dom';
import ThemeContext from './../../ThemeContext';

const Navbar = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <nav>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1>Agency's Website</h1>
          <Link to="/home">Home</Link>
          <Link to="/about">L'agence</Link>
          <Link to="/works">Projets</Link>
        </div>
        <div className="col-span-1">
          <button className="btn flex justify-center items-center" onClick={theme.switchTheme}>Day/Night Mode</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
