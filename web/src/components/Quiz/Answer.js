import React from 'react';
import PropTypes from 'prop-types';
import { camelCase, truncate } from 'lodash';

//

const Answer = ({ label, correctAnswer, id, handleUserAnswer }) => {
  const labelID = camelCase(truncate(label), {
    length: 10,
    omission: '',
  });

  return (
    <label htmlFor={labelID}>
      <span>
        {label}
        {correctAnswer && '*'}
      </span>

      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={false}
        id={labelID}
        value={id}
        onChange={(e) => handleUserAnswer(e)}
        // disabled={answer}
      />
    </label>
  );
};

export default Answer;

//

Answer.propTypes = {
  label: PropTypes.string.isRequired,
  correctAnswer: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleUserAnswer: PropTypes.func.isRequired,
};
