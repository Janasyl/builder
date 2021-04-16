import Button from "../../../UI/Button/Button";
import StreetFoodIngredient from "../../StreetFoodIngredient/StreetFoodIngredient";
import classes from "./StreetFoodControl.module.css";

const StreetFoodControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.StreetFoodControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <StreetFoodIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default StreetFoodControl;