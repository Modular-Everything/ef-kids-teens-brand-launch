import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Timeline from '../components/Timeline';
import Lottie from '../components/Lottie';

//

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <h1>Hi</h1>
    <Lottie />
  </Layout>
);

export default IndexPage;

//

export const data = graphql`
  query LandingQuery {
    sanityPage(_id: { eq: "homepage" }) {
      # Timeline
      timeline {
        ... on SanityDoubleCard {
          _key
          _type
          year
          paragraph
          paragraphTitle
        }
        ... on SanityImageCard {
          _key
          _type
          year
          imageTitle
          bgImage {
            asset {
              fluid(maxWidth: 480) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        ... on SanitySingleCard {
          _key
          _type
          year
          paragraph
          paragraphTitle
        }
      }
    }
  }
`;

//

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
