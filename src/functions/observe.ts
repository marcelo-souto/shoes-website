const observe = <T extends Element>(
  elements: Array<T> | NodeListOf<T> | T,
  fn: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): void => {
  const observer = new IntersectionObserver(fn, { ...options });

  if (elements instanceof Array || elements instanceof NodeList) {
    elements.forEach((el) => observer.observe(el));
    
  } else if (elements instanceof Element) {
    observer.observe(elements);
  }
};

export default observe;
