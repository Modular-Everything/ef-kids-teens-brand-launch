import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useSpace from '../../hooks/useSpace';

//

const breakpoints = [480, 640, 768, 960];

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${breakpoints.map(
    (bp) => `@media(min-width: ${bp / 16}rem) { max-width: ${bp / 16}rem; }`
  )}
`;

const Container = ({ children, className, spacing }) => (
  <PageContainer className={className} style={useSpace(spacing)}>
    {children}
  </PageContainer>
);

export default Container;

//

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.array,
};

Container.defaultProps = {
  className: null,
  spacing: [0, 0],
};
