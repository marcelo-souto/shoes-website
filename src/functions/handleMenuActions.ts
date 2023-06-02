import scroll from './handleScroll';

const handleMenuActions = ({ currentTarget }: Event) => {
	const menu = document.querySelector('.navigation-bar');
	const menuIsActived = menu?.classList.contains('actived');

	if (currentTarget instanceof HTMLElement) {

		if (menuIsActived) {

			menu?.classList.remove('actived');
			currentTarget.ariaExpanded = 'false';
			currentTarget.ariaLabel = 'abrir menu';
			scroll.unlockScroll('body')

		} else {

			menu?.classList.add('actived');
			currentTarget.ariaExpanded = 'true';
			currentTarget.ariaLabel = 'fechar menu';
			scroll.lockScroll('body')
			
		}
	}
};

export default handleMenuActions;
