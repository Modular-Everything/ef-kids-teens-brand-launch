import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import Arrow from './Arrow';

//

SwiperCore.use([Navigation, Pagination]);

//

const Carousel = ({ slides }) => (
  <CarouselWrap>
    <Arrow className="carousel__arrow carousel__leftArrow" />
    <Arrow className="carousel__arrow carousel__rightArrow" />

    <SwiperWrap
      spaceBetween={30}
      slidesPerView={1}
      slidesPerGroup={1}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: '.carousel__leftArrow',
        nextEl: '.carousel__rightArrow',
        hiddenClass: 'hidden',
      }}
      centeredSlides
      loop
      slideToClickedSlide
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._key}>
          <Img fluid={slide.asset.fluid} alt={slide.asset.title} />
        </SwiperSlide>
      ))}
    </SwiperWrap>
  </CarouselWrap>
);

export default Carousel;

//

const CarouselWrap = styled.section`
  position: relative;

  & .carousel__arrow {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
  }

  & .carousel__rightArrow {
    right: 2rem;
    transform: translateY(-50%) rotate(180deg);
  }

  & .carousel__leftArrow {
    left: 2rem;
  }
`;

const SwiperWrap = styled(Swiper)`
  display: flex;
  flex-direction: column-reverse;

  & .swiper-pagination {
    position: static;
    margin-top: 0.5rem;

    & .swiper-pagination-bullet {
      flex: 0 0 auto;
      width: 4px;
      height: 4px;
      margin: 0 5px;
      background: var(--ef-black);
      border-radius: 2px;
      opacity: 1;
      transition: width 0.2s ease;
    }

    & .swiper-pagination-bullet-active {
      width: 1.125rem;
    }

    /* .ef-carousel__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active */
  }
`;

//

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
};
