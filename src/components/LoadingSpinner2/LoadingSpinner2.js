import React from 'react';
import birdLoader from './birdLoader2.gif';

import './LoadingSpinner2.css';

const LoadingSpinner2 = () => {
  return (
    <div className="loading-spinner2">
      <img src={birdLoader} alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner2;
