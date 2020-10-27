import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';

//

const LandscapeCard = ({ image, title, copy, ctaLabel, ctaLink }) => (
  <CardWrapper>
    <Link to={ctaLink} className="img__link">
      <Img fluid={image.fluid} alt="title" />
    </Link>

    <CardContent>
      <h3>{title}</h3>
      <p>{copy}</p>

      <CTA to={ctaLink}>
        {ctaLabel} <span className="cta__arrow">&rarr;</span>
      </CTA>
    </CardContent>
  </CardWrapper>
);

export default LandscapeCard;

//

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.15);

  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 640px) {
    flex-direction: row;

    & .img__link {
      width: calc(100% - 1.5rem);
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;

  @media (min-width: 640px) {
    width: calc(100% - 3rem);
  }

  & h3 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  & p {
    margin: 2rem 0;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const CTA = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--ef-black);
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
`;

//

LandscapeCard.propTypes = {};
