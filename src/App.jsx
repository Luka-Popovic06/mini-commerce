import { useState } from "react";
import { productsArray } from "./products.js";
import Meal from "./Meal.jsx";
import "./App.css";

function App() {
  const [products, setProducts] = useState(productsArray);

  return (
    <>
      <nav>
        <h1 className="title">Mini Commerce</h1>
        <button type="button" className="shopping-cart-btn">
          <p className="product-number">2</p>
          <svg
            className="icon-shopping-cart"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </nav>
      <main className="container">
        <form className="search-form">
          <label htmlFor="search-input" className="search-label">
            Search product
          </label>
          <input
            type="text"
            id="search-input"
            name="search-input"
            className="search-input"
          />
        </form>
        <ul className="list">
          {products.map((product) => {
            return <Meal key={product.id} {...product} />;
          })}
        </ul>
        <button type="button" className="go-to-cart-btn">
          Go to your cart
        </button>
        <section className="section-total-price">
          <div className="total-price-box">
            <p className="total-price-title">Toatal Price:</p>
            <p className="total-price-p">
              <span className="total-price">91</span>$
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
