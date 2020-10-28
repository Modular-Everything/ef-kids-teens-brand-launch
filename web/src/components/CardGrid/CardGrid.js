import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import handleSpace from '../../helpers/handleSpace';

//

const CardGrid = ({ children, hasCaption, spacing }) => (
  <Grid hasCaption={hasCaption} style={handleSpace(spacing)}>
    {children}
  </Grid>
);

export default CardGrid;

//

const Grid = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  ${(props) => props.hasCaption && `row-gap: 3rem;`}

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

//

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
  hasCaption: PropTypes.bool,
  spacing: PropTypes.array,
};

CardGrid.defaultProps = {
  hasCaption: false,
  spacing: [64, 64],
};
