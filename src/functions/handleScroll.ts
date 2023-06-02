const lockScroll = (el: string): void => {
	const element = document.querySelector(el);

	if (element && element instanceof HTMLElement) {
		element.style.overflowY = 'hidden';
	}
};

const unlockScroll = (el: string): void => {
	const element = document.querySelector(el);

	if (element && element instanceof HTMLElement) {
		element.style.overflowY = 'initial';
	}
};

export default { unlockScroll, lockScroll };
