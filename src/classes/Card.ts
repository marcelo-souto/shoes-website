export default class Card {
  name;
  price;
  images;
  discount;
  element;

  constructor(name: string, price: number, images: string[], discount: number) {
    this.name = name;
    this.price = price;
    this.images = images;
    this.discount = discount;
    this.element = this.createElement();
  }

  createElement() {
    const anchor = document.createElement("a");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    anchor.href = '#';
    anchor.classList.add("card-product");
    if (this.discount) anchor.setAttribute('data-discount', `-${this.discount}%`);

    img.src = this.images[0] || 'https://i.imgur.com/TprUkF3.jpg';
    img.alt = this.name
    h3.innerText = this.name;
    p.innerText = this.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    div.append(h3);
    div.append(p);

    anchor.append(img);
    anchor.append(div);

    return anchor;
  }

  insertInto(el: HTMLElement) {
    const parentElement = el
    parentElement?.appendChild(this.element);
  }
}
