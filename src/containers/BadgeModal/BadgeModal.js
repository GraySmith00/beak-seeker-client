import React, { Component } from 'react';
import './BadgeModal.css';

class BadgeModal extends Component {
  render() {
    return (
      <div className="badge-modal">
        <h1>BadgeModal</h1>
        <p onClick={this.props.handleModalClose}>x</p>
      </div>
    );
  }
}

export default BadgeModal;
