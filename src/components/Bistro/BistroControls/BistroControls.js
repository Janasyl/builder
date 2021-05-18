import Button from "../../UI/Button/Button";
import BistroControl from "./BistroControl/BistroControl";
import classes from "./BistroControls.module.css";

const BistroControls = ({
  foods,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const food in foods) {
    // Add ingredient number to totals number
    total +=foods[food];
    // Render pizza control for this ingredient
    results.push(<BistroControl
        key={food}
        count={foods[food]}
        type={food} />)
  }

  return (
    <div className={classes.BistroControls}>
      <strong>Menu</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default BistroControls;