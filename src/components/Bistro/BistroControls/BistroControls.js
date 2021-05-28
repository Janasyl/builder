import Button from "../../UI/Button/Button";
import BistroControl from "./BistroControl/BistroControl";
import classes from "./BistroControls.module.css";

const BistroControls = ({
  menus,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const menu in menus) {
    // Add ingredient number to totals number
    total += menus[menu];
    // Render pizza control for this ingredient
    results.push(<BistroControl
        key={menu}
        count={menus[menu]}
        type={menu} />)
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