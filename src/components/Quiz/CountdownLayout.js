import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { shuffle } from 'lodash';

import Container from '../Container';
import Pink from '../../assets/brand/brand-block-pink.svg';
import Blue from '../../assets/brand/brand-block-blue.svg';
import Green from '../../assets/brand/brand-block-green.svg';
import Orange from '../../assets/brand/brand-block-orange.svg';

//

const StartLayout = ({ page }) => {
  // *
  // * Set state

  const [timer, setTimer] = useState(3);
  const [blocks] = useState([Pink, Orange, Green, Blue]);
  let newBlocks = shuffle(blocks);

  // *
  // * Count it down

  function countdown() {
    if (timer >= 2) {
      setTimer(timer - 1);
      newBlocks = shuffle(blocks);
    } else {
      page(2);
    }
  }

  setTimeout(() => {
    countdown();
  }, 1000);

  // *
  // * Return it

  return (
    <CountdownWrap>
      <GetReady>Get ready...</GetReady>
      <Number>
        <span>{timer}</span>

        <BrandIcons>
          {newBlocks.map((block) => (
            <img src={block} alt="" />
          ))}
        </BrandIcons>
      </Number>
    </CountdownWrap>
  );
};

export default StartLayout;

//

const CountdownWrap = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(92vh - 7rem);
  overflow-y: hidden;
`;

const GetReady = styled.h4`
  margin: 0;
  color: var(--ef-black);
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
  cursor: default;

  @media (min-width: 640px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const Number = styled.div`
  position: relative;
  cursor: default;

  & span {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 32rem;
    line-height: 26rem;

    @media (max-width: 640px) {
      font-size: 24rem;
      line-height: 20rem;
    }
  }
`;

const FloatAnim = keyframes`
  0% { transform: translate(0,  0) rotate(0); } 
  50%  { transform: translate(0, 1rem) rotate(-45deg); } 
  100%   { transform: translate(0, -0) rotate(0); } 
`;

const FloatAnimAlt = keyframes`
  0% { transform: translate(0,  0) rotate(0); } 
  50%  { transform: translate(0, -1rem) rotate(35deg); } 
  100%   { transform: translate(0, -0) rotate(0); } 
`;

const BrandIcons = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  pointer-events: none;

  & img {
    width: 4rem;

    @media (min-width: 960px) {
      width: unset;
    }
  }

  & > * {
    position: absolute;
  }

  & img:nth-of-type(1) {
    /* Pink */
    top: 1rem;
    left: -12%;
    animation: ${FloatAnim} 30s linear infinite;

    @media (min-width: 640px) {
      left: -4rem;
    }
  }

  & img:nth-of-type(2) {
    /* Orange */
    top: 8rem;
    left: -20%;
    animation: ${FloatAnimAlt} 15s linear infinite;

    @media (min-width: 640px) {
      left: -8rem;
    }
  }

  & img:nth-of-type(3) {
    /* Green */
    right: -15%;
    bottom: 1rem;
    animation: ${FloatAnim} 15s linear infinite;
    animation-direction: alternate-reverse;
  }

  & img:nth-of-type(4) {
    /* Blue */
    right: 5%;
    bottom: -6rem;
    animation: ${FloatAnimAlt} 30s linear infinite;
  }
`;

//

StartLayout.propTypes = {
  page: PropTypes.func.isRequired,
};
