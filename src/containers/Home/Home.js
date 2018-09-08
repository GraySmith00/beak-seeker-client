import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import HotspotsList from '../HotspotsList/HotspotsList';

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="home">
          <nav>
            <NavLink to="/hotspots">Nearby Hotspots</NavLink>
          </nav>
          <main>
            <Switch>
              <Route exact path="/hotspots" component={HotspotsList} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default Home;
