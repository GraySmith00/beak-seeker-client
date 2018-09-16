import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = props => {
  return (
    <div className="footer">
      <NavLink exact to={'/home'}>
        <p>
          <i className="fas fa-home" />
        </p>
      </NavLink>
    </div>
  );
};

export default Footer;
