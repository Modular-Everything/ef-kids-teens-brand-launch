import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';
import SectionIntro from '../SectionIntro';
import Button from '../Button';
import MoodyBlocks from '../MoodyBlocks';

//

const StartLayout = ({ page, sanity }) => (
  <section>
    <Container>
      <SectionIntro
        title={sanity.quizStartCopy.title}
        copy={sanity.quizStartCopy.paragraph}
        spacing={[80, 60]}
      />

      <ButtonWrap>
        <div />
        <div>
          <Button label="Start Quiz" form={() => page(1)} />
        </div>
      </ButtonWrap>
    </Container>

    <MoodyBlocks mood="happy" />
  </section>
);

export default StartLayout;

//

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  & div {
    display: flex;
    width: 100%;
    padding: 0 0 0 1.5rem;

    @media (min-width: 400px) {
      width: 90%;
    }

    @media (min-width: 640px) {
      width: 50%;
    }
  }
`;

//

StartLayout.propTypes = {
  page: PropTypes.func.isRequired,
  sanity: PropTypes.object.isRequired,
};
