import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import MailIcon from '../../assets/icons/mail.svg';
import PeopleIcon from '../../assets/icons/people.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import BalloonIcon from '../../assets/icons/balloon.svg';

//

const Footer = () => (
  <footer>
    <FooterWrap>
      <a href="mailto:email@ef.com" className="iconWrap">
        <span
          className="icon"
          style={{ backgroundColor: 'var(--ef-kids-pink)' }}
        >
          <img src={MailIcon} alt="" />
        </span>
        <div className="content">
          <h6>E-mail HQ</h6>
          <p>Start a conversation</p>
        </div>
      </a>

      <a href="https://www.ef.com/teams" className="iconWrap">
        <span
          className="icon"
          style={{ backgroundColor: 'var(--ef-kids-orange)' }}
        >
          <img src={PeopleIcon} alt="" />
        </span>
        <div className="content">
          <h6>Teams</h6>
          <p>The global K&amp;T group</p>
        </div>
      </a>

      <article className="iconWrap">
        <span
          className="icon"
          style={{ backgroundColor: 'var(--ef-kids-green)' }}
        >
          <img src={PhoneIcon} alt="" />
        </span>
        <div className="content">
          <h6>Call HQ</h6>
          <p>900 101 500</p>
        </div>
      </article>

      <article className="iconWrap">
        <span
          className="icon"
          style={{ backgroundColor: 'var(--ef-kids-blue)' }}
        >
          <img src={BalloonIcon} alt="" />
        </span>
        <div className="content">
          <h6>Click</h6>
          <p>For a surprise</p>
        </div>
      </article>
    </FooterWrap>
  </footer>
);

export default Footer;

//

const FooterWrap = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (min-width: 640px) {
    padding: 0 8rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6rem;
    margin-bottom: 6rem;
    padding: unset;
  }

  & .iconWrap {
    display: flex;
    margin-bottom: 1rem;
    color: var(--ef-black);
    text-decoration: none;

    @media (min-width: 768px) {
      margin-bottom: unset;
    }
  }

  & a,
  & .iconWrap:last-of-type {
    cursor: pointer !important;
    opacity: 1;
    transition: 250ms ease opacity;

    &:hover {
      opacity: 0.5;
    }
  }

  & .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 100%;

    & img {
      width: 1rem;
      height: 1rem;
      filter: invert(1) contrast(1.5);
    }
  }

  & .content {
    display: flex;
    flex-direction: column;

    & h6 {
      margin: 0;
      font-weight: 700;
      font-size: 1rem;
    }

    & p {
      margin: 0;
      font-weight: 300;
      font-size: 0.875rem;
    }
  }
`;
