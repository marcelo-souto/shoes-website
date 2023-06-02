import addEvent from './functions/addEvent';
import handleCategories from './functions/handleCategories';
import handleMenuActions from './functions/handleMenuActions';


const categories = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-category]'));
const menuButton = document.querySelector<HTMLButtonElement>('.menu-button');


addEvent(categories, 'click', handleCategories(categories));
if (menuButton) addEvent(menuButton, 'click', handleMenuActions);