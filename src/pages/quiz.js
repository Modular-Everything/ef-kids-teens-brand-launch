import React, { useState } from 'react';
import PropTypes from 'prop-types';

import sanity from '../data/resultCaptions';
import questions from '../data/questions';
import Layout from '../components/Layout';
import StartLayout from '../components/Quiz/StartLayout';
import CountdownLayout from '../components/Quiz/CountdownLayout';
import QuizLayout from '../components/Quiz/QuizLayout';

//

const QuizPage = ({ location }) => {
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

CountdownLayout.propTypes = {
  page: PropTypes.func.isRequired,
};

QuizLayout.propTypes = {
  page: PropTypes.func.isRequired,
};

QuizPage.propTypes = {
  location: PropTypes.object.isRequired,
};