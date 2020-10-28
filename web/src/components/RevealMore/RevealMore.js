import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArrowDown from '../../assets/icons/arrow-down.svg';

//

const RevealMore = ({ label }) => {
  const RevealRef = useRef(null);

  useEffect(() => {
    console.log(RevealRef);
  }, []);

  return (
    <RevealMoreWrap ref={RevealRef}>
      <p>{label}</p>
      <img src={ArrowDown} alt="" />
    </RevealMoreWrap>
  );
};

export default RevealMore;

//

const RevealMoreWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    margin: 0;
    color: var(--ef-black);
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
  }

  & img {
    max-width: 1rem;
    margin-top: 2rem;
  }
`;

//

RevealMore.propTypes = {
  label: PropTypes.string.isRequired,
};
