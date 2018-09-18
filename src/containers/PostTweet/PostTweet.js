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
      tweetText: ''
    };
  }

  componentDidMount() {
    this.populateTweet();
  }

  populateTweet = () => {
    const { currentUser, hotspots } = this.props;
    const { comName, locationId } = currentUser.sightings[
      currentUser.sightings.length - 1
    ];

    const { locName } = hotspots.find(hotspot => hotspot.locId === locationId);

    const tweetText = `Just spotted a sweet ${comName} at ${locName} and logged it on @BeakSeeker!!!`;

    this.setState({ tweetText });
  };

  postTweet = async () => {
    const payload = {
      userId: this.props.currentUser._id,
      status: this.state.tweetText
    };

    try {
      await tweetPostRequest(payload);
    } catch (error) {
      console.log(error.message);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postTweet();
    this.setState({
      tweetText: ''
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

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  hotspots: state.hotspots
});

export default connect(mapStateToProps)(PostTweet);
