import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sanitizeHtml from 'sanitize-html';
import useSpace from '../../hooks/useSpace';

//

const SectionIntro = ({ title, copy, richtext, small, spacing }) => {
  let clean;
  if (richtext) {
    const dirty = richtext;
    clean = sanitizeHtml(dirty, {
      allowedTags: ['a'],
      allowedAttributes: {
        a: ['href', 'target'],
      },
    });
  }

  return (
    <IntroWrap style={useSpace(spacing)}>
      <Title>{small ? <h3>{title}</h3> : <h2>{title}</h2>}</Title>

      {copy && <Paragraph>{copy}</Paragraph>}
      {richtext && <Paragraph dangerouslySetInnerHTML={{ __html: clean }} />}
    </IntroWrap>
  );
};

export default SectionIntro;

//

const IntroWrap = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Title = styled.div`
  width: 100%;

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 640px) {
    width: 50%;
  }

  & h2 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;

    @media (min-width: 960px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }

  & h3 {
    margin: 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const Paragraph = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;

  @media (min-width: 400px) {
    width: 90%;
  }

  @media (min-width: 640px) {
    width: 50%;
    padding: 0 3rem 0 1.5rem;
  }

  & a {
    color: var(--ef-kids-blue);
    transition: color ease-in-out 250ms;

    &:hover {
      color: var(--ef-kids-pink);
    }
  }

  & p {
    margin: 0;
    color: var(--ef-black);
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: pre-line;
  }
`;

//

SectionIntro.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string,
  richtext: PropTypes.object,
  small: PropTypes.bool,
  spacing: PropTypes.array,
};

SectionIntro.defaultProps = {
  copy: null,
  richtext: null,
  small: false,
  spacing: [0, 0],
};
