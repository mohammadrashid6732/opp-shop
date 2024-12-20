import Products from "./models/products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");

async function render() {
  try {
    const productsData = await fetchData();
    const productsInstance = new Products(productsNode, productsData);

    productsInstance.showProducts();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", render);
