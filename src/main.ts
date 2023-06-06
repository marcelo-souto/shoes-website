import addEvent from './functions/addEvent';
import handleCategories from './functions/handleCategories';
import handleMenuActions from './functions/handleMenuActions';
import products from './data/products';
import { normalizeData } from './functions/normalizeData';
import observe from './functions/observe';
import ProductsArea from './classes/ProductArea';

const handleData = (): void => {
	const data = products.map(normalizeData);

	const onPromotionProductsArea = new ProductsArea(data.filter((product) => product.isOnPromotion));
	onPromotionProductsArea.insertInto('#products-promotion');

  const mostSellersProductsArea = new ProductsArea(data.sort((p1, p2) => p2.totalSales - p1.totalSales));
  mostSellersProductsArea.insertInto('#products-most-sellers');


};

handleData();

const categories = document.querySelectorAll<HTMLButtonElement>('[data-category]');
const menuButton = document.querySelector<HTMLButtonElement>('.menu-button');

addEvent(categories, 'click', handleCategories([...categories]));

if (menuButton) addEvent(menuButton, 'click', handleMenuActions);

const sections = document.querySelectorAll('main section');

observe(
	sections,
	(entries) =>
		entries.forEach((entry) => entry.target.classList.toggle('show', entry.isIntersecting)),
	{ threshold: 0.2 }
);
