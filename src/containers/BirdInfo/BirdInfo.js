import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBirdImage } from '../../utils/helpers';

class BirdInfo extends Component {
  constructor() {
    super();
    this.state = {
      birdImage: ''
    };
  }
  async componentDidMount() {
    const birdImage = await getBirdImage(this.props.bird.comName);
    this.setState({
      birdImage
    });
  }

  render() {
    return (
      <div>
        <h1>BirdInfo</h1>
        <img src={this.state.birdImage} alt="Bird Image" />
      </div>
    );
  }
}

BirdInfo.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdInfo;
