//module for import and use project
import Products from "./models/products.js";
import { fetchData } from "./utils/httpReq.js";
//selected node in the html
const productsNode = document.getElementById("products");
//fetch data and use it in the project
async function render() {
  const productsData = await fetchData();
  const productInstance = new Products(productsNode, productsData);

  productInstance.showProducts();
}
document.addEventListener("DOMContentLoaded", render);
