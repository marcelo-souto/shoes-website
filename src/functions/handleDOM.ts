import Card from '../classes/Card';

// const showElement = (entries: IntersectionObserverEntry[]) => {
// 	const entry = entries[0];
// 	entry.target.classList.toggle('show', entry.isIntersecting);
// };

const resetDOM = (el: HTMLElement) => {
	el.innerHTML = '';
};

const updateDOM = (el: HTMLElement) => (items: Array<Product>) => {

	resetDOM(el);

	items.forEach(({ name, images, discount, discountPrice }) => {
		const card = new Card(name, discountPrice, images, discount);
		card.insertInto(el);
	});
	
};

export { resetDOM, updateDOM };
