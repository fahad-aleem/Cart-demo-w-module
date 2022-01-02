interface BoundingRect {
  top: number;
  left: number;
  right: number;
  bottom: number;
}
export function isInViewport(element: {
  getBoundingClientRect: () => BoundingRect;
}) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
