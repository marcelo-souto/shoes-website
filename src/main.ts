import addEvent from './functions/addEvent';
import handleCategories from './functions/handleCategories';
import handleMenuActions from './functions/handleMenuActions';
import products from './data/products';
import { normalizeData } from './functions/normalizeData';
import Pagination from './classes/Pagination';
import { updateDOM } from './functions/handleDOM';

const handleData = (): void => {

	const data = products.map(normalizeData).filter((product) => product.isOnPromotion);

	const pagination = new Pagination<Product>({
		items: data,
		totalItemsPerPage: 4,
		controls: { prev: '#prev', next: '#next' }
	});

	updateDOM('#products-area-1')(pagination.itemsOnPage);

	pagination.onClickNextButton(updateDOM('#products-area-1'));
	pagination.onClickPrevButton(updateDOM('#products-area-1'));
};

handleData();

const categories = document.querySelectorAll<HTMLButtonElement>('[data-category]');
const menuButton = document.querySelector<HTMLButtonElement>('.menu-button');

addEvent(categories, 'click', handleCategories([...categories]));

if (menuButton) addEvent(menuButton, 'click', handleMenuActions);
