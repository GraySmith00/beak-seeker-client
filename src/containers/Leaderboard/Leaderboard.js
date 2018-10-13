import React, { Component } from 'react';
import { getLeaderboard } from '../../utils/apiCalls';

import Header from '../../components/Header/Header';

import './Leaderboard.css';

class Leaderboard extends Component {
  state = {
    error: '',
    leaderboard: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const leaderboard = await getLeaderboard();
      this.setState({ leaderboard, loading: false });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { leaderboard, loading } = this.state;
    let displayLeaderboard;

    if (!loading) {
      displayLeaderboard = leaderboard.map((user, i) => (
        <div key={user.name} className="leader-row">
          <span>{i + 1}</span>
          <span>{user.name}</span>
          <span>{user.numSightings}</span>
        </div>
      ));
    }
    return (
      <div className="leaderboard">
        <Header currentPage="Leaderboard" />

        <div className="main-content">
          <div className="leader-row">
            <span>Place</span>
            <span>Name</span>
            <span>Sightings</span>
          </div>
          {displayLeaderboard}
        </div>
      </div>
    );
  }
}

export default Leaderboard;
