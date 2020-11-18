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
          <span className="header__backArrow">
            <img src={ArrowLeft} alt="" />
          </span>
          <span className="header__backCopy">Back to main site</span>
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
  color: var(--ef-black);
  text-decoration: none;

  & .header__backArrow {
    display: inline-block;
    width: 1rem;
    margin-right: 1.5rem;

    & img {
      width: 100%;
    }
  }

  & .header__backCopy {
    display: none;

    @media (min-width: 768px) {
      display: inline-block;
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
