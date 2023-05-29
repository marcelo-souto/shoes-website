import addEvent from "./functions/addEvent";

const categories = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-category]"));

function handleCategories<T extends HTMLElement>(elements: Array<T>): EventListener {
  return ({ currentTarget }: Event): void => {
    const selected = elements.find((el) => el.classList.contains("primary"));

    selected?.classList.remove("primary");
    selected?.classList.add("secondary");

    if (currentTarget instanceof HTMLElement) {
      currentTarget.classList.remove("secondary");
      currentTarget.classList.add("primary");
    }
  };
}

addEvent(categories, "click", handleCategories(categories));