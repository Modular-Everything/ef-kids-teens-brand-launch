import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Timeline from '../components/Timeline';

//

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <h1>Hi</h1>
    <Timeline data={data.sanityPage.timeline} />
  </Layout>
);

export default IndexPage;

//

export const data = graphql`
  query TimelineQuery {
    sanityPage(_id: { eq: "homepage" }) {
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
};
