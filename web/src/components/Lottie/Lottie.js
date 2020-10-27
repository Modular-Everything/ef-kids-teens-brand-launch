import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './ef.json';

//

const LottieAnim = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderer: 'canvas',
  };

  return <Lottie options={defaultOptions} />;
};

export default LottieAnim;
