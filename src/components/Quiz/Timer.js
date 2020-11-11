import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import secondsToMs from '../../helpers/secondsToMs';

//

const Timer = ({ timeRemaining, setTimeRemaining }) => {
  // *
  // * Set up a timer to countdown

  useEffect(() => {
    if (!timeRemaining) return;

    const id = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearTimeout(id);
  }, [timeRemaining, setTimeRemaining]);

  // *
  // * Convert time to MM:SS

  return <h5>{secondsToMs(timeRemaining)}</h5>;
};

export default Timer;

//

Timer.propTypes = {
  timeRemaining: PropTypes.number.isRequired,
  setTimeRemaining: PropTypes.func.isRequired,
};
