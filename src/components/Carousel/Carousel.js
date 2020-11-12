import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

//

SwiperCore.use([Navigation, Pagination]);

//

const Carousel = ({ slides }) => {
  console.log(slides);

  return (
    <CarouselWrap
      spaceBetween={30}
      slidesPerView={1}
      slidesPerGroup={1}
      pagination={{ clickable: true }}
      centeredSlides
      slideToClickedSlide
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <Img fluid={slide.asset.fluid} alt={slide.asset.title} />
        </SwiperSlide>
      ))}
    </CarouselWrap>
  );
};

export default Carousel;

//

const CarouselWrap = styled(Swiper)`
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
  slides: PropTypes.object.isRequired,
};
