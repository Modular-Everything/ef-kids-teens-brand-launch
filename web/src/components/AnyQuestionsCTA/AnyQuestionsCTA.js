import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useSpace from '../../hooks/useSpace';
import Container from '../Container';
import Button from '../Button';
import Pink from '../../assets/brand/block-pink.svg';
import Blue from '../../assets/brand/block-blue.svg';
import Green from '../../assets/brand/block-green.svg';
import Orange from '../../assets/brand/block-orange.svg';
import Arrow from '../../assets/icons/chevron-down.svg';

//

const AnyQuestionsCTA = ({ title, copy, spacing }) => {
  // *
  // * Set our form state

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [queryType, setQueryType] = useState('placeholder');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('content:', queryType);
  }, [queryType]);

  // *
  // * Return

  return (
    <CTAWrap style={useSpace(spacing)}>
      <FormWrap>
        <Title>{title}</Title>
        <Paragraph>{copy}</Paragraph>

        <Form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <select
            name="queryType"
            defaultValue="placeholder"
            value={queryType}
            onChange={(e) => setQueryType(e.target.value)}
            required
            style={{ color: queryType !== 'placeholder' && '#191919' }}
          >
            <option value="placeholder" disabled hidden>
              Query Type
            </option>
            <option value="sampleQuery">Sample Query</option>
            <option value="anotherQuery">Another Query</option>
          </select>

          <textarea
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <ButtonWrap>
            <Button label="Submit" form={() => console.log('pressed')} />
          </ButtonWrap>
        </Form>
      </FormWrap>

      <BrandIcons>
        <img src={Pink} alt="" />
        <img src={Orange} alt="" />
        <img src={Green} alt="" />
        <img src={Blue} alt="" />
      </BrandIcons>
    </CTAWrap>
  );
};

export default AnyQuestionsCTA;

//

const CTAWrap = styled.section`
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -0.75rem -0.75rem;

  @media (max-width: 640px) {
  }

  & input,
  & select,
  & textarea {
    width: calc(50% - 1.5rem);
    margin: 0.75rem;
    padding: 0.5rem 0.75rem;
    font-weight: 400 !important;
    font-size: 1rem;
    border: 1px solid rgba(25, 25, 25, 0.5);
    border-radius: 4px;

    @media (max-width: 640px) {
      width: 100%;
    }

    &::placeholder {
      color: rgba(25, 25, 25, 0.5);
    }
  }

  & select {
    color: rgba(25, 25, 25, 0.25);
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.85em auto;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-ms-expand {
      display: none;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(50% - 1.5rem);
  margin: 0.75rem;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const FormWrap = styled(Container)`
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    padding: 0 8rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: var(--ef-black);
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
`;

const Paragraph = styled.p`
  margin: 1rem 0 0;
  color: var(--ef-black);
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const BrandIcons = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  pointer-events: none;

  & img {
    display: none;
    width: 10rem;

    @media (min-width: 640px) {
      display: block;
    }

    @media (min-width: 1090px) {
      width: 14rem;
    }
  }

  & > * {
    position: absolute;
  }

  & img:nth-of-type(1) {
    left: -7rem;
    /* Pink */
    transform: rotate(66deg);

    @media (min-width: 640px) {
      top: -1rem;
      left: -5rem;
    }

    @media (min-width: 960px) {
      left: -7rem;
    }

    @media (min-width: 1470px) {
      left: 5%;
    }
  }

  & img:nth-of-type(2) {
    /* Orange */
    transform: rotate(167deg);

    @media (min-width: 640px) {
      top: -3rem;
      right: -4rem;
    }

    @media (min-width: 960px) {
      top: -3rem;
      right: -4rem;
    }

    @media (min-width: 1470px) {
      top: -3rem;
      right: 5%;
    }
  }

  & img:nth-of-type(3) {
    left: -7rem;
    /* Green */
    transform: rotate(-7deg);

    @media (min-width: 640px) {
      bottom: 2rem;
      left: -5rem;
    }

    @media (min-width: 960px) {
      bottom: 2rem;
      left: -5rem;
    }

    @media (min-width: 1470px) {
      bottom: 2rem;
      left: 5%;
    }
  }

  & img:nth-of-type(4) {
    /* Blue */
    transform: rotate(-163deg);

    @media (min-width: 640px) {
      right: -3rem;
      bottom: 2rem;
    }

    @media (min-width: 960px) {
      right: -3rem;
      bottom: 2rem;
    }

    @media (min-width: 1470px) {
      right: 5%;
      bottom: 2rem;
    }
  }
`;

//

AnyQuestionsCTA.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  spacing: PropTypes.array,
};

AnyQuestionsCTA.defaultProps = {
  spacing: [0, 0],
};
