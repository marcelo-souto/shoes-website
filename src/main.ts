import addEvent from "./functions/addEvent";
import handleCategories from "./functions/handleCategories";
import handleMenuActions from "./functions/handleMenuActions";
import products from "./data/products";
import { normalizeData } from "./functions/normalizeData";
import Card from "./functions/Card";

const handleData = () => {

  const data = products.map(normalizeData);

  data.forEach(({name, price, images, discount}) => {

    const card = new Card(name, price, images, discount)
    card.insertInto('#products-area-1')
  })

};

handleData();

const categories = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-category]"));
const menuButton = document.querySelector<HTMLButtonElement>(".menu-button");

addEvent(categories, "click", handleCategories(categories));

if (menuButton) addEvent(menuButton, "click", handleMenuActions);
