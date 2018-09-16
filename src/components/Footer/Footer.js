import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = props => {
  return (
    <footer className="footer">
      <NavLink exact to={'/home'} className="nav-link">
        <p>
          <i className="fas fa-home" />
        </p>
      </NavLink>
      <NavLink exact to={'/hotspots'} className="nav-link">
        <p>
          <i className="fas fa-map-marked-alt" />
        </p>
      </NavLink>
      <NavLink exact to={'/logout'} className="nav-link">
        <p>
          <i className="fas fa-sign-out-alt" />
        </p>
      </NavLink>
    </footer>
  );
};

export default Footer;
