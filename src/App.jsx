import { useState, useEffect } from "react";
import { productsArray } from "./products.js";
import Meal from "./Meal.jsx";
import "./App.css";

function App() {
  const [meals, setMeals] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  /*const [mealsInfo, setMealsInfo] = useState({
    totalPrice: 0,
    mealsNumber: 0,
  });*/
  const [search, setSearch] = useState({
    searchText: "",
    searchArray: [],
  });
  const addToCart = (mealToAdd) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === mealToAdd.id);
      return !exists
        ? [...prevCart, mealToAdd] //ako ne postoji dodaj ga
        : //ako postoji abdejtuj ga
          prevCart.map((meal) =>
            meal.id === mealToAdd.id
              ? {
                  ...meal,
                  mealAmount: meal.mealAmount + mealToAdd.mealAmount,
                  mealPrice:
                    (meal.mealAmount + mealToAdd.mealAmount) * meal.price,
                }
              : meal
          );
    });
  };

  const increaseAmount = (id) => {
    setCart((prev) =>
      prev.map((meal) =>
        meal.id === id
          ? {
              ...meal,
              mealAmount: meal.mealAmount + 1,
              mealPrice: (meal.mealAmount + 1) * meal.price,
            }
          : meal
      )
    );
  };

  const decreaseAmount = (id) => {
    setCart((prev) =>
      prev
        .map((meal) =>
          meal.id === id
            ? {
                ...meal,
                mealAmount: meal.mealAmount - 1,
                mealPrice: (meal.mealAmount - 1) * meal.price,
              }
            : meal
        )
        .filter((meal) => meal.mealAmount > 0)
    );
  };

  useEffect(() => {
    const newArray = meals.filter((meal) =>
      meal.name.toLowerCase().includes(search.searchText.toLowerCase())
    );
    setSearch({ ...search, searchArray: newArray });
  }, [search.searchText]);
  const mealsInfo = {
    mealsNumber: cart.reduce((sum, meal) => sum + meal.mealAmount, 0),
    totalPrice: cart.reduce((sum, meal) => sum + meal.mealPrice, 0),
  };
  return (
    <>
      <nav>
        <h1 className="title">Mini Commerce</h1>
        <button
          type="button"
          className="shopping-cart-btn"
          onClick={() => setShowCart((prev) => !prev)}
        >
          <p className="product-number">{mealsInfo.mealsNumber}</p>
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
        {!showCart ? (
          <>
            <form className="search-form">
              <label htmlFor="search-input" className="search-label">
                Search product
              </label>
              <input
                type="text"
                id="search-input"
                name="search-input"
                className="search-input"
                onChange={(e) =>
                  setSearch({ ...search, searchText: e.target.value })
                }
              />
            </form>
            <ul className="list">
              {search.searchText === ""
                ? meals.map((meal) => {
                    return (
                      <Meal key={meal.id} {...meal} addMealToCart={addToCart} />
                    );
                  })
                : search.searchArray.map((meal) => {
                    return (
                      <Meal key={meal.id} {...meal} addMealToCart={addToCart} />
                    );
                  })}
            </ul>
          </>
        ) : cart.length > 0 ? (
          <ul className="list">
            {cart.map((meal) => {
              return (
                <Meal
                  key={meal.id}
                  {...meal}
                  showCart={showCart}
                  increase={increaseAmount}
                  decrease={decreaseAmount}
                />
              );
            })}
          </ul>
        ) : (
          <p className="cart-empty-p">Your cart is empty...</p>
        )}

        <button
          type="button"
          className="go-to-cart-btn"
          onClick={() => setShowCart((prev) => !prev)}
        >
          {!showCart ? "Go to your cart" : "Back to Products"}
        </button>
        <section className="section-total-price">
          <div className="total-price-box">
            <p className="total-price-title">Toatal Price:</p>
            <p className="total-price-p">
              <span className="total-price">
                {mealsInfo.totalPrice.toFixed(2)}
              </span>
              $
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
