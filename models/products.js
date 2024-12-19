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
    const imgJsx = `<img src=${image} alt=${alt} />`;

    return imgJsx;
  }
  productInfo(data) {
    const { id, name, price } = data;
    const productJsx = ` 
      <div id="products-info">
        <h3>${name}</h3>
        <div>
          <span>${price}</span>
          <button>+</button>
        </div>
      </div>
    `;
    return productJsx;
  }
}

export default Products;
