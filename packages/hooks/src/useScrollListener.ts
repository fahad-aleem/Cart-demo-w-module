import { useEffect, useState, useRef } from "react";

import { throttle } from "@goldn/functions";

const SIXTY_HZ = 16;

export const useScrollListener = (
  htmlID: string,
  callback: (scrollContainer: HTMLElement) => any,
  callOnMount = true,
  throttleTime = SIXTY_HZ
): [HTMLElement, number] => {
  const [scrollPosition, setScrollPosition] = useState<number>();
  const scrollContainerRef = useRef<HTMLElement>(null);

  const setPosition = throttle(() => {
    scrollContainerRef.current &&
      setScrollPosition(scrollContainerRef.current.scrollTop);
  }, 66);

  const action = throttle(() => {
    callback(scrollContainerRef.current);
  }, throttleTime);

  useEffect(() => {
    const scrollContainer = document.getElementById(htmlID);

    if (scrollContainer) {
      scrollContainerRef.current = scrollContainer;
      scrollContainer.addEventListener("scroll", action, {
        passive: true,
        capture: false,
      });

      scrollContainer.addEventListener("scroll", setPosition, {
        passive: true,
        capture: false,
      });

      callOnMount && callback(scrollContainer);

      return () => {
        scrollContainer.removeEventListener("scroll", action);
        scrollContainer.removeEventListener("scroll", setPosition);
      };
    }
  }, []);

  return [scrollContainerRef.current, scrollPosition];
};
