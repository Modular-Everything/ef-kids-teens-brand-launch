import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlocksSad from '../../assets/brand/blocks-sad.svg';
import BlocksHappy from '../../assets/brand/blocks-happy.svg';

//

const MoodyBlocks = ({ mood }) => (
  <BgBlocks
    src={mood === 'happy' ? BlocksHappy : BlocksSad}
    alt={`${mood} blocks`}
  />
);

export default MoodyBlocks;

//

const BgBlocks = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  pointer-events: none;

  @media (min-width: 1500px) {
    bottom: -12vh;
  }
`;

//

MoodyBlocks.propTypes = {
  mood: PropTypes.string.isRequired,
};
