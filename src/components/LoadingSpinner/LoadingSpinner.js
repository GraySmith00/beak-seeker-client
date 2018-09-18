import React from 'react';
import birdLoader from './birdLoader.gif';

import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src={birdLoader} alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner;
