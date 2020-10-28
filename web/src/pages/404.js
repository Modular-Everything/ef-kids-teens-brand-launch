import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionIntro from '../components/SectionIntro';

//

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Container>
      <SectionIntro title="404" copy="There was an error" />
    </Container>
  </Layout>
);

export default IndexPage;

//

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};
