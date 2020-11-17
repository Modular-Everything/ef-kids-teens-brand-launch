/* eslint-disable prefer-destructuring */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Confetti from 'react-confetti';

import Container from '../Container';
import MoodyBlocks from '../MoodyBlocks';
import Button from '../Button';

//

const QuizResults = ({ results, sanity }) => {
  console.log(sanity);

  // *
  // * Figure out a percentage of correct answers

  const { totalCorrect, totalQuestions, timeTaken } = results;
  const percentCorrect = Math.floor((totalCorrect / totalQuestions) * 100);

  // *
  // * Change the message depending on result
  // ** This is a bit messy but apparently is faster than switch

  let resultsMessage = null;
  if (percentCorrect === 0) {
    resultsMessage = sanity[0];
  } else if (percentCorrect <= 66) {
    resultsMessage = sanity[1];
  } else if (percentCorrect > 66 && percentCorrect < 100) {
    resultsMessage = sanity[2];
  } else if (percentCorrect === 100) {
    resultsMessage = sanity[3];
  }

  // *
  // * Input values

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // *
  // * Handle sending

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

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
      setError('Please fill out both fields correctly');
    }
  }

  // *
  // * Return results

  return (
    <section>
      {percentCorrect === 100 && (
        <Confetti
          style={{ zIndex: 20 }}
          colors={['#ff329b', '#f28529', '#6ad300', '#009eeb']}
          recycle={!sent}
        />
      )}

      <ResultsWrap spacing={[80, 80]}>
        <Title className="title">
          <h2>
            {results.totalCorrect}/{results.totalQuestions}
            <br />
            {resultsMessage.resultTitle}
          </h2>
        </Title>

        <Results>
          <p>{resultsMessage.resultCaption}</p>
          {percentCorrect !== 100 && (
            <Button label="Try Again" form={() => window.location.reload()} />
          )}

          {percentCorrect === 100 && (
            <Form
              ref={formRef}
              name="Quiz Submit"
              method="POST"
              data-netlify="true"
            >
              <input
                type="text"
                name="winnerName"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={sent}
              />
              <input
                type="email"
                name="winnerEmail"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={sent}
              />
              <input type="hidden" name="timeTaken" value={90 - timeTaken} />
              <input type="hidden" name="form-name" value="Quiz Submit" />

              {error && (
                <Error>
                  <p>{error}</p>
                </Error>
              )}

              {!sent && <Button label="Submit" form={(e) => handleSend(e)} />}
              {sent && (
                <SentMessage>
                  <p>Entry submitted &mdash; Good luck!</p>
                </SentMessage>
              )}
            </Form>
          )}
        </Results>
      </ResultsWrap>

      <MoodyBlocks mood={results.totalCorrect === 0 ? 'sad' : 'happy'} />
    </section>
  );
};

export default QuizResults;

//

const SentMessage = styled.span`
  margin-top: 1.5rem;

  & p {
    color: var(--ef-kids-pink) !important;
    font-size: 0.875rem !important;
  }
`;

const Error = styled.span`
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 1.5rem;

  & p {
    color: var(--ef-kids-orange) !important;
    font-size: 0.875rem !important;
  }
`;

const ResultsWrap = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  & button {
    margin: 2rem 0;
  }

  & div {
    width: 100%;

    @media (min-width: 400px) {
      width: 90%;
    }

    @media (min-width: 640px) {
      width: 50%;
    }
  }
`;

const Title = styled.div`
  width: 100%;

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 640px) {
    width: 50%;
  }

  & h2 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;

    @media (min-width: 960px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }
`;

const Results = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 640px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    padding: 0 3rem 0 1.5rem;
  }

  & p {
    margin: 0;
    color: var(--ef-black);
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 640px) {
    width: 80%;
  }

  & button {
    margin: 1.5rem auto 0;

    @media (min-width: 640px) {
      margin: 1.5rem 0 0 auto;
    }
  }

  & input {
    width: 100%;
    margin: 0;
    padding: 0.75rem;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid rgba(25, 25, 25, 0.5);
    border-radius: 4px;

    &:first-of-type {
      margin: 2rem 0 1.5rem;

      @media (min-width: 640px) {
        margin: 1.5rem 0;
      }
    }

    &:disabled {
      opacity: 0.35;
    }

    &::placeholder {
      color: rgba(25, 25, 25, 0.5);
    }
  }
`;

//

QuizResults.propTypes = {
  results: PropTypes.object.isRequired,
  sanity: PropTypes.array.isRequired,
};
