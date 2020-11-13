import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import useSpace from '../../hooks/useSpace';
import Button from '../Button';
import Pink from '../../assets/brand/brand-block-pink.svg';
import Blue from '../../assets/brand/brand-block-blue.svg';
import Green from '../../assets/brand/brand-block-green.svg';
import Orange from '../../assets/brand/brand-block-orange.svg';

//

const BrandedCTA = ({ title, copy, ctaLabel, ctaLink, spacing }) => (
  <CardWrapper style={useSpace(spacing)}>
    <CardContent>
      <div className="cta__caption">
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>

      <div className="cta__link">
        <Button label={ctaLabel} link={ctaLink} />
      </div>
    </CardContent>

    <BrandIcons>
      <img src={Pink} alt="" />
      <img src={Orange} alt="" />
      <img src={Green} alt="" />
      <img src={Blue} alt="" />
    </BrandIcons>
  </CardWrapper>
);

export default BrandedCTA;

//

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const FloatAnim = keyframes`
  0% { transform: translate(0,  0) rotate(0); } 
  25%  { transform: translate(0, 1rem) rotate(-45deg); } 
  50% { transform: translate(0,  0) rotate(0); } 
  75%  { transform: translate(0, 1rem) rotate(45deg); } 
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
    top: -4.5rem;
    transition: all 500ms cubic-bezier(0.86, 0, 0.07, 1); /* easeInOutQuint */
    animation: ${FloatAnim} 10s linear infinite;

    @media (min-width: 640px) {
      top: unset;
      bottom: 4rem;
    }
  }

  & img:nth-of-type(2) {
    /* Orange */
    top: -2.5rem;
    left: 35%;
    transition: all 500ms cubic-bezier(0.86, 0, 0.07, 1); /* easeInOutQuint */
    animation: ${FloatAnimAlt} 10s linear infinite;

    @media (min-width: 640px) {
      top: unset;
      bottom: -4rem;
      left: 5%;
    }
  }

  & img:nth-of-type(3) {
    /* Green */
    right: 30%;
    bottom: -3.5rem;
    transition: all 500ms cubic-bezier(0.86, 0, 0.07, 1); /* easeInOutQuint */
    animation: ${FloatAnim} 10s linear infinite;
    animation-direction: alternate-reverse;

    @media (min-width: 640px) {
      top: -3rem;
      right: 25%;
      bottom: unset;
    }
  }

  & img:nth-of-type(4) {
    /* Blue */
    right: 1rem;
    bottom: -2rem;
    transition: all 500ms cubic-bezier(0.86, 0, 0.07, 1); /* easeInOutQuint */
    animation: ${FloatAnimAlt} 10s linear infinite;

    @media (min-width: 640px) {
      top: 4rem;
      right: 1rem;
      bottom: unset;
    }
  }
`;

const CardContent = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 2rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.15);

  @media (min-width: 640px) {
    flex-direction: row;
    margin: 0 4rem;
    padding: 4rem 0 4rem 4rem;
  }

  & .cta__caption {
    align-items: center;
    width: 100%;

    @media (min-width: 640px) {
      width: 55%;
    }
  }

  & .cta__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;

    @media (min-width: 640px) {
      width: 45%;
      margin-top: 0;
    }
  }

  & h3 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  & p {
    margin: 1rem 0 0;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

//

BrandedCTA.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  ctaLabel: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  spacing: PropTypes.array,
};

BrandedCTA.defaultProps = {
  spacing: [0, 0],
};
