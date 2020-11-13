import React from 'react';
import PropTypes from 'prop-types';
import { camelCase, truncate } from 'lodash';
import styled from 'styled-components';

import CorrectIcon from '../../assets/brand/block-correct.svg';
import IncorrectIcon from '../../assets/brand/block-incorrect.svg';

//

const Answer = ({
  label,
  id,
  handleUserAnswer,
  answerStatus,
  isCorrectAnswer,
}) => {
  // *
  // * Set up a unique ID

  const labelID = camelCase(truncate(label), {
    length: 10,
    omission: '',
  });

  // *
  // * Determine correct/incorrect answer icon

  let radioContent;
  if (answerStatus === null) {
    radioContent = <img src="" alt="" />;
  } else if (isCorrectAnswer) {
    radioContent = <img src={CorrectIcon} alt="✅" className="showIcon" />;
  } else if (answerStatus !== id) {
    radioContent = <img src="" alt="" />;
  } else {
    radioContent = <img src={IncorrectIcon} alt="❌" className="showIcon" />;
  }

  // *
  // * Return the answer

  return (
    <AnswerWrap>
      <label htmlFor={labelID}>
        <Radio>{radioContent}</Radio>

        <span className="question">{label}</span>

        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={false}
          id={labelID}
          value={id}
          onChange={handleUserAnswer}
        />
      </label>
    </AnswerWrap>
  );
};

export default Answer;

//

const AnswerWrap = styled.li`
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;

  &:last-of-type {
    margin-bottom: 0;
  }

  & label {
    display: inline-block;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover span:first-of-type {
      box-shadow: 0 0 16px rgba(0, 158, 235, 0.4);
    }

    & .question {
      width: calc(100% - 4rem);
      margin-left: 1.5rem;
      color: var(--ef-black);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  & input {
    display: none;
  }
`;

const Radio = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: #fff;
  border-radius: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  transition: 350ms ease-in-out box-shadow;

  & img {
    width: 0;
    transition: width;
    transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
    transition-duration: 75ms;

    &.showIcon {
      width: 2rem;
    }
  }
`;

//

Answer.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleUserAnswer: PropTypes.func.isRequired,
  answerStatus: PropTypes.object,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

Answer.defaultProps = {
  answerStatus: null,
};
