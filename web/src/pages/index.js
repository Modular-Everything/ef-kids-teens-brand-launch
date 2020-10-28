import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Timeline from '../components/Timeline';
import Lottie from '../components/Lottie';
import LandscapeCard from '../components/LandscapeCard';
import SectionIntro from '../components/SectionIntro';

//

const IndexPage = ({ location, data }) => {
  const sanity = data.sanityPage;

  console.log(sanity);

  return (
    <Layout location={location}>
      <Timeline data={sanity.timeline} />

      <Container>
        <LandscapeCard
          image={sanity.guidelinesCta.ctaImage.asset}
          title={sanity.guidelinesCta.ctaCopy.title}
          copy={sanity.guidelinesCta.ctaCopy.paragraph}
          ctaLabel={sanity.guidelinesCta.ctaLabel}
          ctaLink={sanity.guidelinesCta.ctaLink}
        />
      </Container>

      {/* <Lottie /> */}

      <Container>
        <SectionIntro />
      </Container>
    </Layout>
  );
};

export default IndexPage;

//

export const query = graphql`
  query LandingQuery {
    sanityPage(_id: { eq: "homepage" }) {
      # Guidelines
      guidelinesCta {
        _key
        ctaCopy {
          title
          paragraph
        }
        ctaLink
        ctaLabel
        ctaImage {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

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
