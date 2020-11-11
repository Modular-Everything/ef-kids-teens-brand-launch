import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { camelCase, truncate } from 'lodash';
import styled from 'styled-components';

import CorrectIcon from '../../assets/brand/block-correct.svg';
import IncorrectIcon from '../../assets/brand/block-incorrect.svg';

//

const Answer = ({ label, correctAnswer, id, handleUserAnswer }) => {
  // *
  // * Set up a unique ID

  const labelID = camelCase(truncate(label), {
    length: 10,
    omission: '',
  });

  // *
  // * Handle the users' answer

  const [userAnswer, setUserAnswer] = useState(null);

  function handleAnswer(e) {
    handleUserAnswer(e);

    const answerCorrect = parseInt(e.currentTarget.value) === correctAnswer;
    console.log(answerCorrect);

    if (answerCorrect) {
      setUserAnswer(true);
    } else {
      setUserAnswer(false);
    }

    setTimeout(() => {
      setUserAnswer(null);
    }, [1000]);
  }

  // *
  // * Return the answer

  return (
    <AnswerWrap>
      <label htmlFor={labelID}>
        <Radio>
          {userAnswer && <img src={CorrectIcon} alt="✅" />}
          {userAnswer === false && <img src={IncorrectIcon} alt="❌" />}
        </Radio>

        <span className="question">{label}</span>

        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={false}
          id={labelID}
          value={id}
          onChange={(e) => handleAnswer(e)}
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
    max-width: 2rem;
  }
`;

//

Answer.propTypes = {
  label: PropTypes.string.isRequired,
  correctAnswer: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  handleUserAnswer: PropTypes.func.isRequired,
};
