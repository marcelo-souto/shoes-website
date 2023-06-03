const observe = <T extends Element>(
	elements: Array<T> | NodeListOf<T>,
	fn: IntersectionObserverCallback,
	options?: IntersectionObserverInit
): void => {
	const observer = new IntersectionObserver(fn, { ...options });

	elements.forEach((el) => observer.observe(el));
};

export default observe;
