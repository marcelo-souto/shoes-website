import addEvent from './functions/addEvent';

const categories = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-category]'));

const handleCategories = <T extends HTMLElement>(elements: Array<T>): EventListener => ({ currentTarget }: Event): void => {
	
		const previousActivedOption = elements.find((el) => el.classList.contains('actived'));
		const newActivedOption = currentTarget;

		previousActivedOption?.classList.remove('actived');

		if (newActivedOption instanceof HTMLElement) {
			newActivedOption.classList.add('actived');
		}
		
	};

addEvent(categories, 'click', handleCategories(categories));
