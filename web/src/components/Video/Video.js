import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPlayer from 'react-player/vimeo';

import PlayIcon from '../../assets/icons/play.svg';
import FullWidthBg from '../../assets/images/videoPlaceholder.png';

//

const PlayButton = () => (
  <Play type="button">
    <img src={PlayIcon} alt="Play" />
  </Play>
);

//

const Video = ({ videoData, type }) => {
  // * Define refs

  const VideoRef = useRef(null);
  const aspectRatio = useRef(0);

  // * Get the width/height of the video

  function getRatio() {
    const player = VideoRef.current.wrapper.children[0].children[0];
    const { height, width } = player;

    aspectRatio.current = Math.floor(
      (parseInt(height) / parseInt(width)) * 100
    );

    VideoRef.current.wrapper.parentNode.style.paddingBottom = `${aspectRatio.current}%`;
  }

  if (!videoData) return null;

  // * Return full width player

  if (type === 'full') {
    return (
      <FullWidthVideo>
        <ReactPlayer
          url={videoData}
          ref={VideoRef}
          width="100%"
          height="100%"
          light={FullWidthBg}
          playIcon={<PlayButton />}
          playing
          controls
          onReady={() => getRatio()}
        />
      </FullWidthVideo>
    );
  }

  // * Return standard player

  return <ReactPlayer url={videoData} />;
};

export default Video;

//

const Play = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  background: none;
  background-color: #fff;
  border: none;
  border-radius: 9rem;
  box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.15);
  cursor: pointer;

  & img {
    width: 1rem;
  }
`;

const FullWidthVideo = styled.div`
  position: relative;
  padding-bottom: 50%;

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
};
