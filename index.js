function debounce(callback, delay) {
  if (!callback) {
    console.error('Callback not provided');
    return;
  }
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { callback.apply(this. args) }, delay);
  };
}