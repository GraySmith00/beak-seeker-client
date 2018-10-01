import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { tweetPostRequest } from '../../utils/apiCalls';
import Header from '../../components/Header/Header';

import './PostTweet.css';

export class PostTweet extends Component {
  constructor() {
    super();
    this.state = {
      tweetText: '',
      error: ''
    };
  }

  componentDidMount() {
    this.populateTweet();
  }

  populateTweet = () => {
    const { currentUser, hotspots, myHotspots } = this.props;
    const { comName, locationId } = currentUser.sightings[
      currentUser.sightings.length - 1
    ];

    const { locName } =
      hotspots.find(hotspot => hotspot.locId === locationId) ||
      myHotspots.find(hotspot => hotspot.locId === locationId);

    const tweetText = `Just spotted a sweet ${comName} at ${locName} and logged it on @BeakSeeker!!!`;

    this.setState({ tweetText });
  };

  postTweet = () => {
    const payload = {
      userId: this.props.currentUser._id,
      status: this.state.tweetText
    };

    tweetPostRequest(payload);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postTweet();
    this.setState({
      tweetText:
        'Tweet sent! Tweet @BeakSeeker about another bird sighting if you want!'
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="post-tweet">
        <Header currentPage="Post Tweet" />
        <form onSubmit={this.handleSubmit} className="twitter-form">
          <textarea
            className="text-box"
            onChange={this.handleChange}
            type="text"
            name="tweetText"
            rows="6"
            value={this.state.tweetText}
          />
          <button onClick={this.postTweet}>Send Tweet</button>
        </form>
      </div>
    );
  }
}

PostTweet.propTypes = {
  currentUser: PropTypes.object.isRequired,
  hotspots: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  hotspots: state.hotspots,
  myHotspots: state.myHotspots
});

export default connect(mapStateToProps)(PostTweet);
