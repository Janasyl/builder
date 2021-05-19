import BistroControl from "./BistroControl";
import classes from "./BistroControls.module.css";
import Button from "../../UI/Button/Button";

const BistroControls = ({ menus, startOrdering }) => {
  const results = [];
  let total = 0;
  for (const menu in menus) {
    total += menus[menu];
    results.push(<BistroControl type={menu} count={menus[menu]} key={menu} />);
  }
  return (
    <div className={classes.BistroControls}>
      {results}
      <Button disabled={!total} onClick={startOrdering}>
        Order
      </Button>
    </div>
  );
};

export default BistroControls;