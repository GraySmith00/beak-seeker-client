import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BadgeModal.css';

class BadgeModal extends Component {
  constructor() {
    super();
    this.state = {
      tweetText: '',
      badge: ''
    };
  }

  componentDidMount() {
    const { numSighted, locName } = this.props;
    let badge;

    if (numSighted === 6) {
      badge = 'silver';
    } else if (numSighted === 8) {
      badge = 'gold';
    }

    const tweetText = `Just earned a new ${badge} badge on @beakseeker for sighting ${numSighted} birds at ${locName}!!!`;

    this.setState({ tweetText, badge });
  }

  render() {
    const { numSighted, handleModalClose, locName } = this.props;
    const { badge } = this.state;

    return (
      <div className="badge-modal">
        <div className="modal-inner">
          <h1>Congratulations!</h1>
          <i className="fas fa-trophy" style={{ color: badge }} />
          <div className="modal-card-bottom">
            <p
            >{`You've earned a ${badge} badge for sighting ${numSighted} birds at ${locName}!`}</p>
            <div className="modal-buttons">
              <button onClick={handleModalClose} className="close">
                Close
              </button>
              <button className="view-badges">View my Badges</button>
            </div>
            <div className="tweet-badge">
              <textarea
                className="text-box"
                onChange={this.handleChange}
                type="text"
                name="tweetText"
                rows="3"
                value={this.state.tweetText}
              />
              <button className="tweet-button">Tweet this Badge</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeModal;
