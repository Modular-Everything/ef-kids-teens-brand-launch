import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

//

const ImageCard = ({ id, title, img, marker, dot, year }) => {
  const variants = ['pink', 'orange', 'green', 'blue'];
  const variantId = id % variants.length;

  return (
    <>
      <CardWrap>
        <div className="title">
          <h3>{title}</h3>
          <Skrim />
        </div>
        <Img fluid={img.fluid} alt="title" />
      </CardWrap>

      <MarkerWrap ref={marker}>
        <Dot colorId={variants[variantId]} ref={dot} />
        <p>{year}</p>
      </MarkerWrap>
    </>
  );
};

export default ImageCard;

//

const CardWrap = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

  & .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & h3 {
    position: absolute;
    bottom: 0;
    z-index: 15;
    width: 100%;
    margin: 0;
    padding: 1rem;
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
  }
`;

const MarkerWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 7.75rem;
  padding-top: 3.5rem;

  & p {
    margin: 0;
    margin-top: 1.5rem;
    color: var(--ef-black);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
  }
`;

const Skrim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 36.08%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;

const Dot = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 100%;

  ${(props) => `background-color: var(--ef-kids-${props.colorId})`}
`;

//

ImageCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  marker: PropTypes.object.isRequired,
  dot: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};
