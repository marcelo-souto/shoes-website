const handleCategories =
	<T extends HTMLElement>(elements: Array<T>): EventListener =>
	({ currentTarget }: Event): void => {
		const previousActivedOption = elements.find((el) => el.classList.contains('actived'));
		const newActivedOption = currentTarget;

		previousActivedOption?.classList.remove('actived');

		if (newActivedOption instanceof HTMLElement) {
			newActivedOption.classList.add('actived');
		}
	};

  export default handleCategories