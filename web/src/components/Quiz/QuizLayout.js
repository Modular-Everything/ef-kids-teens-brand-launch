import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Answer from './Answer';
import QuizResults from './QuizResults';

//

const QuizLayout = ({ questions, sanity }) => {
  // *
  // * Get our quiz container reference

  const quizRef = useRef(null);

  // *
  // * Set up our quiz state
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

  // *
  // * Handle user answer
  // ** Progress all of our defaults by +1

  function handleUserAnswer(e) {
    const {
      questionNumber,
      totalCorrect,
      totalAnswers,
      correctAnswer,
    } = quizProgress;

    const counter = questionNumber;
    const isCorrect = parseInt(e.currentTarget.value) === correctAnswer;

    if (isCorrect) {
      // TODO: Add some classes here for correct/incorrect
      // * Use this to handle correct/incorrect stylings
      console.log('correct!');
    }

    // * Disable clicking other items before next question
    quizRef.current.style.pointerEvents = 'none';

    setTimeout(() => {
      if (quizProgress.questionNumber < quizProgress.totalQuestions) {
        // * Progress the quiz
        setQuizProgress((quiz) => ({
          ...quiz,
          questionNumber: counter + 1,
          question: questions[counter].question,
          answers: questions[counter].answers,
          correctAnswer: questions[counter].correctAnswer,
          totalCorrect: isCorrect ? totalCorrect + 1 : totalCorrect,
          totalAnswers: totalAnswers + 1,
        }));

        // * Re-enable clicking
        quizRef.current.style.pointerEvents = 'all';
      } else {
        // * Output the results
        setQuizProgress((quiz) => ({
          ...quiz,
          totalCorrect: isCorrect ? totalCorrect + 1 : totalCorrect,
          completed: true,
        }));
      }
    }, [0]);
  }

  // *
  // * Current questions answers
  // ** Answer is correct if index === correctAnswer

  const currentQuestions = quizProgress.answers.map((answer, index) => {
    const isCorrect = index + 1 === quizProgress.correctAnswer;
    return (
      <Answer
        key={index}
        label={answer}
        correctAnswer={isCorrect}
        id={index + 1}
        handleUserAnswer={handleUserAnswer}
      />
    );
  });

  // *
  // * Return

  return (
    <Container spacing={[80, 80]}>
      {!quizProgress.completed ? (
        <div ref={quizRef}>
          <h2>
            Question {quizProgress.questionNumber} of{' '}
            {quizProgress.totalQuestions}
          </h2>

          <h1>{quizProgress.question}</h1>

          {currentQuestions}
        </div>
      ) : (
        <div style={{ pointerEvents: 'all' }}>
          <QuizResults results={quizProgress} sanity={sanity} />
        </div>
      )}
    </Container>
  );
};

export default QuizLayout;

//

QuizLayout.propTypes = {
  questions: PropTypes.array.isRequired,
  sanity: PropTypes.object.isRequired,
};
