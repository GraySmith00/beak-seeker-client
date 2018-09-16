import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div>
        <h1>PostTweet</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="tweetText"
            value={this.state.tweetText}
          />
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
