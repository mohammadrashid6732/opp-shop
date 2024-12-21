import Products from "./models/products.js";
import { fetchData } from "./utils/httpReq.js";
import Cart from "./models/cart.js";
//
const productsNode = document.getElementById("products");
const cartNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  try {
    const productsData = await fetchData();
    const cartInstance = new Cart(cartNode, totalPriceNode);
    const productsInstance = new Products(
      productsNode,
      productsData,
      cartInstance
    );

    productsInstance.showProducts();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", render);
