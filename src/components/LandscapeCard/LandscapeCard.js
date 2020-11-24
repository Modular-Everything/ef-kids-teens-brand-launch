import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useSpace from '../../hooks/useSpace';
import Video from '../Video';

//

const LandscapeCard = ({ video, title, copy, ctaLabel, ctaLink, spacing }) => (
  <section style={useSpace(spacing)}>
    <CardWrapper>
      <Card>
        <a href={ctaLink} className="img__link">
          <Video placeholderVideo={video} type="placeholder" noPlay />
        </a>

        <CardContent>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>

          <CTA href={ctaLink}>
            {ctaLabel} <span className="cta__arrow">&rarr;</span>
          </CTA>
        </CardContent>
      </Card>
    </CardWrapper>
  </section>
);

export default LandscapeCard;

//

const CardWrapper = styled.div`
  max-width: 88rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.15);

  & .placeholder {
    height: unset;
  }

  @media (min-width: 1234px) {
    flex-direction: row;

    & .img__link {
      width: calc(100% - 1.5rem);
      overflow: hidden;

      & .gatsby-image-wrapper {
        transition: all ease-in-out 150ms;
      }

      &:hover {
        & .gatsby-image-wrapper {
          transform: scale(1.05);
        }
      }
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;

  /* @media (min-width: 700px) {
    width: calc(70% - 3rem);
  } */

  @media (min-width: 1234px) {
    width: calc(45% - 3rem);
  }

  & h3 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;

    @media (min-width: 880px) and (max-width: 1233px) {
      width: 50%;
    }
  }

  & p {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (min-width: 880px) and (max-width: 1233px) {
      width: 50%;
    }
  }
`;

const CTA = styled.a`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--ef-black);
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
`;

//

LandscapeCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  ctaLabel: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  spacing: PropTypes.array,
};

LandscapeCard.defaultProps = {
  spacing: [0, 0],
};
