interface Coordinates {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  bottom: number;
}

export const getElementCoordinates = (domEl: Element): Coordinates => {
  const rect = domEl.getBoundingClientRect();

  return {
    bottom: window.innerHeight - rect.bottom,
    top: rect.top,
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
    width: rect.width,
    height: rect.height,
  };
};
