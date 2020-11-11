/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import resultCaptions from '../../data/resultCaptions';
import Container from '../Container';
import MoodyBlocks from '../MoodyBlocks';
import Button from '../Button';

//

const QuizResults = ({ results }) => {
  // *
  // * Figure out a percentage of correct answers

  const { totalCorrect, totalQuestions } = results;
  const percentCorrect = Math.floor((totalCorrect / totalQuestions) * 100);

  // *
  // * Change the message depending on result
  // ** This is a bit messy but apparently is faster than switch
  let resultsMessage = null;
  if (percentCorrect === 0) {
    resultsMessage = resultCaptions.quizResults[0];
  } else if (percentCorrect <= 66) {
    resultsMessage = resultCaptions.quizResults[1];
  } else if (percentCorrect > 66 && percentCorrect < 100) {
    resultsMessage = resultCaptions.quizResults[2];
  } else if (percentCorrect === 100) {
    resultsMessage = resultCaptions.quizResults[3];
  }

  // *
  // * Return results

  return (
    <section>
      <ResultsWrap spacing={[80, 80]}>
        <Title className="title">
          <h2>
            {results.totalCorrect}/{results.totalQuestions}
            <br />
            {resultsMessage.resultTitle}
          </h2>
        </Title>

        <Paragraph>
          <p>{resultsMessage.resultCaption}</p>
          {percentCorrect !== 100 && (
            <Button label="Try Again" form={() => window.location.reload()} />
          )}
        </Paragraph>
      </ResultsWrap>

      <MoodyBlocks mood={results.totalCorrect === 0 ? 'sad' : 'happy'} />
    </section>
  );
};

export default QuizResults;

//

const ResultsWrap = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
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

const Paragraph = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;

  & button {
    margin-top: 2rem;
  }

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 640px) {
    width: 50%;
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

//

QuizResults.propTypes = {
  results: PropTypes.object.isRequired,
  sanity: PropTypes.array.isRequired,
};
