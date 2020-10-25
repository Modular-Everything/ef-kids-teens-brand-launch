import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const breakpoints = [640, 768, 1024, 1280];

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  ${breakpoints.map(
    (bp) => `@media(min-width: ${bp / 16}rem) { max-width: ${bp / 16}rem; }`
  )}
`;

const Container = ({ children, className }) => (
  <PageContainer className={className}>{children}</PageContainer>
);

export default Container;

//

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};
