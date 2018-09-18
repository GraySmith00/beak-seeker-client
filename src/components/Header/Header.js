import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './Header.css';

const Header = ({ currentPage, history }) => {
  return (
    <div className="header">
      <span onClick={history.goBack} className="back-icon">
        <i className="fas fa-angle-left" />
      </span>
      <h3>{currentPage}</h3>
    </div>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
