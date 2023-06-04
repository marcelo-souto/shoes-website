import Card from '../classes/Card';
import observe from './observe';

const showElement = (entries: IntersectionObserverEntry[]) => {
	const entry = entries[0];
	entry.target.classList.toggle('show', entry.isIntersecting);
};

const resetDOM = (el: string) => {
	const element = document.querySelector(el);
	if (element) element.innerHTML = '';
};

const updateDOM = (el: string) => (items: Array<Product>) => {

	resetDOM(el);

	items.forEach(({ name, images, discount, discountPrice }) => {
		const card = new Card(name, discountPrice, images, discount);
		card.insertInto(el);
		observe(card.element, showElement, { threshold: 0.2 });
	});
	
};

export { resetDOM, updateDOM };
