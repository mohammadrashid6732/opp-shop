class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }
  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }
  createCard(data) {
    const cardEle = document.createElement("div");
    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;
    this.parent.appendChild(cardEle);
  }
  productImg(data) {
    const { image, alt } = data;
    return `
      <img src=${image} alt=${alt} />
    `;
  }
  productInfo(data) {
    const { name, price, id } = data;
    return `
      <div id="products-info">
        <h3>${name}</h3>
        <div>
          <span>${price}</span>
          <button data-id=${id}>+</button>
        </div>
      </div>
    `;
  }
  handleEvent(event) {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {}
}

export default Products;
