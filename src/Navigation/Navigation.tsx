import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routesPaths } from '../routes';

import './style.css';

export const Navigation = () => {
  const [navigationVisible, setNavigationVisible] = useState<boolean>(true);
  const handleShowMobileNav = () => {
    setNavigationVisible(!navigationVisible);
  };

  return (
    <div className="Navigation">
      <div className="Navigation-mobile">
        <MenuIcon color="primary" onClick={handleShowMobileNav}/>
      </div>
      {navigationVisible && <div className="Navigation-links">
        <Link className="App-link" to={'/'}>Home</Link>
        <Link className="App-link" to={`/${routesPaths.about}`}>About </Link>
        <Link className="App-link" to={`/${routesPaths.form}`}>Form</Link>
      </div>}
    </div>
  );
};
