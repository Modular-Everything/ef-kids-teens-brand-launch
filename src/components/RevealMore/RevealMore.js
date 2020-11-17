import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArrowDown from '../../assets/icons/arrow-down.svg';
import useSpace from '../../hooks/useSpace';

//

const RevealMore = ({ label, spacing }) => {
  const RevealRef = useRef(null);

  function scrollTo() {
    const nextSibling = RevealRef.current.nextSibling.offsetTop;
    const offsetAmount = 48;

    window.scroll({
      top: nextSibling - offsetAmount,
      behavior: 'smooth',
    });
  }

  return (
    <RevealMoreWrap ref={RevealRef} style={useSpace(spacing)}>
      <button type="button" onClick={() => scrollTo()}>
        <span>{label}</span>
        <img src={ArrowDown} alt="" />
      </button>
    </RevealMoreWrap>
  );
};

export default RevealMore;

//

const RevealMoreWrap = styled.section`
  display: flex;
  justify-content: center;

  & button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;

    &:focus {
      outline: 0;
      opacity: 0.5;
    }

    & span {
      margin: 0;
      color: var(--ef-black);
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: center;
    }

    & img {
      max-width: 1rem;
      margin-top: 1.5rem;
    }
  }
`;

//

RevealMore.propTypes = {
  label: PropTypes.string.isRequired,
  spacing: PropTypes.array,
};

RevealMore.defaultProps = {
  spacing: [0, 0],
};
