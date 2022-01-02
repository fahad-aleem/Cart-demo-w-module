import { useEffect, useState } from "react";

import { debounce } from "@goldn/functions";

interface Progress {
  progress: number;
  index: number;
}

const getElement = containerRef => {
  const element = containerRef.current;
  const windowScroll = element.scrollLeft;
  const totalWidth = element.scrollWidth - element.clientWidth;

  return {
    windowScroll,
    totalWidth,
    element,
  };
};

export const useCarouselProgress = (
  containerRef: React.RefObject<HTMLDivElement>,
  totalItems: number
): [Progress, (step: number) => void] => {
  // convert to throttle and memo
  const handleScrolling = debounce(() => {
    const { windowScroll, totalWidth } = getElement(containerRef);

    if (windowScroll === 0) {
      return setProgress({
        progress: 0,
        index: 0,
      });
    }

    if (windowScroll > totalWidth) {
      return setProgress({
        progress: 100,
        index: totalItems - 1,
      });
    }

    return setProgress({
      progress: (windowScroll / totalWidth) * 100,
      index: Math.ceil(totalItems * (windowScroll / totalWidth) - 1),
    });
  }, 50);

  const goToStep = (step: number) => {
    const { totalWidth, element } = getElement(containerRef);
    const singleStep = totalWidth / (totalItems - 1);
    const singleStepRelativ = singleStep / totalWidth;

    if (step === 0) {
      return element.scrollTo({
        left: 0,
        behaviour: "smooth",
      });
    }

    return element.scrollTo({
      left: singleStepRelativ * step * totalWidth,
      behaviour: "smooth",
    });
  };

  const [progress, setProgress] = useState({
    progress: 0,
    index: 0,
  });

  useEffect(() => {
    containerRef.current.addEventListener("scroll", handleScrolling, {
      passive: true,
    });

    return function cleanup() {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return containerRef.current.removeEventListener(
        "scroll",
        handleScrolling
      );
    };
  }, [containerRef, handleScrolling]);

  return [progress, goToStep];
};
