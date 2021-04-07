import Button from "../../UI/Button/Button";
import StreetFoodControl from "./StreetFoodControl/StreetFoodControl";
import classes from "./StreetFoodControls.module.css";

const StreetFoodControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    // eslint-disable-next-line react/jsx-no-undef
    results.push(<StreetFoodControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.StreetFoodControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total}>Order</Button>
    </div>
  );
}

export default StreetFoodControls;