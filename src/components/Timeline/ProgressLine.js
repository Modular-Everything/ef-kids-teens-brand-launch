import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const ProgressLine = ({ offset, vertical, horizontal, width, cardSizes }) => {
  const gradient = cardSizes.map((pos, index) => {
    const variants = ['pink', 'orange', 'green', 'blue'];
    const variantId = index % variants.length;
    const position = pos > 0 ? Math.floor((pos / width) * 100) : 0;

    return `var(--ef-kids-${variants[variantId]}) ${position}%`;
  });

  return (
    <Line
      style={{
        bottom: `-${vertical}px`,
        left: `${horizontal}px`,
        width: `${width}px`,
        transform: `translate3d(${offset}px, 0, 0)`,
        background: `linear-gradient(90deg, ${gradient.join()})`,
      }}
    />
  );
};

export default ProgressLine;

//

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background: black;
`;

//

ProgressLine.propTypes = {
  offset: PropTypes.number.isRequired,
  vertical: PropTypes.number.isRequired,
  horizontal: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  cardSizes: PropTypes.array.isRequired,
};
