/**
 * Add event to each element in array of elements or a single element
 */

function addEvent<T extends Element>(element: T | Array<T> | NodeListOf<T>, event: string, listener: EventListener): void {

  if (element instanceof Array || element instanceof NodeList) {
    element.forEach((el) => {
      el.addEventListener(event, listener);
    });
  }

  if (element instanceof Element) {
    element.addEventListener(event, listener);
  }
}

export default addEvent;