import axios from "axios";
import { PRODUCT_EVENT } from "./constant";
const customEvent = new Event(PRODUCT_EVENT);

const Product = {
  API_URL: "https://fakestoreapi.com",
  getAllProducts: async (query = "") => {
    const { data } = await axios.get(`${Product.API_URL}/products?${query}`);
    return data;
  },
};

const ProductListing = {
  productWrapper: document.querySelector("section.product"),
  loadMore: document.querySelector("#loadMoreProduct"),
  init: () => {
    if (!ProductListing.productWrapper) {
      return;
    }
    const queryParams = "limit=3";
    ProductListing.showProduct(queryParams);
  },
  showProduct: async (queryParams = "") => {
    const rowWrapper = ProductListing.productWrapper.querySelector(".row");

    let results = [];
    try {
      results = await Product.getAllProducts(queryParams);

      if (results) {
        rowWrapper.innerHTML = "";
        results.forEach((data) => {
          const product = ProductListing.createProduct(data);
          rowWrapper.insertAdjacentHTML("beforeend", product);
        });
        setTimeout(() => {
          window.dispatchEvent(customEvent);
        }, 100);
      }
    } catch (error) {
      console.log(error);
    }
  },
  createProduct: (product) => {
    const productElement = `
        <div class="col-md-4">
        <div class="product__item card">
            <div class="card__wrapper">
                <div class="card__image">
                    <picture>
                        <img src="${product.image}" alt="${product.title}">
                    </picture>
                </div>
                <div class="card__description">
                    <h3 class="card__text card__text--title">${product.title}</h3>
                    <p class="card__text card__text--red">$${product.price}</p>
                    <ul class="product__rating">
                        <li>
                            <i class="icon-star"></i>
                        </li>
                        <li>
                            <i class="icon-star"></i>
                        </li>
                        <li>
                            <i class="icon-star"></i>
                        </li>
                        <li>
                            <i class="icon-star"></i>
                        </li>
                        <li>
                            <i class="icon-star"></i>
                            ${product.rating.count}
                        </li>
                    </ul>
                    <div class="card__button">
                        <button class="btn btn-primary">Buy</button>
                        <button class="btn btn-secondary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    return productElement;
  },
};

window.addEventListener("DOMContentLoaded", async () => {
  ProductListing.init();
});

const loadMoreButton = document.querySelector("#loadMoreProduct") || null;

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", async () => {
    await ProductListing.showProduct();
    loadMoreButton.classList.add("d-none");
  });
}
