import React, { Component } from 'react';
import './BadgeModal.css';

class BadgeModal extends Component {
  render() {
    const { numSighted, handleModalClose, locName } = this.props;

    let displayTrophy;
    let badgeText;

    if (numSighted === 6) {
      displayTrophy = (
        <i className="fas fa-trophy" style={{ color: 'silver' }} />
      );
      badgeText = 'silver';
    } else if (numSighted === 8) {
      displayTrophy = <i className="fas fa-trophy" style={{ color: 'gold' }} />;
      badgeText = 'gold';
    }

    return (
      <div className="badge-modal">
        <div className="modal-inner">
          <h1>Congratulations!</h1>
          {displayTrophy}
          <div className="modal-card-bottom">
            <p
            >{`You've earned a ${badgeText} badge for sighting ${numSighted} birds at ${locName}!`}</p>
            <div className="modal-buttons">
              <button onClick={handleModalClose} className="close">
                Close
              </button>
              <button className="tweet-badge">Tweet this Badge</button>
              <button className="view-badges">View my Badges</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeModal;
