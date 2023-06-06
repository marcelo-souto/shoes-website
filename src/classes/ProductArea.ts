// import Card from './Card';
import Pagination from './Pagination';
import { updateDOM } from '../functions/handleDOM';
import { v4 as uuidv4 } from 'uuid';

export default class ProductsArea {
	items: Array<Product>;
	element: HTMLElement;
	id: string;

	constructor(items: Array<Product>) {
		this.items = items;
		this.id = uuidv4();
		this.element = this.createElement();
	}

	createElement() {
		const container = document.createElement('div');
		const content = document.createElement('div');
		const controls = document.createElement('div');
		const prevButton = document.createElement('button');
		const nextButton = document.createElement('button');

		container.classList.add('products-container');
		container.id = this.id;
		content.classList.add('products-content');
		controls.classList.add('products-controls');

		prevButton.innerText = '< Anterior';
		nextButton.innerText = 'Próximo >';

		prevButton.classList.add('button', 'p-0', 'pt-2', 'pb-2', 'bg-transparent');
		nextButton.classList.add('button', 'p-0', 'pt-2', 'pb-2', 'bg-transparent');

		prevButton.id = 'prev' + this.id;
		nextButton.id = 'next' + this.id;

		const pagination = new Pagination<Product>({
			items: this.items,
			totalItemsPerPage: 4,
			controls: { prev: prevButton, next: nextButton }
		});

		updateDOM(content)(pagination.itemsOnPage);

		pagination.onClickNextButton(updateDOM(content));
		pagination.onClickPrevButton(updateDOM(content));

		controls.append(prevButton);
		controls.append(nextButton);

		container.append(content);
		container.append(controls);

		return container;
	}

	insertInto(el: string) {
		const element = document.querySelector(el);
		element?.append(this.element);
	}
}
