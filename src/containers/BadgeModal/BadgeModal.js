import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BadgeModal.css';
import { connect } from 'react-redux';
import { tweetPostRequest } from '../../utils/apiCalls';

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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postTweet = () => {
    const payload = {
      userId: this.props.currentUser._id,
      status: this.state.tweetText
    };

    tweetPostRequest(payload);

    this.setState({
      tweetText: 'Tweet sent!'
    });
  };

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
                X Close
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
              <button onClick={this.postTweet} className="tweet-button">
                Tweet this Badge
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BadgeModal.propTypes = {
  currentUser: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  numSighted: PropTypes.number.isRequired,
  locName: PropTypes.string.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(BadgeModal);
