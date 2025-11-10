import React, { useState } from "react";
const Meal = (props) => {
  const {
    id,
    name,
    description,
    price,
    addMealToCart,
    showCart,
    mealAmount,
    increase,
    decrease,
  } = props;
  const [amount, setAmount] = useState(1);

  return (
    <li className="list-element">
      <div>
        <p className="p-name">{name}</p>
        <p className="p-description">{description}</p>
        <p className="p-price">
          <span className="price">{price}</span>$
        </p>
      </div>
      {!showCart ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addMealToCart({
                id,
                name,
                description,
                price,
                mealAmount: amount,
                mealPrice: price * amount,
              });
              setAmount(1);
            }}
          >
            <div className="amount-box">
              <label htmlFor="number-input">Amount</label>
              <input
                type="number"
                id="number-input"
                name="number-input"
                className="number-input"
                defaultValue={1}
                min="1"
                max="9"
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                }}
              />
            </div>
            <button className="btn-add" type="submit">
              +ADD
            </button>
          </form>
        </>
      ) : (
        <div className="cart-btn-box">
          <button className="cart-btn" onClick={() => decrease(id)}>
            ➖
          </button>
          <p className="amount">{mealAmount}</p>
          <button className="cart-btn" onClick={() => increase(id)}>
            ➕
          </button>
        </div>
      )}
    </li>
  );
};
export default Meal;
