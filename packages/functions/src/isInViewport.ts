export function isInViewport(element: Element, fullyVisible = true) {
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  if (fullyVisible) {
    return elemTop >= 0 && elemBottom <= window.innerHeight;
  }

  return elemTop < window.innerHeight && elemBottom >= 0;
}
