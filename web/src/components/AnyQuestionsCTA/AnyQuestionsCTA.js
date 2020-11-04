import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useSpace from '../../hooks/useSpace';
import Container from '../Container';
import Pink from '../../assets/brand/block-pink.svg';
import Blue from '../../assets/brand/block-blue.svg';
import Green from '../../assets/brand/block-green.svg';
import Orange from '../../assets/brand/block-orange.svg';

//

const AnyQuestionsCTA = ({ title, copy, spacing }) => (
  <CTAWrap style={useSpace(spacing)}>
    <FormWrap>
      <Title>{title}</Title>
      <Paragraph>{copy}</Paragraph>

      <form style={{ marginTop: 50 }}>
        <input style={{ height: 50, display: 'block' }} />
        <input style={{ height: 50, display: 'block' }} />
        <input style={{ height: 50, display: 'block' }} />
        <input style={{ height: 50, display: 'block' }} />
        <input style={{ height: 50, display: 'block' }} />
      </form>
    </FormWrap>

    <BrandIcons>
      <img src={Pink} alt="" />
      <img src={Orange} alt="" />
      <img src={Green} alt="" />
      <img src={Blue} alt="" />
    </BrandIcons>
  </CTAWrap>
);

export default AnyQuestionsCTA;

//

const CTAWrap = styled.section`
  position: relative;
`;

const FormWrap = styled(Container)`
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    padding: 0 8rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: var(--ef-black);
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
`;

const Paragraph = styled.p`
  margin: 1rem 0 0;
  color: var(--ef-black);
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const BrandIcons = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  pointer-events: none;

  & img {
    display: none;
    width: 10rem;

    @media (min-width: 640px) {
      display: block;
    }

    @media (min-width: 1090px) {
      width: 14rem;
    }
  }

  & > * {
    position: absolute;
  }

  & img:nth-of-type(1) {
    left: -7rem;
    /* Pink */
    transform: rotate(66deg);

    @media (min-width: 640px) {
      top: -1rem;
      left: -5rem;
    }

    @media (min-width: 960px) {
      left: -7rem;
    }

    @media (min-width: 1470px) {
      left: 5%;
    }
  }

  & img:nth-of-type(2) {
    /* Orange */
    transform: rotate(167deg);

    @media (min-width: 640px) {
      top: -3rem;
      right: -4rem;
    }

    @media (min-width: 960px) {
      top: -3rem;
      right: -4rem;
    }

    @media (min-width: 1470px) {
      top: -3rem;
      right: 5%;
    }
  }

  & img:nth-of-type(3) {
    left: -7rem;
    /* Green */
    transform: rotate(-7deg);

    @media (min-width: 640px) {
      bottom: 2rem;
      left: -5rem;
    }

    @media (min-width: 960px) {
      bottom: 2rem;
      left: -5rem;
    }

    @media (min-width: 1470px) {
      bottom: 2rem;
      left: 5%;
    }
  }

  & img:nth-of-type(4) {
    /* Blue */
    transform: rotate(-163deg);

    @media (min-width: 640px) {
      right: -3rem;
      bottom: 2rem;
    }

    @media (min-width: 960px) {
      right: -3rem;
      bottom: 2rem;
    }

    @media (min-width: 1470px) {
      right: 5%;
      bottom: 2rem;
    }
  }
`;

//

AnyQuestionsCTA.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  spacing: PropTypes.array,
};

AnyQuestionsCTA.defaultProps = {
  spacing: [0, 0],
};
