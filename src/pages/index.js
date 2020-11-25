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
import BrandedCTA from '../components/BrandedCTA';
import AnyQuestionsCTA from '../components/AnyQuestionsCTA';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

//

const IndexPage = ({ location, data }) => {
  // *
  // * Set up sanity

  const sanity = data.sanityPage;

  // *
  // * Return

  return (
    <>
      <Layout location={location}>
        <Video
          videoData={sanity.video.url}
          type="full"
          placeholderVideo={sanity.video.videoPlaceholder}
          offset
        />

        <Container spacing={[132, 52]}>
          <SectionIntro
            title={sanity.openingCopy.title}
            copy={sanity.openingCopy.paragraph}
          />
        </Container>

        <Lottie />

        <RevealMore label="Show me more" spacing={[80, 132]} />

        <Container spacing={[0, 132]}>
          <SectionIntro
            title={sanity.talkingHeadsCopy.title}
            copy={sanity.talkingHeadsCopy.paragraph}
            small
            spacing={[0, 64]}
          />

          <Video
            videoData={sanity.talkingHeads[0].url.url}
            type="card"
            captionTitle={sanity.talkingHeads[0].captionTitle}
            captionCopy={sanity.talkingHeads[0].captionCopy}
            placeholderVideo={sanity.talkingHeads[0].url.videoPlaceholder}
            placeholderImg={
              sanity.talkingHeads[0].url.imgPlaceholder &&
              sanity.talkingHeads[0].url.imgPlaceholder.asset.url
            }
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

        <Container spacing={[180, 200]}>
          <BrandedCTA
            title={sanity.quizCta.title}
            copy={sanity.quizCta.paragraph}
            ctaLabel={sanity.quizCta.buttonLabel}
            ctaLink="/quiz"
          />
        </Container>

        <Carousel slides={sanity.schoolSites} />

        <Container spacing={[110, 132]}>
          <SectionIntro
            title={sanity.schoolSitesCopy.title}
            copy={sanity.schoolSitesCopy.paragraph}
            small
          />
        </Container>

        <LandscapeCard
          video={sanity.guidelinesCta.ctaVideo.url}
          title={sanity.guidelinesCta.ctaCopy.title}
          copy={sanity.guidelinesCta.ctaCopy.paragraph}
          ctaLabel={sanity.guidelinesCta.ctaLabel}
          ctaLink={sanity.guidelinesCta.ctaLink}
          spacing={[0, 140]}
        />

        <Container spacing={[0, 120]}>
          <SectionIntro
            title={sanity.uniformInfo.uniformCopy.title}
            richtext="Like the new image that consist of different colors, EF staff is also made up of professionals coming from different background and potentials, and we want to emphasize this strength in our EF daily lives. And… what can be better than the all-new cool uniform to brighten your day? Check our latest <a href='https://english1com.sharepoint.com/:b:/s/division-kids-indonesia/EdBgl90yRwdKkqRXHvxnMIoBZ8psgMFLHiO8UrpEp-0t9A?e=b96Ti5' target='_blank'>lookbook</a> so you know how to dress to impress!"
            spacing={[0, 80]}
          />

          <Video
            videoData={sanity.uniformInfo.uniformVideo.url}
            type="card"
            placeholderImg={
              !sanity.uniformInfo.uniformVideo.videoPlaceholder &&
              sanity.uniformInfo.uniformVideo.imgPlaceholder.asset.url
            }
            placeholderVideo={sanity.uniformInfo.uniformVideo.videoPlaceholder}
          />
        </Container>

        <AnyQuestionsCTA
          title={sanity.questionsCopy.title}
          copy={sanity.questionsCopy.paragraph}
          spacing={[20, 140]}
        />
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

//

export const query = graphql`
  query LandingQuery {
    sanityPage(_id: { regex: "/(drafts.|)homepage/" }) {
      # Header video
      video {
        url
        videoPlaceholder
        imgPlaceholder {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      # Guidelines
      guidelinesCta {
        _key
        ctaCopy {
          title
          paragraph
        }
        ctaLink
        ctaLabel
        ctaVideo {
          url
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
      # School Sites
      schoolSites {
        _key
        asset {
          fluid(maxWidth: 2560) {
            ...GatsbySanityImageFluid
          }
          title
        }
      }
      # Quiz CTA
      quizCta {
        title
        paragraph
        buttonLabel
      }
      # Talking Head(s)
      talkingHeads {
        _key
        _type
        captionTitle
        captionCopy
        url {
          url
          imgPlaceholder {
            asset {
              url
            }
          }
          videoPlaceholder
        }
      }
      # Uniform Video
      uniformInfo {
        uniformVideo {
          url
          videoPlaceholder
          imgPlaceholder {
            asset {
              url
            }
          }
        }
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
      schoolSitesCopy {
        title
        paragraph
      }
      uniformInfo {
        uniformCopy {
          title
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
