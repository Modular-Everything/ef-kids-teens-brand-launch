import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Container from '../Container';
import Logo from '../../assets/logo.svg';
import ArrowLeft from '../../assets/icons/arrow-left.svg';

//

const Header = ({ title, back }) => (
  <HeaderWrap>
    <HeaderContainer>
      {back && (
        <Return to="/">
          <span>
            <img src={ArrowLeft} alt="" />
          </span>
          Back to main site
        </Return>
      )}

      <LogoWrap to="/">
        <img src={Logo} alt={title} />
      </LogoWrap>
    </HeaderContainer>
  </HeaderWrap>
);

export default Header;

//

const HeaderWrap = styled.header`
  position: relative;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 7rem;
`;

const LogoWrap = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Return = styled(Link)`
  display: none;
  color: var(--ef-black);
  text-decoration: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  & span {
    display: inline-block;
    width: 1rem;
    margin-right: 1.5rem;

    & img {
      width: 100%;
    }
  }
`;

//

Header.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

Header.defaultProps = {
  back: false,
};
