import classes from "./OrderSummary.module.css";

const OrderSummary = ({ menus, price }) => {
  const labels = {
    burger: "Burger",
    shawarma: "Shawarma",
    frenchfries: "French Fries",
    coffee: "Coffee",
    cola: "Cola",
  
  }
  const results = Object.keys(menus)
    .map(type => <li key={type}>{labels[type]}: {menus[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;