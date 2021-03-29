import FastFoodIngredient from "../../FastFoodIngredient/FastFoodIngredient";
import classes from "./FastFoodControl.module.css";

const FastFoodControl = ({ type, add, remove }) => {
  return (
    <div className={classes.FastFoodControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <FastFoodIngredient type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default FastFoodControl;