import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPlayer from 'react-player/vimeo';

import PlayIcon from '../../assets/icons/play.svg';
import useSpace from '../../hooks/useSpace';

//

const PlayButton = ({ onClick }) => (
  <Play type="button" onClick={onClick}>
    <img src={PlayIcon} alt="Play" />
  </Play>
);

//

const Caption = ({ title, copy }) => (
  <CaptionWrap>
    <h5>{title}</h5>
    <p>{copy}</p>
  </CaptionWrap>
);

//

const Video = ({
  videoData,
  type,
  captionTitle,
  captionCopy,
  spacing,
  placeholderVideo,
  placeholderImg,
}) => {
  // *
  // * Define refs

  const VideoRef = useRef(null);
  const aspectRatio = useRef(0);

  // *
  // * Playing state

  const [playing, setPlaying] = useState(false);

  // *
  // * Get the aspect ratio of the video

  function getRatio() {
    const player = VideoRef.current.wrapper.children[0].children[0];
    const { height, width } = player;

    aspectRatio.current = Math.floor(
      (parseInt(height) / parseInt(width)) * 100
    );

    VideoRef.current.wrapper.parentNode.style.paddingBottom = `${aspectRatio.current}%`;
  }

  // *
  // * Does it have a caption?

  const hasCaption = captionTitle || captionCopy;

  // *
  // * Return player

  return (
    <VideoWrap
      style={useSpace(spacing)}
      isPlaceholder={placeholderVideo && !playing && 'placeholder'}
      type={type}
    >
      {!playing && placeholderVideo && (
        <div style={{ position: type === 'card' ? 'relative' : 'unset' }}>
          <PlayButton onClick={() => setPlaying(true)} />
          <FullWidthVideo type="placeholder">
            <ReactPlayer
              className="videoPlaceholder"
              url={placeholderVideo}
              width="100%"
              height="100%"
              playing
              controls={false}
              ref={VideoRef}
              volume={0}
              loop
              muted
              config={{
                vimeo: {
                  background: true,
                },
              }}
              onReady={() => getRatio()}
            />
          </FullWidthVideo>
        </div>
      )}

      {(playing || placeholderImg) && (
        <FullWidthVideo type={type}>
          <ReactPlayer
            url={videoData}
            ref={VideoRef}
            width="100%"
            height="100%"
            playIcon={<PlayButton />}
            light={placeholderImg || null}
            playing={placeholderVideo}
            controls
            muted={window && window.innerWidth > 600}
            config={{
              vimeo: {
                background: true,
              },
            }}
            onReady={() => getRatio()}
          />
        </FullWidthVideo>
      )}

      {type === 'card' && hasCaption && (
        <Caption title={captionTitle} copy={captionCopy} />
      )}
    </VideoWrap>
  );
};

export default Video;

//

const VideoWrap = styled.section`
  position: relative;

  ${(props) =>
    props.type === 'card' &&
    `
    & div:first-of-type {
      box-shadow: 0 2px 8px rgba(25, 25, 25, 0.15);
      overflow: hidden;
      border-radius: 4px;
    }
  `}

  ${(props) =>
    props.isPlaceholder === 'placeholder' &&
    props.type !== 'card' &&
    `
    height: auto;
    padding-bottom: 56%;
    overflow: hidden;
    
      @media (min-width: 1060px) {
        height: 600px;
      }
  `}
`;

const Play = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 15;
  width: 3.5rem;
  height: 3.5rem;
  background: none;
  background-color: #fff;
  border: none;
  border-radius: 9rem;
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.15);
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;

  @media (min-width: 960px) {
    width: 4.5rem;
    height: 4.5rem;
  }

  & img {
    width: 1rem;
  }
`;

const CaptionWrap = styled.div`
  color: var(--ef-black);

  & h5 {
    margin: 1rem 0 0.25rem 0;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  & p {
    margin: 0;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const FullWidthVideo = styled.div`
  position: relative;
  padding-bottom: 50%;
  overflow: hidden;
  border-bottom: 1px solid #efefef;

  & .react-player__preview {
    transition: all ease-in-out 150ms;
  }

  &:hover {
    & .react-player__preview {
      transform: scale(1.05);
    }
  }

  ${(props) =>
    props.type === 'full' &&
    `
      padding-bottom: 100%;

      @media (min-width: 480px) {
        padding-bottom: 56%;
      }
  `}

  ${(props) =>
    props.type === 'card' &&
    `
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(25, 25, 25, 0.15);
  `}

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

//

Video.propTypes = {
  videoData: PropTypes.string.isRequired,
  type: PropTypes.string,
  captionTitle: PropTypes.string,
  captionCopy: PropTypes.string,
  spacing: PropTypes.array,
  placeholderVideo: PropTypes.string,
  placeholderImg: PropTypes.object,
};

Video.defaultProps = {
  type: null,
  captionTitle: null,
  captionCopy: null,
  spacing: [0, 0],
  placeholderVideo: null,
  placeholderImg: null,
};

Caption.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};

PlayButton.propTypes = {
  onClick: PropTypes.func,
};

PlayButton.defaultProps = {
  onClick: null,
};
