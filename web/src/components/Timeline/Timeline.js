import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Container from '../Container';

import Placeholder from '../../assets/images/imageCardPlaceholder.png';

//

SwiperCore.use([Navigation]);

//

const ProgressLine = ({ offset, vertical, horizontal, width }) => (
  <Line
    style={{
      bottom: `-${vertical}px`,
      left: `${horizontal}px`,
      width: `${width}px`,
      transform: `translate3d(${offset}px, 0, 0)`,
      background: `linear-gradient(90deg, var(--ef-kids-pink) 0%, var(--ef-kids-orange) 50%, var(--ef-kids-green) 100%)`,
    }}
  />
);

//

const Timeline = () => {
  // * Set up our state

  const [lineOffset, setLineOffset] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(0);
  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);

  // * Set references

  const MARKER_REF = useRef(null);
  const DOT_REF = useRef(null);

  // * Handle swiper movements

  function handleTranslate(swiper) {
    // 1. get the height of MarkerWrap
    // 2. divide by 2 and + 10 (this gets the bottom position of the line)
    setVerticalPosition(
      MARKER_REF.current.offsetHeight / 2 + DOT_REF.current.offsetHeight / 2 - 4
    );

    // 3. get the width of the first card (swiper method: slidesSizesGrid[0])
    // 4. divide by 2 and + 16 (this gets the left offset of the line) (leftOffset)
    setHorizontalPosition(
      swiper.slidesSizesGrid[0] / 2 + DOT_REF.current.offsetWidth
    );

    // 5. get the width of the line by `calc(virtualSize / 2 + leftOffset + 16px)`
    setLineWidth(
      swiper.virtualSize / 2 +
        swiper.slidesSizesGrid[0] / 2 +
        DOT_REF.current.offsetWidth * 2
    );

    // 6. translate the line with the swiper
    setLineOffset(Math.floor(swiper.translate));
  }

  // * Render it

  return (
    <Container>
      <CardContainer
        slidesPerView="auto"
        spaceBetween={24}
        onSwiper={(swiper) => handleTranslate(swiper)}
        onSetTranslate={(swiper) => handleTranslate(swiper)}
      >
        <SwiperSlide className="card__double">
          <Card>
            <h3>This is a double-width card</h3>
            <p>
              Since it was established in 1986 in Indonesia, EF has been serving
              various segments ranging from professional, corporate, and kids
              &amp; teens. We're paving new roads for learning — using
              technology, research and design. Our "for profit, for good" ethos
              is what motivates our people to do better work every day and
              drives our business to grow year on year.
            </p>
          </Card>

          <MarkerWrap ref={MARKER_REF}>
            <Marker />
            <p>{horizontalPosition}</p>
          </MarkerWrap>
        </SwiperSlide>

        <SwiperSlide className="card__single">
          <Card>
            <h3>Title over two lines</h3>
            <p>
              Since it was established in 1986 in Indonesia, EF has been serving
              various segments ranging from professional.
            </p>
          </Card>

          <MarkerWrap>
            <Marker />
            <p>1986</p>
          </MarkerWrap>
        </SwiperSlide>

        <SwiperSlide className="card__single">
          <ImageCard>
            <h3>Title goes here</h3>
            <img src={Placeholder} alt="" />
          </ImageCard>

          <MarkerWrap>
            <Marker ref={DOT_REF} />
            <p>1986</p>
          </MarkerWrap>
        </SwiperSlide>

        <SwiperSlide className="card__double">
          <Card>
            <h3>This is a double-width card</h3>
            <p>
              Since it was established in 1986 in Indonesia, EF has been serving
              various segments ranging from professional, corporate, and kids
              &amp; teens. We're paving new roads for learning — using
              technology, research and design. Our "for profit, for good"​ ethos
              is what motivates our people to do better work every day and
              drives our business to grow year on year.
            </p>
          </Card>

          <MarkerWrap>
            <Marker />
            <p>1986</p>
          </MarkerWrap>
        </SwiperSlide>
      </CardContainer>

      <ProgressLine
        offset={lineOffset}
        vertical={verticalPosition}
        horizontal={horizontalPosition}
        width={lineWidth}
      />
    </Container>
  );
};

export default Timeline;

//

const CardContainer = styled(Swiper)`
  overflow: visible;

  & .swiper-slide {
    position: relative;
    align-self: stretch;
    height: auto;
  }

  & .card__single {
    width: 15rem;
  }

  & .card__double {
    width: 30rem;
  }
`;

const Card = styled.div`
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

const ImageCard = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

  & img {
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
    z-index: 10;
    width: 100%;
    margin: 0;
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

const Marker = styled.div`
  width: 17px;
  height: 17px;
  background-color: var(--ef-kids-pink);
  border-radius: 100%;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: black;
`;

//

Timeline.propTypes = {};

ProgressLine.propTypes = {
  offset: PropTypes.number.isRequired,
  vertical: PropTypes.number.isRequired,
  horizontal: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
