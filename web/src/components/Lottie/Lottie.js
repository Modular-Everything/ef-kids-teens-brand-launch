import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import * as animationData from './ef.json';
import handleSpace from '../../helpers/handleSpace';

//

const LottieAnim = ({ spacing }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderer: 'canvas',
  };

  return (
    <Lottie
      options={defaultOptions}
      style={(handleSpace(spacing), { border: '1px solid #ddd' })}
    />
  );
};

export default LottieAnim;

//

LottieAnim.propTypes = {
  spacing: PropTypes.array,
};

LottieAnim.defaultProps = {
  spacing: [0, 0],
};
