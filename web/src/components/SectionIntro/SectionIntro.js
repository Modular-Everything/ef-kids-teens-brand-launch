import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const SectionIntro = () => (
  <IntroWrap>
    <Title>
      <h2>An all-new uniform for school staff</h2>
    </Title>

    <Paragraph>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
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
  }
`;

//

SectionIntro.propTypes = {};
