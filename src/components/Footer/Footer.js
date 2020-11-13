import React, { useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Container from '../Container';
import Scene from '../Scene';
import MailIcon from '../../assets/icons/mail.svg';
import PeopleIcon from '../../assets/icons/people.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import BalloonIcon from '../../assets/icons/balloon.svg';
import CloseIcon from '../../assets/icons/close.svg';

//

const Footer = () => {
  // *
  // * Set our state for the block game

  const [blocks, setBlocks] = useState(false);

  // *
  // * Use ESC key to close the game

  if (blocks) {
    document.body.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        setBlocks(false);
      }
    });
  }

  // *
  // * Return it

  return (
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
            <span className="heading">E-mail HQ</span>
            <span className="copy">Start a conversation</span>
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
            <span className="heading">Teams</span>
            <span className="copy">The global K&amp;T group</span>
          </div>
        </a>

        <a href="tel:900101500" className="iconWrap">
          <span
            className="icon"
            style={{ backgroundColor: 'var(--ef-kids-green)' }}
          >
            <img src={PhoneIcon} alt="" />
          </span>
          <div className="content">
            <span className="heading">Call HQ</span>
            <span className="copy">900 101 500</span>
          </div>
        </a>

        <button
          type="button"
          className="iconWrap"
          onClick={() => setBlocks(true)}
        >
          <span
            className="icon"
            style={{ backgroundColor: 'var(--ef-kids-blue)' }}
          >
            <img src={BalloonIcon} alt="" />
          </span>
          <div className="content">
            <span className="heading">Click</span>
            <span className="copy">For a surprise</span>
          </div>
        </button>
      </FooterWrap>

      {blocks && (
        <div className="gonna_have_me_some_fun">
          <BlockWrap>
            <Scene />
          </BlockWrap>

          <Close type="button" onClick={() => setBlocks(false)}>
            <img src={CloseIcon} alt="Close" />
          </Close>

          <Skrim />

          <Helmet>
            <style tyle="text/css">{`body { overflow: hidden; }`}</style>
          </Helmet>
        </div>
      )}
    </footer>
  );
};

export default Footer;

//

const BlockWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 75;
`;

const Skrim = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Close = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const FooterWrap = styled(Container)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0 8rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
    padding: 0 1rem;
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

  & button {
    padding: 0;
    text-align: left;
    background: none;
    border: none;
  }

  & a,
  & button,
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
    justify-content: center;

    & .heading {
      margin: 0;
      font-weight: 700;
      font-size: 1rem;
    }

    & .copy {
      margin: 0;
      font-weight: 300;
      font-size: 0.875rem;
    }
  }
`;
