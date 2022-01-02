import { useRef, useEffect } from "react";

export function useClickOutside(callback) {
  const ref = useRef(null);

  function handleEvent(e) {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }

  useEffect(() => {
    if (window.PointerEvent) {
      document.addEventListener("pointerdown", handleEvent);
    } else {
      document.addEventListener("mousedown", handleEvent);
      document.addEventListener("touchstart", handleEvent);
    }

    return () => {
      if (window.PointerEvent) {
        document.removeEventListener("pointerdown", handleEvent);
      } else {
        document.removeEventListener("mousedown", handleEvent);
        document.removeEventListener("touchstart", handleEvent);
      }
    };
  }, []);

  return ref;
}
