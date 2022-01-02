export function smoothScroll(
  elem: Element,
  options: ScrollIntoViewOptions = { behavior: "smooth" }
) {
  return new Promise(resolve => {
    let same = 0;
    let lastPos = null;

    elem.scrollIntoView(options);
    requestAnimationFrame(check);

    function check() {
      const newPos = elem.getBoundingClientRect().top;

      if (newPos === lastPos) {
        if (same++ > 2) {
          return resolve(true);
        }
      } else {
        same = 0;
        lastPos = newPos;
      }
      requestAnimationFrame(check);
    }
  });
}
