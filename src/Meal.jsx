const Meal = (props) => {
  return (
    <li className="list-element">
      <div>
        <p className="p-name">Sushi</p>
        <p className="p-description">Finest fish and veggies</p>
        <p className="p-price">
          <span className="price">22.99</span>$
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="number-input">Amount</label>
          <input
            type="number"
            id="number-input"
            name="number-input"
            className="number-input"
          />
        </div>
        <button type="submit">+ADD</button>
      </form>
    </li>
  );
};
export default Meal;
