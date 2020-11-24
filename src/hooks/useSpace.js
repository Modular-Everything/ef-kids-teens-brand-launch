import { useState, useEffect } from 'react';

export default function useSpace(spacing) {
  const [topPadding, setTopPadding] = useState(150);
  const [bottomPadding, setBottomPadding] = useState(150);

  useEffect(() => {
    function handleResize(windowSize) {
      if (windowSize < 640) {
        setTopPadding(spacing[0] / 1.5);
        setBottomPadding(spacing[1] / 1.5);
      } else {
        setTopPadding(spacing[0]);
        setBottomPadding(spacing[1]);
      }
    }

    handleResize(window.innerWidth);

    window.addEventListener('resize', () => {
      handleResize(window.innerWidth);
    });
  });

  return {
    paddingTop: `${topPadding}px`,
    paddingBottom: `${bottomPadding}px`,
  };
}
