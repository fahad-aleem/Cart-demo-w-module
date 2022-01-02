export function throttle(callback: (...args: any[]) => any, limit: number) {
  let waiting = false;

  return (...args: any) => {
    if (!waiting) {
      callback(...args);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}
