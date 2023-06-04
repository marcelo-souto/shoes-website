export default class Pagination<T> {
	protected items;
	protected totalItemsPerPage: number;
	public page: number;
	protected limit: number;
	protected offset: number;
	public itemsOnPage: Array<T>;
	public prevButton: HTMLElement | null;
	public nextButton: HTMLElement | null;

	constructor({
		items,
		totalItemsPerPage = 4,
		controls
	}: {
		items: Array<T>;
		totalItemsPerPage: number;
		controls: { prev: string; next: string };
	}) {
		this.items = items;
		this.totalItemsPerPage = totalItemsPerPage;
		this.page = 1;
		this.limit = this._updateLimit();
		this.offset = 0;
		this.itemsOnPage = this._updateItemsOnPage();
		this.nextButton = document.querySelector(controls.next);
		this.prevButton = document.querySelector(controls.prev);
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
    this._canGoPrev()
    this._canGoNext()
	}

	_canGoPrev() {
		if (this.page === 1) {
			this.prevButton?.setAttribute('disabled', 'disabled');
		} else {
			this.prevButton?.removeAttribute('disabled');
		}
	}

	_canGoNext() {
		if (this.itemsOnPage.length === this.totalItemsPerPage && this.items.length > this.limit) {
			this.nextButton?.removeAttribute('disabled');
		} else {
			this.nextButton?.setAttribute('disabled', 'disabled');
		}
	}

	protected _updateLimit() {
		return (this.limit = this.page * this.totalItemsPerPage);
	}

	protected _updateOffset() {
		return (this.offset = this.limit - this.totalItemsPerPage);
	}

	protected _updateItemsOnPage() {
		return (this.itemsOnPage = this.items.slice(this.offset, this.limit));
	}

	public nextPage() {
		if (this.itemsOnPage.length === this.totalItemsPerPage && this.items.length > this.limit) {
			this.page += 1;
			this._updateLimit();
			this._updateOffset();
			this._updateItemsOnPage();
			this._canGoNext();
			this._canGoPrev();
			console.log(this);
		}
	}

	public prevPage() {
		if (this.page > 1) {
			this.page -= 1;
			this._updateLimit();
			this._updateOffset();
			this._updateItemsOnPage();
			this._canGoPrev();
			this._canGoNext();
			console.log(this);
		}
	}

	public onClickPrevButton(fn: Function) {
		this.prevButton?.addEventListener('click', () => {
			this.prevPage();
			fn(this.itemsOnPage);
		});
	}

	public onClickNextButton(fn: Function) {
		this.nextButton?.addEventListener('click', () => {
			this.nextPage();
			fn(this.itemsOnPage);
		});
	}
}
