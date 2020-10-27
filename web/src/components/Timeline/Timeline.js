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
        {data.map((node, index) => {
          const cardType = node._type;

          if (cardType === 'imageCard') {
            return (
              <SwiperSlide className="card__singleCard">
                <ImageCard
                  key={node._key}
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
            <SwiperSlide className={`card__${cardType}`}>
              <Card
                key={node._key}
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

  & .card__singleCard {
    width: 15rem;
  }

  & .card__doubleCard {
    width: 30rem;
  }
`;

//

Timeline.propTypes = {};
