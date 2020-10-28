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
  }

  // * Render it

  return (
    <Container>
      <CardContainer
        slidesPerView="auto"
        spaceBetween={24}
        onSwiper={(swiper) => handleTranslate(swiper)}
        onSetTranslate={(swiper) => handleTranslate(swiper)}
        watchSlidesVisibility
        // centeredSlides
      >
        {data.map((node, index) => {
          const cardType = node._type;
          console.log(node._key);

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

const CardContainer = styled(Swiper)`
  margin-bottom: 7.75rem;
  overflow: visible;

  & .swiper-slide {
    position: relative;
    align-self: stretch;
    height: auto;
    transition: opacity 500ms ease-in-out;

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
      width: 15rem;
    }
  }

  & .card__doubleCard {
    width: 90%;
    max-width: 30rem;
  }
`;

//

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
};
