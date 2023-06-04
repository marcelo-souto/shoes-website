export default class Pagination<T> {
  protected items;
  protected totalItemsPerPage: number;
  protected page: number;
  protected limit: number;
  protected offset: number;
  public itemsOnPage: Array<T>;

  constructor({
    items,
    totalItemsPerPage = 4,
  }: {
    items: Array<T>;
    totalItemsPerPage: number;
  }) {
    this.items = items;
    this.totalItemsPerPage = totalItemsPerPage;
    this.page = 1;
    this.limit = this.page * this.totalItemsPerPage;
    this.offset = 0;
    this.itemsOnPage = this._updateItemsOnPage();
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
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
      console.log("Next :", this.itemsOnPage);
    }
  }

  public prevPage() {
    if (this.page > 1) {
      this.page -= 1;
      this._updateLimit();
      this._updateOffset();
      this._updateItemsOnPage();
      console.log("Prev :", this.itemsOnPage);
    }
  }
}
