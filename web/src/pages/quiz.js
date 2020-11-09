import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionIntro from '../components/SectionIntro';
import Button from '../components/Button';
import StartLayout from '../components/Quiz/StartLayout';
import CountdownLayout from '../components/Quiz/CountdownLayout';

//

const QuizLayout = ({ page }) => (
  <section>
    <h2>Quiz</h2>
    <button type="button" onClick={() => page(3)}>
      Next
    </button>
  </section>
);

//

const ResultsLayout = () => (
  <section>
    <h2>Results</h2>
  </section>
);

//

// *
// * Bring it all together

const QuizPage = ({ location, data }) => {
  // *
  // * Set up sanity

  const sanity = data.sanityQuizPage;
  console.log(sanity);

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
      {activePage === 2 && <QuizLayout page={handlePageChange} />}
      {activePage === 3 && <ResultsLayout />}
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
