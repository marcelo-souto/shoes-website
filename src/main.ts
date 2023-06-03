import addEvent from './functions/addEvent';
import handleCategories from './functions/handleCategories';
import handleMenuActions from './functions/handleMenuActions';
import products from './data/products';
import { normalizeData } from './functions/normalizeData';
import observe from './functions/observe';
import Card from './classes/Card';
import Pagination from './classes/Pagination';

const handleData = () : void => {

	const data = products.map(normalizeData);
	const pagination = new Pagination<Product>({ items: data, totalItemsPerPage: 8 });
	
	pagination.itemsOnPage.forEach(({ name, images, discount, discountPrice }) => {

		const card = new Card(name, discountPrice, images, discount);
		card.insertInto('#products-area-1');

	});

};

handleData();

const categories = document.querySelectorAll<HTMLButtonElement>('[data-category]');
const menuButton = document.querySelector<HTMLButtonElement>('.menu-button');
const cards = document.querySelectorAll<HTMLAnchorElement>('.card-product');

addEvent(categories, 'click', handleCategories([...categories]));

if (menuButton) addEvent(menuButton, 'click', handleMenuActions);

observe(cards, (entries) => {
	entries.forEach((entry) => {
		entry.target.classList.toggle('show', entry.isIntersecting);
	});
});
