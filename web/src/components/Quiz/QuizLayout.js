import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Answer from './Answer';
import QuizResults from './QuizResults';

//

const QuizLayout = ({ questions }) => {
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
    completed: false,
  });

  // *
  // * Handle user answer
  // ** Progress all of our defaults by 1

  function handleUserAnswer(e) {
    const counter = quizProgress.questionNumber;
    const total = quizProgress.totalCorrect;
    const isCorrect =
      parseInt(e.currentTarget.value) === quizProgress.correctAnswer;

    if (isCorrect) {
      // TODO: Add some classes here for correct/incorrect
      console.log('correct!');
    }

    if (quizProgress.questionNumber < quizProgress.totalQuestions) {
      setQuizProgress((quiz) => ({
        ...quiz,
        questionNumber: counter + 1,
        question: questions[counter].question,
        answers: questions[counter].answers,
        correctAnswer: questions[counter].correctAnswer,
        totalCorrect: isCorrect ? total + 1 : total,
      }));
    } else {
      setQuizProgress((quiz) => ({
        ...quiz,
        totalCorrect: isCorrect ? total + 1 : total,
        completed: true,
      }));
    }
  }

  // *
  // * Total score
  // ! Might not need this? But it does show that the total is incrementing.

  useEffect(() => {
    console.log(`Score: ${quizProgress.totalCorrect}`);
  }, [quizProgress]);

  // !
  // ! Reset quiz (temporary and should be removed)

  function resetQuiz() {
    setQuizProgress((quiz) => ({
      ...quiz,
      questionNumber: 1,
      question: questions[0].question,
      answers: questions[0].answers,
      correctAnswer: questions[0].correctAnswer,
      totalCorrect: 0,
      completed: false,
    }));
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
        <>
          <h2>
            Question {quizProgress.questionNumber} of{' '}
            {quizProgress.totalQuestions}
          </h2>

          <h1>{quizProgress.question}</h1>

          {currentQuestions}
        </>
      ) : (
        <QuizResults results={quizProgress} />
      )}

      <hr />

      <button type="button" onClick={() => handleUserAnswer()}>
        Next Question
      </button>

      <button type="button" onClick={() => resetQuiz()}>
        Reset quiz
      </button>
    </Container>
  );
};

export default QuizLayout;

//

QuizLayout.propTypes = {
  questions: PropTypes.array.isRequired,
};
