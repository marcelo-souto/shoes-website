import addEvent from "./functions/addEvent";
import handleCategories from "./functions/handleCategories";
import handleMenuActions from "./functions/handleMenuActions";
import products from "./data/products";
import { normalizeData } from "./functions/normalizeData";
import Pagination from "./classes/Pagination";
import { updateDOM } from "./functions/handleDOM";

const handleData = (): void => {
  const data = products.map(normalizeData);
  createPromotionSection(data);
  createMostSellersSection(data);
};

handleData();

function createPromotionSection(data: Product[]) {
  const isOnPromotionProducts = data.filter((product) => product.isOnPromotion);

  const pagination = new Pagination<Product>({
    items: isOnPromotionProducts,
    totalItemsPerPage: 4,
    controls: { prev: "#prev-promotion", next: "#next-promotion" },
  });

  updateDOM("#products-promotion")(pagination.itemsOnPage);

  pagination.onClickNextButton(updateDOM("#products-promotion"));
  pagination.onClickPrevButton(updateDOM("#products-promotion"));
}

function createMostSellersSection(data: Product[]) {
  const mostSellers = data.sort((p1, p2) => p2.totalSales - p1.totalSales);

  const pagination = new Pagination<Product>({
    items: mostSellers,
    totalItemsPerPage: 4,
    controls: { prev: "#prev-most-sellers", next: "#next-most-sellers" },
  });

  updateDOM("#products-most-sellers")(pagination.itemsOnPage);

  pagination.onClickNextButton(updateDOM("#products-most-sellers"));
  pagination.onClickPrevButton(updateDOM("#products-most-sellers"));
}

const categories = document.querySelectorAll<HTMLButtonElement>("[data-category]");
const menuButton = document.querySelector<HTMLButtonElement>(".menu-button");

addEvent(categories, "click", handleCategories([...categories]));

if (menuButton) addEvent(menuButton, "click", handleMenuActions);
