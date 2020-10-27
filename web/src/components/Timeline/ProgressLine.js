import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const ProgressLine = ({ offset, vertical, horizontal, width }) => (
  <Line
    style={{
      bottom: `-${vertical}px`,
      left: `${horizontal}px`,
      width: `${width}px`,
      transform: `translate3d(${offset}px, 0, 0)`,
      background: `linear-gradient(90deg, var(--ef-kids-pink) 0%, var(--ef-kids-orange) 50%, var(--ef-kids-green) 100%)`,
    }}
  />
);

export default ProgressLine;

//

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: black;
`;

//

ProgressLine.propTypes = {
  offset: PropTypes.number.isRequired,
  vertical: PropTypes.number.isRequired,
  horizontal: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
