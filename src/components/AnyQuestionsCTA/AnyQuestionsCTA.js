import React, { useState, useRef } from 'react';
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
  // * Has our form been sent yet?

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  // *
  // * Set form info

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [queryType, setQueryType] = useState('placeholder');
  const [message, setMessage] = useState('');

  // *
  // * Handle sending

  const formRef = useRef(null);

  async function handleSend(e) {
    e.preventDefault();

    if (formRef.current.checkValidity()) {
      setError(false);

      const formElements = [...formRef.current.elements];
      const validElements = formElements
        .filter((el) => !!el.value)
        .map(
          (el) =>
            `${encodeURIComponent(el.name)}=${encodeURIComponent(el.value)}`
        )
        .join('&');

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: validElements,
      })
        .then(() => {
          setSent(true);
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setError('Please fill out all required fields correctly');
    }
  }

  // *
  // * Return

  return (
    <CTAWrap style={useSpace(spacing)}>
      <FormWrap>
        <Title>{title}</Title>
        <Paragraph>{copy}</Paragraph>

        <Form
          ref={formRef}
          name="Questions CTA"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="Questions CTA" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={sent}
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={sent}
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            disabled={sent}
          />

          <select
            name="queryType"
            defaultValue="placeholder"
            value={queryType}
            onChange={(e) => setQueryType(e.target.value)}
            required
            disabled={sent}
            style={{ color: queryType !== 'placeholder' && '#191919' }}
          >
            <option value="placeholder" disabled hidden>
              Query Type
            </option>
            <option value="sampleQuery">Sample Query</option>
            <option value="anotherQuery">Another Query</option>
          </select>

          <textarea
            name="message"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={sent}
          />

          <ButtonWrap>
            {error && (
              <Error>
                <p>{error}</p>
              </Error>
            )}

            {!sent && <Button label="Submit" form={(e) => handleSend(e)} />}
            {sent && (
              <SentMessage>Thanks &mdash; help is on the way!</SentMessage>
            )}
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

  & input,
  & select,
  & textarea {
    width: calc(50% - 1.5rem);
    margin: 0.75rem;
    padding: 0.75rem;
    font-weight: 400 !important;
    font-size: 1rem;
    border: 1px solid rgba(25, 25, 25, 0.5);
    border-radius: 4px;

    @media (max-width: 640px) {
      width: 100%;
    }

    &:disabled {
      opacity: 0.35;
    }

    &::placeholder {
      color: rgba(25, 25, 25, 0.5);
    }
  }

  & textarea {
    height: 6rem;
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
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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

const Error = styled.span`
  display: flex;
  align-content: center;
  align-items: center;
  width: 55%;
  margin-top: 1.5rem;

  & p {
    margin: 0 1rem 0.25rem 0;
    color: var(--ef-kids-orange) !important;
    font-size: 0.875rem !important;
    text-align: right;
  }
`;

const SentMessage = styled.p`
  margin: 0 0 1.5rem;
  color: var(--ef-kids-blue);
  font-size: 0.875rem;
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
