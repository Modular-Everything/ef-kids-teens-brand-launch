import React from 'react';
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

const Timeline = () => (
  <Container>
    <CardContainer slidesPerView="auto" spaceBetween={24}>
      <SwiperSlide className="card__double">
        <Card>
          <h3>This is a double-width card</h3>
          <p>
            Since it was established in 1986 in Indonesia, EF has been serving
            various segments ranging from professional, corporate, and kids
            &amp; teens. We're paving new roads for learning — using technology,
            research and design. Our "for profit, for good"​ ethos is what
            motivates our people to do better work every day and drives our
            business to grow year on year.
          </p>
        </Card>

        <MarkerWrap>
          <Marker />
          <p>1986</p>
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
          <Marker />
          <p>1986</p>
        </MarkerWrap>
      </SwiperSlide>

      <SwiperSlide className="card__double">
        <Card>
          <h3>This is a double-width card</h3>
          <p>
            Since it was established in 1986 in Indonesia, EF has been serving
            various segments ranging from professional, corporate, and kids
            &amp; teens. We're paving new roads for learning — using technology,
            research and design. Our "for profit, for good"​ ethos is what
            motivates our people to do better work every day and drives our
            business to grow year on year.
          </p>
        </Card>

        <MarkerWrap>
          <Marker />
          <p>1986</p>
        </MarkerWrap>
      </SwiperSlide>
    </CardContainer>
  </Container>
);

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
  width: 1rem;
  height: 1rem;
  background-color: var(--ef-kids-pink);
  border-radius: 100%;
`;

//

Timeline.propTypes = {};
