import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// import sanity from '../data/resultCaptions';
// import questions from '../data/questions';
import Layout from '../components/Layout';
import StartLayout from '../components/Quiz/StartLayout';
import CountdownLayout from '../components/Quiz/CountdownLayout';
import QuizLayout from '../components/Quiz/QuizLayout';

//

const QuizPage = ({ location, data }) => {
  // *
  // * Set up sanity

  const sanity = data.sanityQuizPage;
  const questions = data.allSanityQuizQuestions;

  // *
  // * Set active page

  const [activePage, setActivePage] = useState(0);

  // *
  // * Handle 'page' change

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

  // *
  // * Return quiz

  return (
    <Layout location={location}>
      <form data-netlify="true" name="Quiz Submit">
        <input type="hidden" name="form-name" value="Quiz Submit" />
        <input type="hidden" name="winnerName" />
        <input type="hidden" name="winnerEmail" />
        <input type="hidden" name="timeTaken" />
      </form>

      {activePage === 0 && (
        <StartLayout page={handlePageChange} sanity={sanity} />
      )}
      {activePage === 1 && <CountdownLayout page={handlePageChange} />}
      {activePage === 2 && (
        <QuizLayout
          page={handlePageChange}
          questions={questions.nodes}
          sanity={sanity.quizResults}
        />
      )}
    </Layout>
  );
};

export default QuizPage;

//

export const query = graphql`
  query QuizQuery {
    sanityQuizPage(_id: { eq: "quizIndex" }) {
      title
      quizResults {
        _key
        resultCaption
        resultTitle
      }
      quizStartCopy {
        paragraph
        title
      }
    }
    allSanityQuizQuestions {
      nodes {
        question
        answers
        correctAnswer
        _id
      }
    }
  }
`;

//

CountdownLayout.propTypes = {
  page: PropTypes.func.isRequired,
};

QuizLayout.propTypes = {
  page: PropTypes.func.isRequired,
};

QuizPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
