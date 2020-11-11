import React from 'react';
import PropTypes from 'prop-types';

import sanity from '../data/sanity';
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
import AnyQuestionsCTA from '../components/AnyQuestionsCTA';
import Footer from '../components/Footer';

//

const IndexPage = ({ location }) => (
  <>
    <Layout location={location}>
      <Video videoData={sanity.headerVideo.url} type="full" />

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

        {sanity.talkingHeads.length > 1 ? (
          <CardGrid hasCaption>
            {sanity.talkingHeads.map((head) => (
              <Video
                videoData={head.url}
                type="card"
                captionTitle={head.captionTitle}
                captionCopy={head.captionCopy}
              />
            ))}
          </CardGrid>
        ) : (
          <Video
            videoData={sanity.talkingHeads[0].url}
            type="card"
            captionTitle={sanity.talkingHeads[0].captionTitle}
            captionCopy={sanity.talkingHeads[0].captionCopy}
          />
        )}
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

        <Video videoData={sanity.uniformVideo.url} type="card" />
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

export default IndexPage;

//

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};
