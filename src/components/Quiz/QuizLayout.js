import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';
import Answer from './Answer';
import QuizResults from './QuizResults';
import Timer from './Timer';

//

const QuizLayout = ({ questions, sanity }) => {
  // *
  // * Get quiz container reference

  const quizRef = useRef(null);

  // *
  // * Set up timer

  const [timeRemaining, setTimeRemaining] = useState(90);

  // *
  // * Set up quiz state
  // ** Set a bunch of defaults

  const [quizProgress, setQuizProgress] = useState({
    questionNumber: 1,
    question: questions[0].question,
    totalQuestions: questions.length,
    answers: questions[0].answers,
    correctAnswer: questions[0].correctAnswer,
    totalCorrect: 0,
    totalAnswers: 0,
    completed: false,
  });

  const [answerStatus, setAnswerStatus] = useState(null);

  // *
  // * Handle user answer
  // ** Progress all defaults by +1

  function handleUserAnswer(id) {
    if (window) window.scrollTo(0, 0);

    const {
      questionNumber,
      totalCorrect,
      totalAnswers,
      correctAnswer,
    } = quizProgress;

    const counter = questionNumber;
    const isCorrect = parseInt(id) === correctAnswer;

    setAnswerStatus(id);

    // * Disable clicking other items before next question
    quizRef.current.style.pointerEvents = 'none';

    setTimeout(() => {
      // * Reset answer status
      setAnswerStatus(null);

      // * Re-enable clicking
      quizRef.current.style.pointerEvents = 'all';

      // * Progress the quiz
      if (quizProgress.questionNumber < quizProgress.totalQuestions) {
        // * Update the score
        setQuizProgress((quiz) => ({
          ...quiz,
          questionNumber: counter + 1,
          question: questions[counter].question,
          answers: questions[counter].answers,
          correctAnswer: questions[counter].correctAnswer,
          totalCorrect: isCorrect ? totalCorrect + 1 : totalCorrect,
          totalAnswers: totalAnswers + 1,
        }));
      } else {
        // * Output the results
        setQuizProgress((quiz) => ({
          ...quiz,
          totalCorrect: isCorrect ? totalCorrect + 1 : totalCorrect,
          completed: true,
        }));
      }
    }, [1000]);
  }

  // *
  // * Current questions answers
  // ** Answer is correct if id === correctAnswer

  const currentQuestions = quizProgress.answers.map((answer, index) => (
    <Answer
      answerStatus={answerStatus}
      key={index}
      label={answer}
      isCorrectAnswer={index + 1 === quizProgress.correctAnswer}
      id={index + 1}
      handleUserAnswer={() => handleUserAnswer(index + 1)}
    />
  ));

  // *
  // * Show results if the timer runs out

  useEffect(() => {
    if (timeRemaining === 0) {
      setQuizProgress((quiz) => ({
        ...quiz,
        totalCorrect: quizProgress.totalCorrect,
        completed: true,
      }));
    }
  }, [timeRemaining, setQuizProgress]);

  // *
  // * Return

  return (
    <>
      {!quizProgress.completed ? (
        <QuizWrap spacing={[80, 80]}>
          <div className="timer">
            <Timer
              timeRemaining={timeRemaining}
              setTimeRemaining={setTimeRemaining}
            />
          </div>

          <div ref={quizRef} className="questions">
            <h2>
              Question {quizProgress.questionNumber} of{' '}
              {quizProgress.totalQuestions}
            </h2>

            <p>{quizProgress.question}</p>

            <Answers>{currentQuestions}</Answers>
          </div>
        </QuizWrap>
      ) : (
        <div>
          <QuizResults results={quizProgress} sanity={sanity} />
        </div>
      )}
    </>
  );
};

export default QuizLayout;

//

const QuizWrap = styled(Container)`
  display: flex;

  & .timer {
    width: 25%;
  }

  & .questions {
    width: calc(40% - 1rem);
    margin-left: 1rem;

    & p {
      margin-top: 2rem;
      color: var(--ef-black);
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  & .timer h5,
  & .questions h2 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const Answers = styled.ol`
  margin: 3.5rem 0 0 0;
  padding: 0;
`;

//

QuizLayout.propTypes = {
  questions: PropTypes.array.isRequired,
  sanity: PropTypes.object.isRequired,
};
