import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './ef.json';

//

const LottieAnim = () => {
  console.log(animationData);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderer: 'canvas',
    rendererSettings: {
      preserveAspectRatio: 'xMinYMin slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export default LottieAnim;
