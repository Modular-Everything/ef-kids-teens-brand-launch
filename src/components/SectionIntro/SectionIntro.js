import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useSpace from '../../hooks/useSpace';

//

const SectionIntro = ({ title, copy, small, spacing }) => (
  <IntroWrap style={useSpace(spacing)}>
    <Title>{small ? <h3>{title}</h3> : <h2>{title}</h2>}</Title>

    <Paragraph>
      <p>{copy}</p>
    </Paragraph>
  </IntroWrap>
);

export default SectionIntro;

//

const IntroWrap = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Title = styled.div`
  width: 100%;

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 640px) {
    width: 50%;
  }

  & h2 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;

    @media (min-width: 960px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }

  & h3 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const Paragraph = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 640px) {
    width: 50%;
    padding: 0 3rem 0 1.5rem;
  }

  & p {
    margin: 0;
    color: var(--ef-black);
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: pre-line;
  }
`;

//

SectionIntro.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  small: PropTypes.bool,
  spacing: PropTypes.array,
};

SectionIntro.defaultProps = {
  small: false,
  spacing: [0, 0],
};
