import React from 'react';
import PropTypes from 'prop-types';

//

const QuizResults = ({ results }) => (
  <div>
    Quiz over. You scored {results.totalCorrect} out of {results.totalQuestions}
  </div>
);

export default QuizResults;

//

QuizResults.propTypes = {
  results: PropTypes.object.isRequired,
};
