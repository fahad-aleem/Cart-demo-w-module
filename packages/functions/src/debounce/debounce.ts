export function debounce(callback, delay = 50, immediate = false) {
  let timeout = null;

  return function () {
    const callNow = immediate && !timeout;

    function next() {
      // eslint-disable-next-line prefer-rest-params
      callback.apply(this, arguments);
    }

    clearTimeout(timeout);
    timeout = setTimeout(next, delay);

    if (callNow) {
      next();
    }
  };
}
