/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

//

const QuizResults = ({ results, sanity }) => {
  // *
  // * Figure out a percentage of correct answers

  const { totalCorrect, totalQuestions } = results;
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
  // * Return results

  return (
    <div>
      Quiz over. You scored {results.totalCorrect} out of{' '}
      {results.totalQuestions} ({percentCorrect}%)
      <div>
        <h2>{resultsMessage.resultTitle}</h2>
        <p>{resultsMessage.resultCaption}</p>
        {percentCorrect !== 100 && (
          <Button label="Try Again" form={() => window.location.reload()} />
        )}
      </div>
    </div>
  );
};

export default QuizResults;

//

QuizResults.propTypes = {
  results: PropTypes.object.isRequired,
  sanity: PropTypes.array.isRequired,
};
