import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import styled from 'styled-components';

import * as animationData from '../../assets/K&T_Indonesia_Blocks_Animation.json';
import useSpace from '../../hooks/useSpace';

//

const LottieAnim = ({ spacing }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: 'xMinYMin slice',
    },
  };

  return (
    <LottieWrap style={useSpace(spacing)}>
      <Lottie options={defaultOptions} />
    </LottieWrap>
  );
};

export default LottieAnim;

//

const LottieWrap = styled.section`
  & svg {
    transform: translate3d(-12vw, 0px, 0px) !important;
  }
`;

//

LottieAnim.propTypes = {
  spacing: PropTypes.array,
};

LottieAnim.defaultProps = {
  spacing: [0, 0],
};
