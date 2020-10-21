// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import page from './page';
import quizQuestions from './quizQuestions';
import vimeo from './vimeo';
import vimeoCaption from './vimeoCaption';
import titleCopy from './titleCopy';
import bodymovin from './bodymovin';
import talkingHeads from './talkingHeads';
import talkingHead from './talkingHead';
import quizCta from './quizCta';
import timeline from './timeline';
import doubleCard from './doubleCard';
import singleCard from './singleCard';
import imageCard from './imageCard';
import guidelinesCta from './guidelinesCta';
import uniformInfo from './uniformInfo';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    page,
    quizQuestions,
    titleCopy,
    vimeo,
    vimeoCaption,
    bodymovin,
    talkingHeads,
    talkingHead,
    quizCta,
    timeline,
    doubleCard,
    singleCard,
    imageCard,
    guidelinesCta,
    uniformInfo,
  ]),
});
