import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';

import './PostTweet.css';

class PostTweet extends Component {
  constructor() {
    super();
    this.state = {
      tweetText: ''
    };
  }

  postTweet = async () => {
    const payload = {
      userId: this.props.currentUser._id,
      status: this.state.tweetText
    };
    const url = 'http://localhost:5000/twitter/posttweet';
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
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
            rows="10"
          >
            {this.state.tweetText}
          </textarea>
          <button onClick={this.postTweet}>Tweet this</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(PostTweet);
