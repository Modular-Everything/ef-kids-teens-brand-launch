import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Container from '../Container';

import ProgressLine from './ProgressLine';
import Card from './Card';
import ImageCard from './ImageCard';
import Arrow from '../Carousel/Arrow';

//

SwiperCore.use([Navigation]);

//

const Timeline = ({ data }) => {
  // * Set up our state

  const [lineOffset, setLineOffset] = useState(0);
  const [verticalPosition, setVerticalPosition] = useState(0);
  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [sizesGrid, setSizesGrid] = useState([]);
  const [progress, setProgress] = useState(0);

  // * Set references

  const MARKER_REF = useRef(null);
  const DOT_REF = useRef(null);

  // * Handle swiper movements

  function handleTranslate(swiper) {
    // 1. get the height of MarkerWrap and divide by 2 and + 10
    //    (this gets the bottom position of the line)
    setVerticalPosition(
      MARKER_REF.current.offsetHeight / 2 + DOT_REF.current.offsetHeight / 2 - 6
    );

    // 2. get the width of the first card (swiper method: slidesSizesGrid[0])
    //    divide by 2 and + 16(this gets the left offset of the line)(leftOffset)
    setHorizontalPosition(
      swiper.slidesSizesGrid[0] / 2 + DOT_REF.current.offsetWidth
    );

    // 3. get the width of the line with some crazy numbers
    const totalSlides = swiper.slidesSizesGrid.length;
    setLineWidth(
      swiper.virtualSize -
        swiper.slidesSizesGrid[0] / 2 -
        swiper.slidesSizesGrid[totalSlides - 1] / 2
    );

    // 4. translate the line with the swiper
    setLineOffset(Math.floor(swiper.translate));

    // 5. create state of sizes
    setSizesGrid(swiper.slidesGrid);

    // Whilst we're here, check if the swiper is at the start or the end
    if (swiper.isBeginning) {
      setProgress(0);
    } else if (swiper.isEnd) {
      setProgress(1);
    } else {
      setProgress(0.5);
    }
  }

  // * Render it

  return (
    <Container>
      <CardContainer>
        <Arrow
          className={`carousel__arrow carousel__leftArrow ${
            progress === 0 && `disabled`
          }`}
        />
        <Arrow
          className={`carousel__arrow carousel__rightArrow ${
            progress === 1 && `disabled`
          }`}
        />

        <SwiperWrap
          slidesPerView="auto"
          spaceBetween={24}
          onSwiper={(swiper) => handleTranslate(swiper)}
          onSetTranslate={(swiper) => handleTranslate(swiper)}
          onResize={(swiper) => handleTranslate(swiper)}
          watchSlidesVisibility
          navigation={{
            prevEl: '.carousel__leftArrow',
            nextEl: '.carousel__rightArrow',
          }}
        >
          {data.map((node, index) => {
            const cardType = node._type;

            if (cardType === 'imageCard') {
              return (
                <SwiperSlide className="card__singleCard" key={node._key}>
                  <ImageCard
                    id={index}
                    title={node.imageTitle}
                    img={node.bgImage.asset}
                    marker={MARKER_REF}
                    dot={DOT_REF}
                    year={node.year}
                  />
                </SwiperSlide>
              );
            }

            return (
              <SwiperSlide className={`card__${cardType}`} key={node._key}>
                <Card
                  id={index}
                  title={node.paragraphTitle}
                  copy={node.paragraph}
                  marker={MARKER_REF}
                  dot={DOT_REF}
                  year={node.year}
                />
              </SwiperSlide>
            );
          })}
        </SwiperWrap>
      </CardContainer>

      <ProgressLine
        offset={lineOffset}
        vertical={verticalPosition}
        horizontal={horizontalPosition}
        width={lineWidth}
        cardSizes={sizesGrid}
      />
    </Container>
  );
};

export default Timeline;

//

const CardContainer = styled.section`
  position: relative;

  & .carousel__arrow {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);

    &.disabled {
      cursor: not-allowed;

      & img {
        opacity: 0.2;
      }
    }

    @media (max-width: 690px) {
      display: none;
    }
  }

  & .carousel__rightArrow {
    right: -2.5rem;
    transform: translateY(-50%) rotate(180deg);
  }

  & .carousel__leftArrow {
    left: -1.5rem;
  }
`;

const SwiperWrap = styled(Swiper)`
  margin-bottom: 7.75rem;
  overflow: visible;

  & .swiper-slide {
    position: relative;
    align-self: stretch;
    height: auto;

    & > div {
      transition: opacity 500ms ease-in-out;
    }

    & > div:nth-of-type(1) {
      opacity: 0.2;
    }

    &.swiper-slide-visible {
      & > div:nth-of-type(1) {
        opacity: 1;
      }
    }
  }

  & .card__singleCard {
    width: 90%;

    @media (min-width: 30rem) {
      width: 14rem;
    }
  }

  & .card__doubleCard {
    width: 90%;
    max-width: 27rem;
  }
`;

//

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
};
