import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Chevron from '../../assets/icons/chevron-left.svg';

//

const Arrow = ({ className }) => (
  <ArrowWrap className={className}>
    <img src={Chevron} alt="&rarr;" />
  </ArrowWrap>
);

export default Arrow;

//

const ArrowWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: #fff;
  border-radius: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: 350ms ease-in-out box-shadow;

  & img {
    max-width: 1rem;
  }
`;

//

Arrow.propTypes = {
  className: PropTypes.string,
};

Arrow.defaultProps = {
  className: null,
};
