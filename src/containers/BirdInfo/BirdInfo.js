import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBirdImage, getBirdInfo } from '../../utils/helpers';

class BirdInfo extends Component {
  constructor() {
    super();
    this.state = {
      birdImage: '',
      birdInfo: ''
    };
  }
  async componentDidMount() {
    const { comName } = this.props.bird;
    const birdImage = await getBirdImage(comName);
    const birdInfo = await getBirdInfo(comName);
    this.setState({
      birdImage,
      birdInfo
    });
  }

  render() {
    const { birdImage, birdInfo } = this.state;
    return (
      <div>
        <h1>BirdInfo</h1>
        {birdImage ? (
          <img src={birdImage} alt={this.props.bird.comName} />
        ) : (
          <p>Sorry, we could not find an image of this bird at this time :(</p>
        )}
        <p>{birdInfo}</p>
      </div>
    );
  }
}

BirdInfo.propTypes = {
  bird: PropTypes.object.isRequired
};

export default BirdInfo;
