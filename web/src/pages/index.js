import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Timeline from '../components/Timeline';
import Lottie from '../components/Lottie';
import LandscapeCard from '../components/LandscapeCard';
import SectionIntro from '../components/SectionIntro';
import RevealMore from '../components/RevealMore';
import Video from '../components/Video';
import CardGrid from '../components/CardGrid';
import BrandedCTA from '../components/BrandedCTA';

//

const IndexPage = ({ location, data }) => {
  const sanity = data.sanityPage;

  console.log(sanity);

  return (
    <Layout location={location}>
      <Video videoData="https://vimeo.com/432893400" type="full" />

      <Container spacing={[132, 52]}>
        <SectionIntro
          title={sanity.openingCopy.title}
          copy={sanity.openingCopy.paragraph}
        />
      </Container>

      <Lottie />

      <RevealMore label="Show me more" spacing={[80, 132]} />

      <Container>
        <SectionIntro
          title={sanity.talkingHeadsCopy.title}
          copy={sanity.talkingHeadsCopy.paragraph}
          small
          spacing={[0, 64]}
        />

        <CardGrid hasCaption>
          <Video
            videoData="https://vimeo.com/432893400"
            type="card"
            captionTitle="Joel Hladecek"
            captionCopy="Chief Creative Officer, EF"
          />
          <Video
            videoData="https://vimeo.com/432893400"
            type="card"
            captionTitle="Jonathan Hall"
            captionCopy="President, Kids &amp; Teens, International"
          />
          <Video
            videoData="https://vimeo.com/432893400"
            type="card"
            captionTitle="Jacob Toren"
            captionCopy="CEO, EF Education First, China"
          />
          <Video
            videoData="https://vimeo.com/432893400"
            type="card"
            captionTitle="Musa Sunandar"
            captionCopy="Designer, Kids &amp; Teens, Indonesia"
          />
        </CardGrid>
      </Container>

      <Container spacing={[180, 180]}>
        <BrandedCTA
          title={sanity.quizCta.title}
          copy={sanity.quizCta.paragraph}
          ctaLabel={sanity.quizCta.buttonLabel}
          ctaLink="/quiz"
        />
      </Container>

      <Container>
        <SectionIntro
          title={sanity.timelineCopy.title}
          copy={sanity.timelineCopy.paragraph}
          spacing={[0, 80]}
        />
      </Container>

      <Timeline data={sanity.timeline} />

      <Container spacing={[110, 140]}>
        <LandscapeCard
          image={sanity.guidelinesCta.ctaImage.asset}
          title={sanity.guidelinesCta.ctaCopy.title}
          copy={sanity.guidelinesCta.ctaCopy.paragraph}
          ctaLabel={sanity.guidelinesCta.ctaLabel}
          ctaLink={sanity.guidelinesCta.ctaLink}
        />
      </Container>

      <Container spacing={[0, 120]}>
        <SectionIntro
          title={sanity.uniformInfo.uniformCopy.title}
          copy={sanity.uniformInfo.uniformCopy.paragraph}
          spacing={[0, 80]}
        />

        <Video videoData="https://vimeo.com/432893400" type="card" />
      </Container>

      <Container>
        <SectionIntro
          title={sanity.questionsCopy.title}
          copy={sanity.questionsCopy.paragraph}
        />
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

      # Quiz CTA
      quizCta {
        title
        paragraph
        buttonLabel
      }

      # SectionIntro Copy
      openingCopy {
        title
        paragraph
      }
      questionsCopy {
        title
        paragraph
      }
      talkingHeadsCopy {
        title
        paragraph
      }
      timelineCopy {
        title
        paragraph
      }
      uniformInfo {
        uniformCopy {
          title
          paragraph
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
