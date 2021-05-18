import classes from "./OrderSummary.module.css";

const OrderSummary = ({ menu, price,}) => {
  const results = Object.keys(menu)
    .map(type => <li key={type}>{type}: {menu[type]}</li>);

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