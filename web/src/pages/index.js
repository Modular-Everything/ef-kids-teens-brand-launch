import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Timeline from '../components/Timeline';

//

const IndexPage = ({ location }) => {
  console.log(typeof location);
  return (
    <Layout location={location}>
      <h1>Hi</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Timeline />
    </Layout>
  );
};

export default IndexPage;

//

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};
