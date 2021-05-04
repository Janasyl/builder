import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price,}) => {
  const results = Object.keys(ingredients)
    .map(type => <li>{type}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
      <div className={classes.div}>
     </div>
    </div>
  );
}

export default OrderSummary;