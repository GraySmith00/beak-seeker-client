import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    const { numSighted } = this.props;

    return (
      <div className="progress-bar">
        <div className="total">
          <div className="caught" style={{ width: `${numSighted}0%` }} />
        </div>
        <p>{`(${numSighted}/10)`}</p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default ProgressBar;
