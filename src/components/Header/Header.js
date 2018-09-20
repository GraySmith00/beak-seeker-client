import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './Header.css';

export const Header = ({ currentPage, history }) => {
  let displayCurrentPage;
  switch (currentPage) {
    case 'Home':
      displayCurrentPage = (
        <span>
          <i className="fas fa-home" /> Home
        </span>
      );
      break;
    case 'Nearby Hotspots':
      displayCurrentPage = (
        <span>
          <i className="fas fa-map-marked-alt" /> Nearby Hotspots
        </span>
      );
      break;
    case 'Leaderboard':
      displayCurrentPage = (
        <span>
          <i className="fas fa-trophy" /> Leaderboard
        </span>
      );
      break;

    case 'Hotspot Info':
      displayCurrentPage = (
        <span>
          <i className="fas fa-fire" /> Hotspot Info
        </span>
      );
      break;

    case 'Bird Info':
      displayCurrentPage = (
        <span>
          <i className="fas fa-dove" /> Bird Info
        </span>
      );
      break;

    default:
      break;
  }

  return (
    <div className="header">
      <span onClick={history.goBack} className="back-icon">
        <i className="fas fa-angle-left" />
      </span>
      <h3>{displayCurrentPage}</h3>
    </div>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
