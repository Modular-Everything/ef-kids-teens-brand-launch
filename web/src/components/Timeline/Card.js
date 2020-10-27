import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const Card = ({ id, title, copy, marker, dot, year }) => {
  const variants = ['pink', 'orange', 'green', 'blue'];
  const variantId = id % variants.length;

  return (
    <>
      <CardWrap>
        <h3>{title}</h3>
        <p>{copy}</p>
      </CardWrap>

      <MarkerWrap ref={marker}>
        <Dot colorId={variants[variantId]} ref={dot} />
        <p>{year}</p>
      </MarkerWrap>
    </>
  );
};

export default Card;

//

const CardWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

  & h3 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 1.5rem;
    font-style: normal;
    line-height: 2rem;
  }

  & p {
    color: var(--ef-black);
    font-weight: 300;
    font-size: 1rem;
    font-style: normal;
    line-height: 1.5rem;
  }
`;

const MarkerWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const Dot = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 100%;

  ${(props) => `background-color: var(--ef-kids-${props.colorId})`}
`;

//

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  marker: PropTypes.object.isRequired,
  dot: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
};
