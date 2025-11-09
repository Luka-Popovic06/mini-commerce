const Meal = (props) => {
  const { id, name, description, price } = props;
  return (
    <li
      className="list-element"
      style={
        id !== 4 ? { borderBottom: "1px solid #ddd" } : { borderBottom: "none" }
      }
    >
      <div>
        <p className="p-name">{name}</p>
        <p className="p-description">{description}</p>
        <p className="p-price">
          <span className="price">{price}</span>$
        </p>
      </div>
      <form>
        <div className="amount-box">
          <label htmlFor="number-input">Amount</label>
          <input
            type="number"
            id="number-input"
            name="number-input"
            className="number-input"
          />
        </div>
        <button className="btn-add" type="submit">
          +ADD
        </button>
      </form>
    </li>
  );
};
export default Meal;
